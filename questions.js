module.exports = {
  /**
   * When editing your questions pay attention to your punctuation.
   * Make sure you use question marks.
   * Make sure the first answer is the correct one.
   * Set at least ANSWER_COUNT answers, any extras will be shuffled in.
   */
  QUESTIONS_EN_GB: [],
  QUESTIONS_EN_US: [
    {
      'What does <say-as interpret-as="spell-out">FHIR</say-as> stand for?':[
        'Fast Healthcare Interoperable Resources',
        'Fast Horizontal Inpatient Releases',
        'Fast Holistic Interchangable Resources',
        'Financial Health Information Release'
      ],
      'type': "Multiple-Choice"
    },
    {
      'True or False. Communication is a valid Patient resource search parameter':[
        'False',
        'True'
      ],
      'type': 'Boolean'
    },
    {
      'Which phrase is incorrect?':[
        'Consent policy rules consist of only one magical value',
        'Practitioners can perform different roles within the same or even different organizations.',
        'Clinical workflow lifecycle states include \'planned\', \'started\', or \'stopped\'',
        'Examples of clinical workflow may include the communication status element or the procedure status element'
      ],
      'type': 'Rule-Out'
    },
    {
      'Fill in the blank. In contrast to the Observation resource, the blank resource typically includes additional clinical context and mix of atomic results.': [
        'Diagnostic Report'
      ],
      'type': 'Fill-In'
    },
    {
      'What is the \'Entity-Available\' life cycle?': [
        'a cycle that indicates if the resource, or the entity described by the resource, is ready for use, not yet ready for use, or has been retired from use.',
        'a cycle indicating how envidence is affecting a clinical interpretation.',
        'a cycle that manifests the request, sends the request, receives acceptance or refusal of the request, and fulfills the request.',
        'a cycle indicating how many entities are contained in the current cycle the user is querying for'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'Why do authors use the "id" field on extensions?': [
        'Primary use is if you want to point to something in one place in the instance from another place in the instance',
        'If you want to sanitize the extension',
        'To uniquely identify the extension',
        'For reference to the identifier of an extension'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'True or false. <say-as interpret-as="spell-out">EHR</say-as>s have an infite amount of resources.': [
        'False',
        'True'
      ],
      'type': 'Boolean'
    },
    {
      'What does <emphasis level="strong">NOT</emphasis> constitute as a fire resource?': [
        'An abstract element',
        'A single unit of data processed and addressed by the computer',
        'Corresponds to a field in a database record',
        'The real world instantiation of a concept',
        'Textbox entry on your web form'
      ],
      'type': 'Rule-Out'
    },
    {
      'Which one is a coded data type?': [
        'HL7 abstract data types R1 and R2',
        '<say-as interpret-as="spell-out">ISO</say-as> 9 0 0 1 data types',
        'Lonic codes',
        'Snomed codes'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'An element can be a': [
        'Integer, float, string',
        'Array, character, float',
        'String, integer, list',
        'Integer, Boolean, octal'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'True or false? A value set represents a uniquely identifiable set of valid concept representations where only one concept representation can be tested to determine if it is a member of the set.':[
        'False',
        'True'
      ],
      'type': 'Boolean'
    },
    {
      'What does the acronym stand for in <say-as interpret-as="spell-out">ICD</say-as>?':[
        'International Classification Domain',
        'International Classification of Diseases',
        'International Code Domain',
        'International Crib of Donuts'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'Unified Codes of Units of Measure refers heavily on':[
        '<say-as interpret-as="spell-as">ISO</say-as> 2 9 5 5 dash nineteen eighty-three & <say-as interpret-as="spell-out">ANIS</say-as> X 3 point fifty dash nineteen eighty-six',
        '<say-as interpret-as="spell-as">HL7</say-as> and <say-as interpret-as="spell-out">FHIR</say-as>',
        '<say-as interpret-as="spell-as">ISO</say-as> 2 2 9 0 7 & <say-as interpret-as="spell-out">ANSI</say-as> X four point fifty',
        '<say-as interpret-as="spell-as">ISO</say-as> 9 0 0 1</say-as> only'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'Fill in the blank. Blank Definition are computational operations on sets of codes, including rules and filters.':[
        'Intentional'
      ],
      'type': 'Fill-In'
    },
    {
      'Which resources in <say-as interpret-as="spell-out">FHIR</say-as> cover terminology':[
        'Code System',
        'Forge Tracker',
        'Codeable Concepts',
        'Value Stream'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'Codes in Code Systems can have one of the following data types, <emphasis level="strong">EXCEPT</emphasis>': [
        'Concept',
        'Code',
        'Coding',
        'CodeableConcept'
      ],
      'type': 'Rule-Out'
    },
    {
      'What element is used to compose a value system':[
        'compose',
        'filter',
        'include',
        'manifest'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'The Questionnaire resource consists of three types of items, <emphasis level="strong">EXCEPT</emphasis>': [
        'Critics',
        'Groups',
        'Questions',
        'Display'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'What is an Expansion Profile?': [
        'Used to configure the behavior of a terminology server when it processes Value Set resources',
        'Used to expand a profile of a patient',
        'A function to expand on resource narratives post-hoc',
        'A profile describing different code systems for a specific type of servers at the client\'s request',
      ],
      'type': 'Multiple-Choice'
    },
    {
      'What are the binding strengths associated with a profile terminology?': [
        'Required, Extensible, Preferred, Example',
        'Extensible, Preferred, Weak, Constant',
        'Required, Preferred, Extensible, Weak',
        'Example, Weak, Example, Required'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'True or false. Code Systems and value systems are separated resources from <say-as interpret-as="spell-out">STU3</say-as> onward': [
        'True',
        'False'
      ],
      'type': 'Boolean'
    },
    {
      'Provide the name of an online tool that provides an interface for creating and editing Fire Code Systems, Value Sets, and Conceptt Maps rather than <phoneme alphabet="ipa" ph="d͡ʒeɪsən">JSON</phoneme> or <say-as interpret-as="spell-out">XML</say-as>.':[
        "Snapper",
        "G Forge",
        "Synthea",
        "Bundle"
      ],
      'type': 'Multiple-Choice'
    },
    {
      'What is the Fire <say-as interpret-as="spell-out">API</say-as> for Java called?':[
        `<say-as interpret-as="spell-out">HAPI</say-as>`,
        `<phoneme alphabet="ipa" ph="gɹɑk">GROK</phoneme>`,
        "Maven",
        "Pie Fire"
      ],
      'type': 'Multiple-Choice'
    },
    {
      'True or false. Fire has an open-license for anyone to utilize Fire semantics and sources if acknowledgement is provided to the authors':[
        'True',
        'False'
      ],
      'type': 'Boolean'
    },
    {
      'Fill in the blank. Privacy policies define how individually blank health information is to be collected, accessed, used and disclosed':[
        'Identifiable'
      ],
      'type': 'Fill-In'
    },
    {
      'True or false. Rules made in fire are generally loose':[
        'True',
        'False'
      ],
      'type': 'Boolean'
    },
    {
      'Differentials show changed and unchanged element properties of a resource':[
        'False',
        'True'
      ],
      'type': 'Boolean'
    },
    {
      'The following are types of slicing in fire, <emphasis level="strong">EXCEPT</emphasis>': [
        'Position',
        'Value',
        'Pattern',
        'Exists',
        'Profile',
        'Type'
      ],
      'type': 'Rule-Out'
    },
    {
      'The complete or partial list of answers to a structured Question resource is': [
        'Questionnaire Response',
        'Answer',
        'Consent',
        'Answer Response'
      ],
      'type': 'Multiple-Choice'
    },
    {
      'True or false. A patient can be both the source and the author in a Questionnaire Response':[
        'True',
        'False'
      ],
      'type': 'Boolean'
    },
    {
      'True or flase. Patient dot contact is a Backbone Element type':[
        'True',
        'False'
      ],
      'type': 'Boolean'
    },
    {
      'What is the parent ancestory of type Narrative?':[
        'Resource',
        'Extension',
        'Narrative',
        'Elements',
        'Bundle',
        'Metadata'
      ],
      'type': 'Multiple-Choice'
    }
  ]
};
