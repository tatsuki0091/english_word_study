import { type } from "os";
import styled from "styled-components";

export const HeaderFrame = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10%;
  h2,
  a,
  h2 {
    font-size: 26px;
    margin-right: auto;
  }
`;

export const NavLinks = styled.ul`
  list-style: none;
  li {
    display: inline-block;
    padding: 0 20px;
  }
`;

export const Form = styled.form`
  width: 30%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Text = styled.input.attrs({ type: "text" })`
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 1% 2%;
`;

export const Button = styled.input.attrs({ type: "submit" })`
  display: inline-block;
  background: linear-gradient(to right, #ff41ff, #ff4b2b);
  color: white;
  padding: 1% 2%;
  margin: 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
