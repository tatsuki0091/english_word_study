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
} from "../../styles/topStyles";
import { Word } from "../../types/Types";

const Top = (wordInfo: Word) => {
  console.log(wordInfo);
  return (
    <>
      <Card>
        <div className="back">
          <WordContent>
            <Result>{wordInfo.word}</Result>
          </WordContent>
        </div>
        <div className="front">
          <WordContent>
            <Definition>
              <DefinitionHeader>Definitions</DefinitionHeader>
              <Ul>
                {wordInfo.results.map(
                  (result, index) =>
                    index < 4 && <Li key={index}>{result.definition}.</Li>
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
