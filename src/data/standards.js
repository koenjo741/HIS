export const stages = [
  {
    id: 'stage-1',
    title: 'Input & Diagnostic Islands',
    description: 'Initial data capture and diagnostics.',
    standards: [
      {
        id: 'dicom',
        name: 'DICOM',
        url: 'https://www.dicomstandard.org/',
        summary: 'Imaging standard for storing and transmitting medical images.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'hl7v2',
        name: 'HL7 v2',
        url: 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=185',
        summary: 'Standard for messaging (Admission, Orders, Results) in clinical systems.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'fhircast',
        name: 'FHIRcast',
        url: 'https://fhircast.hl7.org/',
        summary: 'App synchronization for context sharing across UI applications.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'loinc',
        name: 'LOINC',
        url: 'https://loinc.org/',
        summary: 'Universal standard for identifying health measurements, observations, and documents.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'ucum',
        name: 'UCUM',
        url: 'https://ucum.org/',
        summary: 'Standardized syntax for representing units of measure.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'ieee11073',
        name: 'IEEE 11073',
        url: 'https://standards.ieee.org/ieee/11073-10101/5034/',
        summary: 'IEEE standard for Point-of-Care Medical Device communication',
        category: 'Terminologies & Classifications',
      }
    ]
  },
  {
    id: 'stage-2',
    title: 'Clinical Knowledge & Persistence',
    description: 'Modeling, terminology, and robust health records.',
    standards: [
      {
        id: 'openehr',
        name: 'openEHR',
        url: 'https://www.openehr.org/',
        summary: 'Multi-level modeling for future-proof electronic health records.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'iso13606',
        name: 'ISO 13606',
        url: 'https://www.iso.org/standard/67868.html',
        summary: 'Standard for electronic health record communication and interoperability.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'snomed',
        name: 'SNOMED CT',
        url: 'https://www.snomed.org/',
        summary: 'Comprehensive, multilingual clinical healthcare terminology.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'icd10-11',
        name: 'ICD-10 / ICD-11',
        url: 'https://icd.who.int/en',
        summary: 'Global standard for diagnostic health information, billing, and reporting.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'icdo',
        name: 'ICD-O',
        url: 'https://www.who.int/standards/classifications/other-classifications/international-classification-of-diseases-for-oncology',
        summary: 'Domain-specific classification for oncology.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'atc',
        name: 'ATC',
        url: 'https://www.whocc.no/atc_ddd_index/',
        summary: 'Anatomical Therapeutic Chemical classification system for active substances.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'rxnorm',
        name: 'RxNorm',
        url: 'https://www.nlm.nih.gov/research/umls/rxnorm/index.html',
        summary: 'Semantic clinical drug vocabulary and model.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'isoidmp',
        name: 'ISO IDMP',
        url: 'https://www.ema.europa.eu/en/human-regulatory-overview/research-development/data-medicines-iso-idmp-standards-overview',
        summary: 'Standards for the unique identification of medicinal products.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'icf',
        name: 'ICF',
        url: 'https://www.who.int/standards/classifications/international-classification-of-functioning-disability-and-health',
        summary: 'Classification of health and health-related domains (functioning and disability).',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'icpc',
        name: 'ICPC',
        url: 'http://www.ph3c.org/4daction/w3_CatVisu/en/icpc.html?wCatIDAdmin=1106',
        summary: 'International Classification of Primary Care.',
        category: 'Terminologies & Classifications',
      }
    ]
  },
  {
    id: 'stage-3',
    title: 'Infrastructure & Modern Apps',
    description: 'Security, ecosystem, and core application tech.',
    standards: [
      {
        id: 'oauth',
        name: 'OAuth 2.0 / OIDC',
        url: 'https://oauth.net/2/',
        summary: 'Industry-standard protocol for authorization and identity verification.',
        category: 'Security & Infrastructure',
      },
      {
        id: 'saml',
        name: 'SAML 2.0',
        url: 'https://auth0.com/de/intro-to-iam/what-is-saml',
        summary: 'XML-based framework for single sign-on (SSO) and authentication.',
        category: 'Security & Infrastructure',
      },
      {
        id: 'smartonfhir',
        name: 'SMART on FHIR',
        url: 'https://smarthealthit.org/',
        summary: 'App ecosystem for healthcare leveraging FHIR and OAuth2.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'docker',
        name: 'Docker',
        url: 'https://www.docker.com/',
        summary: 'Platform for containerization of modern applications.',
        category: 'Security & Infrastructure',
      },
      {
        id: 'kubernetes',
        name: 'Kubernetes',
        url: 'https://kubernetes.io/',
        summary: 'Orchestration system for automating software deployment, scaling, and management.',
        category: 'Security & Infrastructure',
      },
      {
        id: 'rag',
        name: 'RAG (AI Architecture)',
        url: 'https://aws.amazon.com/what-is/retrieval-augmented-generation/',
        summary: 'Retrieval-Augmented Generation for grounded, reliable AI in healthcare.',
        category: 'Security & Infrastructure',
      },
      {
        id: 'zerotrust',
        name: 'Zero Trust Architecture',
        url: 'https://www.microsoft.com/de-de/security/business/security-101/what-is-zero-trust-architecture',
        summary: 'Security framework requiring strict identity verification for every person and device.',
        category: 'Security & Infrastructure',
      }
    ]
  },
  {
    id: 'stage-4',
    title: 'National & Transmural Exchange',
    description: 'Sharing data across boundaries and regions.',
    standards: [
      {
        id: 'fhirr4r5',
        name: 'HL7 FHIR R4/R5',
        url: 'https://hl7.org/fhir/',
        summary: 'The modern backbone standard for health care data exchange.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'cdar2',
        name: 'HL7 CDA R2',
        url: 'https://www.hl7.org/implement/standards/product_brief.cfm?product_id=7',
        summary: 'Legacy clinical document architecture for document exchange.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'hl7austria',
        name: 'HL7 Austria FHIR IGs',
        url: 'https://fhir.hl7.at/',
        summary: 'National Base Profiles and Implementation Guides for Austria.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'ihe',
        name: 'IHE Profiles (XDS.b, XCA)',
        url: 'https://www.ihe.net/',
        summary: 'Orchestration and profiles for sharing documents and imaging across enterprises.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'eehrxf',
        name: 'EEHRxF',
        url: 'https://ehr-exchange-format.eu/',
        summary: 'European Electronic Health Record Exchange Format for cross-border mobility.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'elga',
        name: 'ELGA (Austria)',
        url: 'https://www.elga.gv.at/',
        summary: 'Austria\'s national electronic health record system.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'fmk',
        name: 'FMK (Denmark)',
        url: 'https://trifork.com/?cases=fmk',
        summary: 'Denmark\'s shared medication record system.',
        category: 'Technical Exchange Standards',
      },
      {
        id: 'kanta',
        name: 'KANTA (Finland)',
        url: 'https://www.kanta.fi/en/',
        summary: 'Finlands Digital Services for the Social Welfare and Healthcare Sector.',
        category: 'Technical Exchange Standards',
      }
    ]
  },
  {
    id: 'stage-5',
    title: 'Secondary Use & Regulatory',
    description: 'Research, AI, and compliance frameworks.',
    standards: [
      {
        id: 'omop',
        name: 'OMOP CDM',
        url: 'https://www.ohdsi.org/data-standardization/',
        summary: 'Common Data Model for standardizing observational data for research.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'cdisc',
        name: 'CDISC (SDTM/ADaM)',
        url: 'https://www.cdisc.org/',
        summary: 'Standards for clinical trials data collection and submission.',
        category: 'Terminologies & Classifications',
      },
      {
        id: 'ehds',
        name: 'EHDS',
        url: 'https://health.ec.europa.eu/ehealth-digital-health-and-care/european-health-data-space_en',
        summary: 'European Health Data Space enabling health data market and secondary use.',
        category: 'Legal & Regulatory',
      },
      {
        id: 'gdpr',
        name: 'GDPR',
        url: 'https://gdpr-info.eu/',
        summary: 'General Data Protection Regulation for privacy and data protection in the EU.',
        category: 'Legal & Regulatory',
      },
      {
        id: 'nis2',
        name: 'NIS2',
        url: 'https://www.nis-2-directive.com/',
        summary: 'Directive focusing on cyber resilience and network security across the EU.',
        category: 'Legal & Regulatory',
      },
      {
        id: 'euaiact',
        name: 'EU AI Act',
        url: 'https://artificialintelligenceact.eu/',
        summary: 'Comprehensive regulatory framework for artificial intelligence in the EU.',
        category: 'Legal & Regulatory',
      },
      {
        id: 'eumdr',
        name: 'EU-MDR / SaMD',
        url: 'https://health.ec.europa.eu/medical-devices-sector_en',
        summary: 'Medical Device Regulation including Software as a Medical Device rules.',
        category: 'Legal & Regulatory',
      },
      {
        id: 'curesact',
        name: 'US 21st Century Cures Act',
        url: 'https://www.fda.gov/regulatory-information/selected-amendments-fdc-act/21st-century-cures-act',
        summary: 'US regulation promoting interoperability and patient access to health information.',
        category: 'Legal & Regulatory',
      }
    ]
  }
];
