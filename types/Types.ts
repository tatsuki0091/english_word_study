export interface Word {
  word: String;
  results: [
    {
      definition: String;
      partOfSpeech: String;
      synonyms: [String];
      typeOf: [String];
      hasTypes: [String];
      derivation: [String];
      examples: [String];
    }
  ];
  syllables: {
    count: Number;
    list: [String];
  };
  pronunciation: {
    all: String;
  };
  frequency: Number;
}
