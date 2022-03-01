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
export interface KEYWORD_INFO {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setWordInfo: React.Dispatch<React.SetStateAction<Word>>;
}

export interface RANDOM_INFO {
  wordInfo: Word;
  setWordInfo: React.Dispatch<React.SetStateAction<Word>>;
}
