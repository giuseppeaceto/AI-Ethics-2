import { useEffect, useMemo, useState } from 'react'
import './App.css'
import { topics } from './data/topics'

const categoryOrder = Array.from(new Set(topics.map((topic) => topic.category)))

const filterChips = [
  {
    id: 'all',
    label: 'Tutto',
    categories: null,
  },
  {
    id: 'personal',
    label: 'Presentazione & Motivazione',
    categories: ['Intro & Motivation'],
  },
  {
    id: 'guardrails',
    label: 'Responsible AI',
    categories: ['Responsible AI Guardrails'],
  },
  {
    id: 'scenarios',
    label: 'Scenario Playbooks',
    categories: ['Scenarios & Rapid Response'],
  },
  {
    id: 'leadership',
    label: 'Leadership & Teaming',
    categories: ['Leadership & Teaming'],
  },
  {
    id: 'innovation',
    label: 'Innovation & Case Studies',
    categories: ['Innovation & Case Studies'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Architecture',
    categories: ['Cloud & Architecture'],
  },
]

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState<string | undefined>(
    topics[0]?.id
  )
  const [isAnswerOpen, setIsAnswerOpen] = useState(false)
  const [activeFilterId, setActiveFilterId] = useState('all')

  const filteredTopics = useMemo(() => {
    const activeFilter = filterChips.find((chip) => chip.id === activeFilterId)
    if (!activeFilter || !activeFilter.categories) {
      return topics
    }
    return topics.filter((topic) => activeFilter.categories?.includes(topic.category))
  }, [activeFilterId])

  const groupedTopics = useMemo(() => {
    return categoryOrder
      .map((category) => ({
        category,
        items: filteredTopics.filter((topic) => topic.category === category),
      }))
      .filter((group) => group.items.length > 0)
  }, [filteredTopics])

  const activeTopic =
    topics.find((topic) => topic.id === selectedTopicId) ??
    topics[0] ??
    topics[0]
  const shouldShowAnswer = Boolean(isAnswerOpen && activeTopic)

  useEffect(() => {
    if (!shouldShowAnswer) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsAnswerOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [shouldShowAnswer])

  const openAnswer = (topicId: string) => {
    setSelectedTopicId(topicId)
    setIsAnswerOpen(true)
  }

  const closeAnswer = () => setIsAnswerOpen(false)

  return (
    <div className="app-shell">
      <main>
        <section className="topics-panel">
          <div className="filter-chip-bar" aria-label="Filtra i topic per area">
            {filterChips.map((chip) => {
              const isActive = chip.id === activeFilterId
              return (
                <button
                  key={chip.id}
                  type="button"
                  className={isActive ? 'filter-chip active' : 'filter-chip'}
                  onClick={() => setActiveFilterId(chip.id)}
                >
                  {chip.label}
                </button>
              )
            })}
          </div>
          {groupedTopics.length === 0 ? (
            <div className="empty-state">
              <p>No topics match that filter yet.</p>
              <p>Reset the filter to see every topic.</p>
            </div>
          ) : (
            groupedTopics.map(({ category, items }) => (
              <div key={category} className="category-group">
                <div className="category-header">
                  <h3>{category}</h3>
                  <span className="category-count">
                    {items.length} {items.length === 1 ? 'topic' : 'topics'}
                  </span>
                </div>
                <div className="topics-grid">
                  {items.map((topic) => {
                    const isActive = topic.id === activeTopic?.id
                    return (
                      <button
                        key={topic.id}
                        className={isActive ? 'topic-card active' : 'topic-card'}
                        onClick={() => openAnswer(topic.id)}
                        type="button"
                      >
                        <div className="topic-card-body">
                          <p className="topic-title">{topic.title}</p>
                          <p className="topic-subtitle">{topic.subtitle}</p>
                        </div>
                        <div className="topic-tags">
                          {topic.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))
          )}
        </section>
      </main>

      {shouldShowAnswer && activeTopic && (
        <div className="answer-overlay" onClick={closeAnswer}>
          <button
            className="overlay-close"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              closeAnswer()
            }}
          >
            Close
          </button>
          <div
            className="overlay-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="answer-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="overlay-eyebrow">{activeTopic.subtitle}</p>
            <h2 id="answer-title">{activeTopic.title}</h2>
            <article className="answer-card">
              {activeTopic.answer.split('\n').map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
            {activeTopic.followUp && (
              <div className="follow-up">
                <p className="follow-up-label">If they dig deeper</p>
                <p>{activeTopic.followUp}</p>
              </div>
            )}
            <div className="overlay-tags">
              {activeTopic.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <footer className="panel-footer">
              <p>Tip: follow up with impact metrics, blockers, and next bets.</p>
            </footer>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
