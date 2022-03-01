import React, { useState, ChangeEvent } from "react";
import {
  HeaderFrame,
  NavLinks,
  Form,
  Text,
  Button,
} from "../../styles/headerStyle";
import { KEYWORD_INFO } from "../../types/Types";
import { searchWord } from "../../pages/api/word";

const Header = (props: KEYWORD_INFO) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.setKeyword(event.target.value);
  };
  const submit = async (event: ChangeEvent<HTMLInputElement>) => {
    // event.preventDefault();
    const word = await searchWord(props.keyword);
    props.setWordInfo(word);
  };

  return (
    <>
      <HeaderFrame>
        <h2>Study English</h2>
        <Form>
          <Text
            type="text"
            name="keyword"
            value={props.keyword}
            onChange={handleChange}
          />
          <Button type="submit" value="Search" onClick={submit} />
        </Form>
        {/* <NavLinks>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </NavLinks> */}
      </HeaderFrame>
    </>
  );
};

export default Header;
