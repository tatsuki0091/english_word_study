import React from "react";
import {
  Card,
  WordContent,
  WordHeader,
  CardBody,
  Li,
  Ul,
  Result,
  Definition,
  DefinitionHeader,
  SearchButton,
} from "../../styles/topStyles";
import { RANDOM_INFO } from "../../types/Types";
import { randomWord } from "../../pages/api/word";

const Top = (props: RANDOM_INFO) => {
  const fetchRandomWord = async () => {
    const newWord = await randomWord();
    props.setWordInfo(newWord);
  };

  return (
    <>
      <SearchButton onClick={fetchRandomWord}>Random</SearchButton>
      <Card>
        <div className="back">
          <WordContent>
            <Definition>
              <Result>{props.wordInfo.word}</Result>
            </Definition>
          </WordContent>
        </div>
        <div className="front">
          <WordContent>
            <Definition>
              <DefinitionHeader>Definitions</DefinitionHeader>
              <Ul>
                {props.wordInfo.results ? (
                  props.wordInfo.results.map(
                    (result, index) =>
                      index < 4 && <Li key={index}>{result.definition}.</Li>
                  )
                ) : (
                  <p>
                    This word is a proper noun or a non-existent word. Please
                    type another word
                  </p>
                )}
              </Ul>
            </Definition>

            {/* <a href="#" className="btn">
                Read more
              </a> */}
          </WordContent>
        </div>
      </Card>
    </>
  );
};

export default Top;
