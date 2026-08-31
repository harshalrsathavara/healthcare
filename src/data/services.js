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
    tagline: 'Catch the coverage problem before the patient is in the chair.',
    cardImage: IMG('1576091160399-112ba8d25d1d'),
    bannerImage: IMG('1538108149393-fbbd81895907'),
    overviewImage: IMG('1516549655169-df83a0774514'),
    provideImage: IMG('1516549655169-df83a0774514'),
    overview: {
      // TODO(content): swap the bracketed figure for your own denial-source
      // number, or cut the clause if you cannot substantiate it.
      paragraphs: [
        'A large share of denials trace back to something that happened at the front desk. A transposed digit in a member ID. Coverage that termed at the end of last month. An authorization nobody thought to request. None of it is clinical, and all of it costs you money that was already earned.',
        'Our access specialists verify benefits against payer portals before the visit rather than after it, chase the authorizations that hold up high-dollar cases, and give patients an actual number for what they will owe. That means fewer angry calls to your front office and less rework sitting in your billing queue.',
      ],
      bullets: [
        'Scheduled inpatient and outpatient encounters',
        'High-cost imaging and diagnostics',
        'Elective surgical cases',
        'Infusion and specialty pharmacy',
        'Referred and pre-authorized specialty visits',
      ],
    },
    servicesProvided: {
      intro:
        'Trained, HIPAA-compliant specialists working inside your scheduling and registration systems. What we cover:',
      bullets: [
        'Insurance eligibility and benefits verification',
        'Prior authorization and referral management',
        'Patient estimates and pre-service collections',
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
    tagline: 'Code it right. Defend it later.',
    cardImage: IMG('1584432810601-6c7f27d2362b'),
    bannerImage: IMG('1519494026892-80bbd2d6fd0d'),
    overviewImage: IMG('1584432810601-6c7f27d2362b'),
    provideImage: IMG('1504813184591-01572f98c85f'),
    overview: {
      paragraphs: [
        'Our coders hold AAPC or AHIMA credentials, and they code what the note supports. Not what hits a target.',
        'Coding variance is expensive in both directions. Under-code and you write off revenue you earned. Over-code and a payer comes back for it two years later, usually with interest and usually during a quarter you could not afford it.',
        'So we audit both ways. When the documentation will not carry the code, the physician gets a query rather than a guess, and every decision is recorded with the reasoning behind it. That record is the difference between a defensible chart and an expensive one when an auditor pulls it.',
      ],
      bullets: [
        'Inpatient and outpatient facility coding',
        'Professional (pro-fee) coding',
        'Risk adjustment and HCC capture',
        'Clinical documentation integrity reviews',
        'Coding quality audits and coder education',
        'Denials with a clinical root cause',
        'Second-level appeals that need a chart review',
      ],
    },
    servicesProvided: {
      intro:
        'Credentialed coders and clinical reviewers across HIM workflows:',
      bullets: [
        'Clinical prior authorization support',
        'Clinical documentation integrity (CDI) reviews',
        'Clinical denials and appeals management',
        'Physician advisory and query services',
        'Utilization management',
        'Risk adjustment, facility, and pro-fee coding',
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
    tagline: 'When the interface breaks at 6am.',
    cardImage: IMG('1551288049-bebda4e38f71'),
    bannerImage: IMG('1526628953301-3e589a6a8b74'),
    overviewImage: IMG('1526628953301-3e589a6a8b74'),
    provideImage: IMG('1460925895917-afdab827c52f'),
    overview: {
      // TODO(content): name the specific EHR / PM platforms you actually
      // support (Epic, Cerner, athenahealth, eCW, etc.). Naming them is one of
      // the strongest trust signals on this page.
      paragraphs: [
        'The interface between your EHR and the clearinghouse stops passing charges, and nobody notices for two days. By then there is a backlog of claims that never went out and a week of cash that will not arrive on schedule. Fidiviaa runs health IT for organizations that would rather not staff a round-the-clock desk in-house: we support the platforms you already own, monitor the HL7 and FHIR interfaces between them, and keep the access control and audit logs a HIPAA assessment will ask you to produce.',
      ],
      bullets: [
        'EHR, EMR, and practice management support',
        'HL7 and FHIR interfaces',
        'Hosting, cybersecurity, and HIPAA compliance',
      ],
    },
    servicesProvided: {
      intro: 'Health IT run by engineers who have worked provider-side. The scope:',
      bullets: [
        'EHR and EMR implementation, upgrades, and support',
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
    tagline: 'Aged A/R and the denials your billing office never has time to reach.',
    cardImage: IMG('1554224155-6726b3ff858f'),
    bannerImage: IMG('1576091160550-2173dba999ef'),
    overviewImage: IMG('1551076805-e1869033e561'),
    provideImage: IMG('1554224155-6726b3ff858f'),
    overview: {
      paragraphs: [
        'Every account has a shelf life. Past 90 days your odds of collecting start to slide, and past 180 they fall off. Most billing offices know this perfectly well and still cannot get to the aging bucket, because the current month always wins the argument.',
        'That is the work we take. Aged A/R nobody has touched in a quarter. Denials that need a real appeal with clinical records attached rather than a resubmit. Underpayments where the payer paid something, just not what your contract says they owe. Credit balances and refunds too, which sounds like housekeeping right up until an auditor asks how long they have been sitting there.',
      ],
      bullets: [
        'Aged and complex accounts receivable',
        'High-volume payer denials',
        'Contractual variances and underpayments',
        'Self-pay and patient balances',
        'Credit balances and refunds',
      ],
    },
    servicesProvided: {
      intro:
        'Back-end revenue cycle, worked payer-by-payer rather than ticket-by-ticket:',
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
    tagline: 'The whole cycle, or just the parts you hate.',
    cardImage: IMG('1551076805-e1869033e561'),
    bannerImage: IMG('1551076805-e1869033e561'),
    overviewImage: IMG('1554224155-6726b3ff858f'),
    provideImage: IMG('1576091160399-112ba8d25d1d'),
    overview: {
      paragraphs: [
        'Full-cycle billing for hospitals, physician groups, and specialty practices. You keep the clinical decisions. We handle what happens after the note is signed: charge capture, coding, scrubbing, submission, posting, and the follow-up when a payer says no.',
        'Some clients hand over the whole cycle. Others keep coding in-house and give us claims and A/R only. Both arrangements work.',
        'What does not work is splitting the cycle without agreeing who owns a denial. We settle that in writing before the first claim goes out.',
      ],
      bullets: [
        'Physician, hospital, and specialty billing',
        'Commercial and government payers',
        'High-denial and complex claim workflows',
        'Full-cycle or à la carte engagements',
      ],
    },
    servicesProvided: {
      intro: 'The complete billing lifecycle, or whichever parts of it you want to hand off:',
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
    tagline: 'Stop paying trained billers to check claim status one account at a time.',
    cardImage: IMG('1460925895917-afdab827c52f'),
    bannerImage: IMG('1460925895917-afdab827c52f'),
    overviewImage: IMG('1551288049-bebda4e38f71'),
    provideImage: IMG('1526628953301-3e589a6a8b74'),
    overview: {
      paragraphs: [
        'A trained biller clicking through a payer portal to check status on one claim at a time is a waste of a trained biller. A bot does that overnight and surfaces only the accounts that need a human.',
        'We build that layer on top of the systems you already run, without replacing them. Eligibility checks, status checks, payment posting, and first-pass denial triage move to automation. Prediction models flag the claims most likely to bounce so someone can fix them before submission. And the dashboards show clean claim rate, denial rate, and days in A/R as of this morning, rather than as of last month’s board packet.',
      ],
      bullets: [
        'Repetitive, rules-based revenue-cycle tasks',
        'Denial prediction and prevention',
        'Eligibility and claim-status automation',
        'KPI reporting and executive dashboards',
        'Ongoing performance tuning',
      ],
    },
    servicesProvided: {
      intro: 'Automation and analytics run as a managed layer over the stack you already own. Included:',
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
    { title: 'Patient Registration', icon: 'bi-person-plus', desc: 'Demographics and insurance captured correctly at scheduling.' },
    { title: 'Eligibility Verification', icon: 'bi-shield-check', desc: 'Coverage and benefits confirmed with the payer before the visit.' },
    { title: 'Prior Authorization', icon: 'bi-clipboard-check', desc: 'Approvals secured for anything that needs one.' },
    { title: 'Charge Capture & Coding', icon: 'bi-upc-scan', desc: 'Documented care translated into CPT and ICD-10 codes the note supports.' },
    { title: 'Claim Scrubbing & Submission', icon: 'bi-send-check', desc: 'Edits run, errors fixed, claim out the door through the clearinghouse.' },
    { title: 'Payer Adjudication', icon: 'bi-bank', desc: 'The payer reviews and decides what it will pay.' },
    { title: 'Payment Posting', icon: 'bi-cash-stack', desc: 'Payments and adjustments posted, then reconciled against your contract.' },
    { title: 'Denial Management & A/R', icon: 'bi-arrow-repeat', desc: 'Denials appealed, aging accounts worked until they resolve.' },
    { title: 'Patient Collections', icon: 'bi-wallet2', desc: 'Whatever the patient owes, billed and collected.' },
    { title: 'Reporting & Insights', icon: 'bi-graph-up', desc: 'Where revenue leaked last month, and why.' },
  ],
  'rcm-automation': [
    { title: 'Data Ingestion & Integration', icon: 'bi-database-down', desc: 'EHR, practice management, clearinghouse, and payer data connected.' },
    { title: 'Intelligent Automation (RPA)', icon: 'bi-robot', desc: 'Bots run the repetitive, rules-based work at volume.' },
    { title: 'AI/ML Prediction', icon: 'bi-cpu', desc: 'Models flag likely denials and assist coding decisions.' },
    { title: 'Workflow Orchestration', icon: 'bi-diagram-3', desc: 'Exceptions routed to whoever should handle them.' },
    { title: 'Real-time Analytics', icon: 'bi-bar-chart-line', desc: 'Clean claim rate, denials, and A/R tracked as of today.' },
    { title: 'Continuous Optimization', icon: 'bi-arrow-repeat', desc: 'What the data shows feeds back into the rules and models.' },
  ],
};

export default services;
