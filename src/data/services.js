// B2B healthcare service catalog for Fidiviaa.
//
// Two service tiers:
//   - `standard`: compact category cards (Patient Access, HIM & Clinical, IT,
//     Patient Financial). Each has a detail page in the Overview / Services
//     Provided format.
//   - `featured`: larger, flagship services (Medical Billing, RCM Automation &
//     Analytics). Same detail format plus a process-flow diagram driven by
//     `processFlows[service.flow]`.
//
// Imagery uses curated Unsplash URLs relevant to B2B healthcare (clinical
// staff, health IT/data, billing & admin), consistent with siteContent.js.

const IMG = (id) => `/images/lib/photo-${id}.jpg`;

const services = [
  {
    id: 1,
    slug: 'patient-access-services',
    title: 'Patient Access Services',
    type: 'standard',
    icon: 'bi-person-vcard',
    tagline:
      'Clean front-end registration, eligibility, and authorization that stop denials before they start.',
    cardImage: IMG('1576091160399-112ba8d25d1d'),
    bannerImage: IMG('1538108149393-fbbd81895907'),
    overviewImage: IMG('1516549655169-df83a0774514'),
    provideImage: IMG('1516549655169-df83a0774514'),
    overview: {
      paragraphs: [
        'Patient access is the front door of the revenue cycle. Errors introduced at registration — inaccurate demographics, unverified coverage, or missing authorizations — cascade into downstream denials, delayed reimbursement, and a poor patient financial experience.',
        "Fidiviaa's patient access teams verify coverage in real time against payer systems, secure required authorizations, and deliver accurate out-of-pocket estimates before the date of service. The result is a clean claim rate that starts high and a patient who understands their financial responsibility up front.",
      ],
      bullets: [
        'Scheduled inpatient and outpatient encounters',
        'High-cost imaging and diagnostic services',
        'Elective surgical procedures',
        'Infusion and specialty pharmacy services',
        'Referred and pre-authorized specialty visits',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa provides trained, HIPAA-compliant patient access specialists across the full financial clearance lifecycle. Services provided include:',
      bullets: [
        'Insurance eligibility and benefits verification',
        'Prior authorization and referral management',
        'Patient payment estimation and pre-service collections',
        'Pre-registration and demographic capture',
        'Provider enrollment and credentialing',
      ],
    },
  },
  {
    id: 2,
    slug: 'him-and-clinical-services',
    title: 'HIM and Clinical Services',
    type: 'standard',
    icon: 'bi-file-medical',
    tagline:
      'Coding, documentation integrity, and clinical review that keep records compliant and reimbursement accurate.',
    cardImage: IMG('1584432810601-6c7f27d2362b'),
    bannerImage: IMG('1519494026892-80bbd2d6fd0d'),
    overviewImage: IMG('1584432810601-6c7f27d2362b'),
    provideImage: IMG('1504813184591-01572f98c85f'),
    overview: {
      paragraphs: [
        'Health Information Management sits at the intersection of clinical documentation, coding accuracy, and regulatory compliance. Incomplete documentation and coding variance expose provider organizations to denials, audit risk, and lost revenue.',
        "Fidiviaa's certified coders and clinical reviewers ensure every encounter is documented, coded, and audited to the standard payers and regulators expect — improving case-mix accuracy, defending against takebacks, and shortening the coding-to-bill cycle.",
      ],
      bullets: [
        'Inpatient and outpatient facility coding',
        'Professional (pro-fee) coding',
        'Risk adjustment and HCC capture',
        'Clinical documentation integrity reviews',
        'Coding quality audits and education',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa deploys AAPC/AHIMA-credentialed coders and clinicians across HIM and clinical workflows. Services provided include:',
      bullets: [
        'Clinical prior authorization support',
        'Clinical documentation integrity (CDI) reviews',
        'Clinical denials and appeals management',
        'Physician advisory and query services',
        'Utilization management',
        'Risk adjustment, facility, and professional fee coding',
        'Medical code auditing',
      ],
    },
  },
  {
    id: 3,
    slug: 'it-services',
    title: 'IT Services',
    type: 'standard',
    icon: 'bi-hdd-network',
    tagline:
      'Health IT support, integration, and security that keep clinical and revenue systems running and compliant.',
    cardImage: IMG('1551288049-bebda4e38f71'),
    bannerImage: IMG('1526628953301-3e589a6a8b74'),
    overviewImage: IMG('1526628953301-3e589a6a8b74'),
    provideImage: IMG('1460925895917-afdab827c52f'),
    overview: {
      paragraphs: [
        'Modern provider organizations run on a complex stack of EHR, practice management, clearinghouse, and analytics systems. Downtime, integration gaps, and security exposure directly threaten patient care and cash flow.',
        "Fidiviaa's health IT teams implement, integrate, and support these systems with a security-first, HIPAA-compliant approach — so clinical and revenue-cycle applications stay available, connected, and audit-ready.",
      ],
      bullets: [
        'EHR/EMR platform support and optimization',
        'HL7/FHIR interfaces and data exchange',
        'Practice management and clearinghouse integration',
        'Cloud and infrastructure management',
        'Cybersecurity and HIPAA compliance',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa provides end-to-end healthcare technology services delivered by experienced engineers. Services provided include:',
      bullets: [
        'EHR/EMR implementation, upgrades, and support',
        'Application management and service desk',
        'Data migration and systems integration (HL7/FHIR)',
        'Infrastructure, hosting, and cloud management',
        'Cybersecurity, access control, and HIPAA compliance',
        'Reporting and business intelligence enablement',
      ],
    },
  },
  {
    id: 4,
    slug: 'patient-financial-services',
    title: 'Patient Financial Services',
    type: 'standard',
    icon: 'bi-cash-coin',
    tagline:
      'Claims, A/R, and denial management that accelerate cash and reduce cost-to-collect.',
    cardImage: IMG('1554224155-6726b3ff858f'),
    bannerImage: IMG('1576091160550-2173dba999ef'),
    overviewImage: IMG('1551076805-e1869033e561'),
    provideImage: IMG('1554224155-6726b3ff858f'),
    overview: {
      paragraphs: [
        'The back end of the revenue cycle determines how much of earned revenue a provider actually collects — and how quickly. Aged A/R, unworked denials, and payment variance quietly erode margin.',
        "Fidiviaa's patient financial services teams manage claims from submission through final resolution: following up on aging accounts, appealing denials, reconciling payer underpayments, and posting payments accurately so your net collection rate climbs and days in A/R fall.",
      ],
      bullets: [
        'Aged and complex accounts receivable',
        'High-volume payer denials',
        'Contractual payment variances and underpayments',
        'Self-pay and patient balances',
        'Credit balances and refunds',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa manages the full back-end revenue cycle with experienced financial specialists. Services provided include:',
      bullets: [
        'Claims management and submission',
        'A/R management and follow-up',
        'Denial management and prevention',
        'Payment variance and underpayment recovery',
        'Self-pay management',
        'Payment posting and reconciliation',
        'Credit balance resolution',
        'EDI enrollment',
      ],
    },
  },
  {
    id: 5,
    slug: 'medical-billing',
    title: 'Medical Billing',
    type: 'featured',
    icon: 'bi-receipt',
    flow: 'medical-billing',
    tagline:
      'End-to-end medical billing that turns care delivered into revenue collected — accurately and on time.',
    cardImage: IMG('1551076805-e1869033e561'),
    bannerImage: IMG('1551076805-e1869033e561'),
    overviewImage: IMG('1554224155-6726b3ff858f'),
    provideImage: IMG('1576091160399-112ba8d25d1d'),
    overview: {
      paragraphs: [
        'Medical billing is the engine of the revenue cycle: the coordinated process of capturing charges, coding encounters, submitting clean claims, and collecting accurate reimbursement from payers and patients. When any step breaks down, revenue leaks and days in A/R grow.',
        'Fidiviaa delivers full-service, end-to-end medical billing for hospitals, physician groups, and specialty practices. Our teams combine certified coders, billing specialists, and deep payer expertise with automation to maximize clean claim rates, minimize denials, and shorten the time from date of service to payment.',
      ],
      bullets: [
        'Physician and hospital billing',
        'Specialty and ambulatory practices',
        'Multi-payer commercial and government claims',
        'High-denial and complex claim workflows',
        'End-to-end or à la carte engagement models',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa manages the complete billing lifecycle so your staff can focus on care. Services provided include:',
      bullets: [
        'Charge capture and entry',
        'Medical coding and claim scrubbing',
        'Clean claim submission and clearinghouse management',
        'Payer follow-up and denial resolution',
        'Payment posting and reconciliation',
        'Patient statements and collections',
      ],
    },
  },
  {
    id: 6,
    slug: 'rcm-automation-and-analytics',
    title: 'RCM Automation and Analytics',
    type: 'featured',
    icon: 'bi-graph-up-arrow',
    flow: 'rcm-automation',
    tagline:
      'Intelligent automation and analytics that eliminate manual work and surface revenue insight in real time.',
    cardImage: IMG('1460925895917-afdab827c52f'),
    bannerImage: IMG('1460925895917-afdab827c52f'),
    overviewImage: IMG('1551288049-bebda4e38f71'),
    provideImage: IMG('1526628953301-3e589a6a8b74'),
    overview: {
      paragraphs: [
        'Manual, repetitive revenue-cycle tasks are slow, costly, and error-prone — while the data needed to manage performance is often locked in disconnected systems. Provider organizations need both automation to reduce effort and analytics to steer decisions.',
        'Fidiviaa combines robotic process automation, AI/ML models, and real-time analytics to automate high-volume workflows — eligibility, status checks, posting, denial triage — and to give leaders live visibility into KPIs like clean claim rate, denial rate, and days in A/R. The result is lower cost-to-collect and faster, smarter decisions.',
      ],
      bullets: [
        'Repetitive, rules-based revenue-cycle tasks',
        'Denial prediction and prevention',
        'Eligibility and claim-status automation',
        'KPI reporting and executive dashboards',
        'Continuous performance optimization',
      ],
    },
    servicesProvided: {
      intro:
        'Fidiviaa delivers automation and analytics as a managed capability layered onto your existing systems. Services provided include:',
      bullets: [
        'Robotic process automation (RPA) for RCM workflows',
        'AI/ML denial prediction and coding assistance',
        'Automated eligibility and claim-status checks',
        'Workflow orchestration and exception routing',
        'Real-time analytics and KPI dashboards',
        'Custom reporting and benchmarking',
        'Continuous improvement and optimization',
      ],
    },
  },
];

// Step-by-step process flows rendered by <ProcessFlow /> on featured pages.
export const processFlows = {
  'medical-billing': [
    { title: 'Patient Registration', icon: 'bi-person-plus', desc: 'Capture accurate demographics and insurance at scheduling.' },
    { title: 'Eligibility Verification', icon: 'bi-shield-check', desc: 'Confirm coverage and benefits in real time with the payer.' },
    { title: 'Prior Authorization', icon: 'bi-clipboard-check', desc: 'Secure required approvals before services are rendered.' },
    { title: 'Charge Capture & Coding', icon: 'bi-upc-scan', desc: 'Translate documented care into accurate CPT/ICD-10 codes.' },
    { title: 'Claim Scrubbing & Submission', icon: 'bi-send-check', desc: 'Validate and submit clean claims through the clearinghouse.' },
    { title: 'Payer Adjudication', icon: 'bi-bank', desc: 'The payer reviews the claim and determines reimbursement.' },
    { title: 'Payment Posting', icon: 'bi-cash-stack', desc: 'Post payments and adjustments; reconcile against contracts.' },
    { title: 'Denial Management & A/R', icon: 'bi-arrow-repeat', desc: 'Work denials, appeals, and aging accounts to resolution.' },
    { title: 'Patient Collections', icon: 'bi-wallet2', desc: 'Bill and collect remaining patient responsibility.' },
    { title: 'Reporting & Insights', icon: 'bi-graph-up', desc: 'Analyze performance and close revenue leakage.' },
  ],
  'rcm-automation': [
    { title: 'Data Ingestion & Integration', icon: 'bi-database-down', desc: 'Connect EHR, practice management, clearinghouse, and payer data.' },
    { title: 'Intelligent Automation (RPA)', icon: 'bi-robot', desc: 'Bots execute repetitive, rules-based tasks at scale.' },
    { title: 'AI/ML Prediction', icon: 'bi-cpu', desc: 'Models predict denials and assist coding decisions.' },
    { title: 'Workflow Orchestration', icon: 'bi-diagram-3', desc: 'Route exceptions to the right team automatically.' },
    { title: 'Real-time Analytics', icon: 'bi-bar-chart-line', desc: 'Live dashboards track clean claim rate, denials, and A/R.' },
    { title: 'Continuous Optimization', icon: 'bi-arrow-repeat', desc: 'Feed insights back to refine rules and models.' },
  ],
};

export default services;
