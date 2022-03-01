import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  &:before {
    content: "";
    display: block;
  }
  .front {
    box-sizing: border-box;
    width: 60%;
    justify-content: center;
    align-items: center;
    margin: auto;
    transition: all 0.6s;
    position: relative;
    backface-visibility: hidden;
    transform: rotateY(-180deg);
    @media (min-width: 768px) {
      bottom: 22rem;
    }
    @media (max-width: 767px) {
      bottom: 12rem;
    }
  }

  .back {
    margin-top: 10%;
    box-sizing: border-box;
    position: relative;
    width: 60%;
    transition: all 0.6s;
    backface-visibility: hidden;
    justify-content: center;
    align-items: center;
    margin: auto;
    &:hover {
      transform: rotateY(180deg);
    }
  }
  &:hover .back {
    transform: rotateY(180deg);
  }
  &:hover .front {
    transform: rotateY(0);
  }
  font-size: 40vw;
`;

export const WordContent = styled.div`
  border: 1px solid #ccc;
  transition: 0.3s;
  text-align: center;
  background: linear-gradient(to right, #ff41ff, #ff4b2b);
`;

export const WordHeader = styled.div``;

export const Result = styled.div`
  @media (min-width: 768px) {
    font-size: 8rem;
  }
  @media (max-width: 767px) {
    font-size: 4rem;
  }
  padding: 14% 10% 14% 10%;
  color: #fff;
  text-align: center;
`;

export const CardBody = styled.div`
  padding: 30% 20%;
  text-align: center;
  font-size: 18px;
  font-size: 3rem;
`;

export const Definition = styled.div`
  font-size: 18px;
  color: #fff;
`;

export const DefinitionHeader = styled.div`
  font-size: 3rem;
  margin-bottom: 2%;
`;

export const DefinitionContent = styled.div`
  font-size: 3rem;
  margin-bottom: 2%;
  width: 100%;
  margin-bottom: 5%;
`;

export const Li = styled.li`
  margin-bottom: 7%;
`;

export const Ul = styled.ul`
  list-style-type: circle;
`;

export const SearchButton = styled.button`
  background: linear-gradient(to right, #ff41ff, #ff4b2b);
  font-size: 3rem;
  color: white;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin: 10% auto;
`;
