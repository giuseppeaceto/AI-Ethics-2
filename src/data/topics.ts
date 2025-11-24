export type Topic = {
  id: string
  title: string
  subtitle: string
  category: string
  answer: string
  tags: string[]
  followUp?: string
}

export const topics: Topic[] = [
  {
    id: 'personal-intro',
    title: 'Personal Introduction',
    subtitle: 'Who I am and what I bring',
    category: 'Intro & Motivation',
    answer:
      "I'm an AI Ethicist at CERN, which sounds fancy but really means I turn Responsible AI policy into workflows that scientists and engineers can actually follow without wanting to quit.\n\nMy background is human-computer interaction, large-scale delivery, and running multilingual regulated programs, so I can shift between lab detail and board-level conversations without losing people.\n\nRight now I run cross-functional reviews, coach product teams on safety metrics, and keep governance controls audit-ready. The goal is simple: experiments move fast, regulators don't get surprised.",
    followUp:
      "What I bring: I simplify dense policy, I build trust between technical and regulatory people who normally don't speak the same language, and I keep incident response muscle sharp through rehearsals. The last part matters more than people think.",
    tags: ['intro', 'profile', 'experience'],
  },
  {
    id: 'motivation-msft',
    title: 'Why Microsoft',
    subtitle: 'Motivation & fit for the role',
    category: 'Intro & Motivation',
    answer:
      "Honest answer? At CERN I've proven these systems work in high-stakes environments. But it's 3,000 users max, mostly physicists who already think in terms of rigor and evidence.\n\nMicrosoft is different. Copilot reaches millions of people daily—enterprise customers, regulated industries, users who've never thought about AI safety. That's the scale where you find out if your telemetry actually catches things or just looks good in the governance deck.\n\nPlus, Microsoft's Responsible AI charter isn't a side project. It's core to the product, which is rare at this scale. I want to work somewhere that treats this stuff as essential, not as the team that slows everyone down.",
    followUp:
      "Concrete touchpoints: I've already collaborated with Azure on CERN workloads and briefed EU regulators on high-risk AI systems. Now I want to bring that experience directly into the Copilot safety stack and see what breaks at real scale.",
    tags: ['motivation', 'culture', 'impact'],
  },
  {
    id: 'rai-standard',
    title: 'Responsible AI Standard',
    subtitle: 'Making enterprise guardrails workable',
    category: 'Responsible AI Guardrails',
    answer:
      "Here's the thing: policy documents don't stop experiments from shipping bad models. Workflows do.\n\nSo I take dense policy into the control room and make it operational. I ask three questions: what's the measurable signal, who signs off, and where does the evidence live? That loop covers dataset lineage, human-in-the-loop procedures, abuse-response SLAs—everything.\n\nBy the time we hit the readiness review—which we model like CERN's safety boards—product, legal, and research have already stress-tested the sharpest edge cases. We leave with a mitigation plan, not new homework.",
    followUp:
      "Proof it works: our last launch had 87% of controls green two weeks before GA because we rehearsed gaps in dry runs. I keep a traceability log where each control links to owners, evidence, and SLAs. Auditors love it because they don't have to hunt for answers.",
    tags: ['governance', 'compliance', 'readiness'],
  },
  {
    id: 'fairness-eval',
    title: 'Fairness & Harm Evaluation',
    subtitle: 'Designing metrics that matter',
    category: 'Responsible AI Guardrails',
    answer:
      "I still think like an experimental physicist: define cohorts, isolate bias sources, run controlled probes. Guesswork doesn't survive scrutiny, and it definitely doesn't survive regulators.\n\nUser researchers and data scientists co-own this with me. They translate the user journey into harm hypotheses, we design counterfactual evaluations, stress-test underrepresented voices, build synthetic probes for edge cases.\n\nWe only close the work when a systemic-harm red team signs off. Their findings go straight into a risk log so mitigations and residual exposure stay visible to leadership. No burying bad news.",
    followUp:
      'Example: recent conversational model, we tracked actionability gaps across 12 demographic cohorts. We only shipped when every cohort sat within ±3% on success metrics and under 1% on safety overrides. Non-negotiable.',
    tags: ['metrics', 'evaluation', 'red-teaming'],
  },
  {
    id: 'incident-response',
    title: 'Incident Response',
    subtitle: 'Keeping humans in the loop',
    category: 'Responsible AI Guardrails',
    answer:
      "Incidents behave like cascading signals. You catch the anomaly quickly, then route it through humans who can act before the blast radius grows. Speed matters.\n\nWe've got three layers: telemetry that flags drift or safety regressions, an on-call program lead who triages with product and legal, and a cross-functional incident cell for user comms, regulator outreach, mitigations.\n\nMuscle memory is everything, so we run quarterly tabletop drills with media simulations. Every real incident ends with a narrative report that updates policy, docs, and training.",
    followUp:
      "Latest drill numbers: 32 minutes from alert to executive briefing, 55 minutes to ship user communications. Every step documented in the incident log for audit. We time ourselves because if you don't measure it, you can't improve it.",
    tags: ['operations', 'monitoring', 'playbooks'],
  },
  {
    id: 'stakeholder-mgmt',
    title: 'Stakeholder Management',
    subtitle: 'Earning trust across the org',
    category: 'Responsible AI Guardrails',
    answer:
      "Scientific councils at CERN taught me to be precise about decision rights. Legal interprets policy, engineering owns telemetry, customer teams own readiness, the RAI office keeps the governance bar steady. No fuzzy ownership.\n\nBecause that map is clear, I send short narrative memos before each checkpoint. People debate asynchronously, and live meetings focus on the few choices that actually matter. Nobody wants another hour of people talking past each other.\n\nWhen I brief executives, I link decisions to risk posture, the investment that unlocks the next milestone, and blockers where they can add leverage immediately. No fluff.",
    followUp:
      'My one-pager format: context, risks, decisions needed, owner. Reviewers comment in advance, so live meetings only cover deltas. Milestone reviews stay under 30 minutes. People appreciate getting their time back.',
    tags: ['communication', 'alignment', 'narratives'],
  },
  {
    id: 'ai-maturity',
    title: 'AI Maturity Assessment',
    subtitle: 'Prioritizing investments',
    category: 'Responsible AI Guardrails',
    answer:
      "Before any system touches an experiment at CERN, we benchmark it across governance, lifecycle, measurement, accountability. Using the same rubric for RAI maturity feels natural.\n\nOnce scores land, anything below 'defined and repeatable' becomes a gap with an owner and target level. That turns a vague weakness into a concrete project with a deadline.\n\nThose projects mix pragmatic wins—policy kits, telemetry dashboards—with longer bets like evaluation platforms. Gives leaders a roadmap that ties compliance value to customer upside, which is how you get budget.",
    followUp:
      "My rubric has five levels per domain. Anything scoring below level 3 (\"defined and repeatable\") feeds a remediation plan with owners, investments, timeline. Board sees it, so nobody can pretend the gap doesn't exist.",
    tags: ['strategy', 'roadmapping', 'investment'],
  },
  {
    id: 'partner-ecosystem',
    title: 'Partner Ecosystem',
    subtitle: 'Guiding customers responsibly',
    category: 'Responsible AI Guardrails',
    answer:
      "CERN collaborations taught me that expectations diverge fast unless everyone shares the same kit. So I ship reusable artifacts: data-protection addenda, deployment checklists, assurance narratives.\n\nWith that common base, we line up controls, document shared risks, agree on escalation paths before launch. Keeps us synced once the product is live.\n\nIf something goes sideways, we already know who responds, how quickly, which artifacts regulators want. We move together instead of pointing fingers.",
    followUp:
      'We keep a shared readiness tracker: green, yellow, red status per partner. Lists who owns joint DPAs, what telemetry is shared, exact phone tree for incidents. Simple, visible, accountable.',
    tags: ['customers', 'playbooks', 'ecosystem'],
  },
  {
    id: 'data-lineage',
    title: 'Data & Model Provenance',
    subtitle: 'Keeping the evidence trail alive',
    category: 'Responsible AI Guardrails',
    answer:
      "At CERN every dataset and model is treated like an experiment. We log where it came from, who touched it, why it changed. That mindset travels with me.\n\nRAI programs inherit the same discipline: lineage spans ingestion, labeling, fine-tuning, deployment. Automated checks for licensing, consent, protected attributes baked in.\n\nWhen someone asks, 'Can this model answer for its training data?' we open the provenance ledger and show the chain of custody plus approvals that kept it compliant.",
    followUp:
      'Tools: signed dataset manifests, model cards linked to source-control commits, automated policy checks in CI/CD. Auditors get a PDF packet produced directly from that ledger. No manual assembly.',
    tags: ['data', 'lineage', 'model-risk'],
  },
  {
    id: 'telemetry-measurement',
    title: 'Measurement & Telemetry',
    subtitle: 'Listening to models after launch',
    category: 'Responsible AI Guardrails',
    answer:
      "Systems at CERN only earn trust when telemetry proves they behave. I carry that rule into production AI—trust isn't assumed, it's measured.\n\nBefore launch: agree on success metrics, harm indicators, alert thresholds. After launch: stream cohort performance, latency, safety violations, human override rates to shared dashboards.\n\nWhen an alert fires, the on-call lead already has context—logs, user journey, mitigations—so we brief regulators or customers with data, not anecdotes.",
    followUp:
      "Typical stack: metric store, feature store, notebook that replays the offending session. We rehearse alerts monthly so on-call muscle stays fresh. If you don't practice, people freeze when real incidents hit.",
    tags: ['monitoring', 'metrics', 'operations'],
  },
  {
    id: 'reg-readiness',
    title: 'Regulatory Readiness',
    subtitle: 'AI Act, NIST, and beyond',
    category: 'Responsible AI Guardrails',
    answer:
      "CERN operates under multiple jurisdictions, so building compliance programs that travel well is daily work, not a special project.\n\nApplying that to AI rules like EU AI Act or NIST RMF means mapping each requirement to controls, owners, evidence, then running gap analyses so the riskiest items rise to the top.\n\nEverything rolls into an assurance kit. Legal, auditors, regulators read the same story. Every safeguard—human oversight, robustness testing, transparency—has an accountable owner before anyone asks.",
    followUp:
      'When the AI Act draft landed, I turned Article 9 obligations into a spreadsheet: owners, evidence links, deadlines. Board could instantly see which safeguards were ready for conformity assessment. No surprises.',
    tags: ['policy', 'compliance', 'risk'],
  },
  {
    id: 'model-guardrails',
    title: 'Model & Safety Guardrails',
    subtitle: 'From training loop to runtime filters',
    category: 'Responsible AI Guardrails',
    answer:
      "I keep the training stack modular: curated datasets flow through a feature store, models train with automated evaluation gates, every artifact gets a versioned model card we can trace later.\n\nThat modularity pays off when we run robustness sweeps, jailbreak probes, policy alignment checks. Anything that fails loops back for fine-tuning or RLHF without derailing the rest of the stack.\n\nOnce live, we layer safety filters—prompt sanitizers, classifier ensembles, human handoff—and log every intervention back into the training queue. Models and policies learn from real incidents.",
    followUp:
      'Recent deployment: layered safety classifier with rule-based guardrail, harmful output rates dropped below 0.2%. Every blocked case fed into weekly RLHF batches. Closed loop.',
    tags: ['ml-operations', 'safety', 'architecture'],
  },
  {
    id: 'cern-rag',
    title: 'CERN RAG Program',
    subtitle: 'Retrieval-augmented assistant for physicists',
    category: 'Innovation & Case Studies',
    answer:
      "One of the most hands-on RAI projects I've led: a retrieval-augmented assistant that helps physicists navigate detector documentation while staying inside strict export and safety rules.\n\nWe built three layers: (1) curated document store with automated export classification, (2) grounding layer that cites every retrieved paragraph and rejects low-confidence answers, (3) human-in-the-loop review queue for anything touching sensitive experiments. Plus telemetry tracking hallucination rate, latency, reviewer overrides in real time.\n\nFirst two weeks were messy—hallucination rates were embarrassing. But pairing policy experts with retrieval engineers from day zero meant we could iterate fast. Within six weeks: 3,500 weekly questions, resolution time dropped 40%, safety boards signed off because every response came with auditable provenance.",
    followUp:
      'Metrics I share: 3,500 weekly queries, zero unresolved incidents since launch, 0.4% hallucination rate, quarterly red-team drills focused on prompt injection and data leakage. Still running clean.',
    tags: ['rag', 'case-study', 'impact'],
  },
  {
    id: 'scenario-data-leak',
    title: 'Scenario • Data Leak',
    subtitle: 'Copilot sends data to the wrong tenant',
    category: 'Scenarios & Rapid Response',
    answer:
      "Question: Copilot surfaces sensitive customer data to the wrong tenancy. First move?\n\nAnswer: Trigger the incident cell, freeze the feature flag, alert legal and privacy, notify affected customers within the first hour. Document every action so regulators see a coherent chain of custody.\n\nSpeed matters here. The longer you wait to notify, the worse the regulatory exposure gets.",
    followUp:
      'Metric: mean time to contain under 45 minutes, customer notification within the first hour. Non-negotiable SLA.',
    tags: ['scenario', 'data-protection', 'incident'],
  },
  {
    id: 'scenario-fairness-gap',
    title: 'Scenario • Fairness Gap',
    subtitle: 'Regulator flags missing disability cohort',
    category: 'Scenarios & Rapid Response',
    answer:
      "Question: Regulator flags that our fairness evaluation ignored a disability cohort. How do you keep launch momentum?\n\nAnswer: I don't. I acknowledge the gap immediately, spin up synthetic data plus user research to quantify harm within 48 hours, and only resume launch when the new metrics sit within tolerance and the regulator signs off.\n\nNo amount of launch momentum is worth shipping a model we can't defend.",
    followUp:
      'Metric: fairness delta reduced below ±2% with documented approvals before re-launch. Then you can talk about resuming the schedule.',
    tags: ['scenario', 'fairness', 'regulators'],
  },
  {
    id: 'scenario-partner-risk',
    title: 'Scenario • Partner Pushback',
    subtitle: 'Azure partner rejects a safety control',
    category: 'Scenarios & Rapid Response',
    answer:
      "Question: Azure partner refuses to implement a safety control you require. What path do you take?\n\nAnswer: Escalate through the joint governance board, outline the risk and contractual obligations clearly. If needed, gate their deployment behind a compensating control we can monitor centrally.\n\nPartners don't get to opt out of safety requirements just because they don't like the overhead.",
    followUp:
      'Metric: percentage of partners adopting the control within two sprints, number of escalations needed. Track both so you know if your process is broken.',
    tags: ['scenario', 'partners', 'governance'],
  },
  {
    id: 'scenario-geo-spike',
    title: 'Scenario • Geo Spike',
    subtitle: 'Safety overrides surge in one region',
    category: 'Scenarios & Rapid Response',
    answer:
      "Question: Telemetry shows safety overrides spiking in one geography. What hypotheses do you test?\n\nAnswer: Compare local content policies, recent product changes, user cohorts. Then run a targeted red team to see if adversaries discovered a new prompt path. If they did, roll out mitigations globally—don't wait for other regions to hit the same issue.",
    followUp:
      'Metric: return-to-baseline within 72 hours, number of mitigations shipped globally. The faster you move, the less exposure you have.',
    tags: ['scenario', 'telemetry', 'red-team'],
  },
  {
    id: 'proj-challenge',
    title: 'Challenging Project Leadership',
    subtitle: "Leading CERN's multi-team safety retrofit",
    category: 'Leadership & Teaming',
    answer:
      "Hardest effort I've led: retrofitting CERN's experimentation platform with RAI controls while the science schedule stayed live. No downtime allowed, no exceptions.\n\nI set up a war-room cadence across ethics, detector engineering, operations. Mapped every control to an owner, introduced a visible burn-down of policy gaps so execs could unblock us daily.\n\nFirst week was chaos—people thought we'd never ship on time. But everyone could see exactly what was needed from them, so they stopped guessing. We shipped three weeks early with zero experiment downtime.",
    followUp:
      'Resource plan: 5 workstreams, 17 engineers, daily 30-minute standups, live dashboard tracking closure of 48 controls. Transparency kept the panic under control.',
    tags: ['leadership', 'program-management', 'delivery'],
  },
  {
    id: 'cloud-experience',
    title: 'Cloud Experience',
    subtitle: 'Azure & AWS in practice',
    category: 'Cloud & Architecture',
    answer:
      "At CERN I work with both Azure and AWS. Azure powers our RAI telemetry stack—Event Hubs, Synapse, Purview. AWS hosts some legacy physics workloads.\n\nI design hybrid architectures where sensitive data stays in-region, use Azure Policy and Blueprints for guardrails, rely on AWS Control Tower for parity. Same monitoring policies follow the workload regardless of cloud.\n\nThe goal is to make governance portable so we're not locked into one vendor's compliance model.",
    followUp:
      'Example: deployed an Azure-based RAI dashboard ingesting 2M daily events. Mirrored key alerts into AWS CloudWatch for cross-cloud incident visibility. Works cleanly.',
    tags: ['cloud', 'azure', 'aws'],
  },
  {
    id: 'technical-challenge',
    title: 'Handling Technical Unknowns',
    subtitle: 'Solving a major safety regression',
    category: 'Cloud & Architecture',
    answer:
      "We saw a spike of hallucinated physics citations in our RAG assistant right before a conference. Bad timing.\n\nI pulled together retrieval engineers, applied scientists, human review team. Set up a shared Miro board of hypotheses, ran parallel experiments: tweaking chunk sizes, adding grounding filters, retraining the ranker.\n\nLayered an interim fact-checker to buy time, rolled a permanent fix within 72 hours. Hallucination rate dropped from 6% to 0.4%.",
    followUp:
      "Documented the whole playbook so now it's reused for every content regression. When things break, you want a protocol, not panic.",
    tags: ['problem-solving', 'teamwork', 'quality'],
  },
  {
    id: 'cross-collab',
    title: 'Cross-Department Collaboration',
    subtitle: 'Aligning product, marketing, and research',
    category: 'Leadership & Teaming',
    answer:
      "I start with a shared narrative memo before every milestone: goals, risks, decisions. Product adds user impact, marketing adds launch narratives, my team adds safety evidence.\n\nWe review asynchronously, track comments in one place, use live meetings only to resolve disagreements. That ritual keeps everyone aligned and prevents surprise escalations at the last minute.\n\nNobody likes finding out about a blocker three days before launch.",
    followUp:
      'Metric: cross-functional decision memos cut approval time by 35%, reduced "last-minute blocker" escalations to near zero. People appreciate predictability.',
    tags: ['collaboration', 'stakeholders', 'communication'],
  },
  {
    id: 'innovation-process',
    title: 'Driving Innovation',
    subtitle: 'Introducing automated safety probes',
    category: 'Innovation & Case Studies',
    answer:
      "At CERN I built an automated 'safety probe' framework that behaves like a continuous red team.\n\nCurated hundreds of adversarial prompts, tagged by harm type, wired the suite into CI/CD. Every commit spins up disposable environments, runs the probes, posts results directly into Slack with repro steps. Engineers fix issues before code reaches staging.\n\nPackaged the probes so Azure partners could run the same tests on their extensions. Created a shared safety baseline.",
    followUp:
      "Impact: reduced mean time to detect safety regressions from weeks to hours, cut manual red-team effort by 50%. Now it's just part of the pipeline.",
    tags: ['innovation', 'process', 'automation'],
  },
  {
    id: 'stakeholder-conflict',
    title: 'Stakeholder Alignment',
    subtitle: 'Managing conflicting priorities',
    category: 'Leadership & Teaming',
    answer:
      "I map each priority to the risk or outcome it represents, quantify the trade-offs, present a simple decision table.\n\nWe make the tension explicit—'ship date vs. compliance gap'—and assign clear owners for mitigations. That transparent framing lets executives make informed calls without feeling blindsided.\n\nNobody likes being put on the spot with a decision they don't understand.",
    followUp:
      'Tooling: one-page trade-off matrix with impact, risk, owner, mitigation timeline. Updated weekly. Keeps everyone honest.',
    tags: ['stakeholders', 'communication', 'governance'],
  },
  {
    id: 'inclusive-culture',
    title: 'Inclusivity & Diversity',
    subtitle: 'Making every voice count',
    category: 'Leadership & Teaming',
    answer:
      "I run rotating facilitation so every meeting has a different chair. Pair senior and junior engineers on decision docs. Set explicit norms for language and accessibility.\n\nWhen we onboarded new hires from three continents, we added 'silent brainstorms' in Miro before discussions. Introverted voices shaped the plan before the loudest person spoke.\n\nYou don't get good ideas if the same three people dominate every conversation.",
    followUp:
      'Outcome: engagement survey scores on "my voice is heard" rose from 72% to 91% within two quarters. People notice when you actually change the process.',
    tags: ['people', 'culture', 'inclusion'],
  },
  {
    id: 'performance-coaching',
    title: 'Managing Underperformance',
    subtitle: 'Coaching and tough calls',
    category: 'Leadership & Teaming',
    answer:
      "I start with a clear performance contract: specific behaviors, support, checkpoints.\n\nAt CERN I had an engineer missing deadlines. We paired them with a mentor, re-scoped their work, added twice-weekly check-ins. When progress still lagged after six weeks, we transitioned them to a role that matched their strengths and backfilled the critical path.\n\nYou give people a real shot to improve, but you don't let the team suffer indefinitely.",
    followUp:
      "Key is documenting expectations and support. In that case, quality rebounded within a sprint, team velocity recovered by 20%. Everyone knew we'd been fair.",
    tags: ['people-management', 'coaching', 'performance'],
  },
  {
    id: 'scalable-arch',
    title: 'Scalable Architecture',
    subtitle: 'Designing resilient systems',
    category: 'Cloud & Architecture',
    answer:
      "I use a pattern of modular services, contract tests, chaos drills.\n\nFor CERN's telemetry platform: built on Azure Event Hubs, processed via Kubernetes-based stream workers, introduced circuit breakers plus synthetic load tests before every major release.\n\nScalability isn't an afterthought. It's a budget line with defined SLOs.",
    followUp:
      'Numbers: platform handles 2M+ events/day with 99.95% uptime, auto-scales within 90 seconds when load doubles. Works because we tested it under stress before launch.',
    tags: ['architecture', 'scalability', 'resilience'],
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    subtitle: 'Keeping teams sharp',
    category: 'Leadership & Teaming',
    answer:
      "I budget time every sprint for 'learning tickets,' run quarterly skill maps, bring external experts for live clinics.\n\nEveryone shares what they learned in a short Loom or doc so the knowledge sticks. We track participation just like KPIs—learning isn't optional, it's part of the plan.\n\nYou can't stay sharp if you're only doing the same work every sprint.",
    followUp:
      'Result: 100% of the team completed at least two certifications last year, reduced onboarding time for new hires by 30%. Investment pays for itself.',
    tags: ['learning', 'culture', 'growth'],
  },
]