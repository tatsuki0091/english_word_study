import styled from "styled-components";

export const Card = styled.div`
  position: absolute;
  display: flex;
  cursor: pointer;
  &:before {
    content: "";
    display: block;
  }

  .front {
    transition: all 0.6s;
    position: absolute;

    backface-visibility: hidden;
    transform: rotateY(-180deg);
  }
  .back {
    transition: all 0.6s;
    position: absolute;

    white-space: nowrap;
    backface-visibility: hidden;
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

  font-size: 20vw;
`;

export const WordContent = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  height: 100%;
  transition: 0.3s;
  text-align: center;
  background: linear-gradient(to right, #ff41ff, #ff4b2b);
  //上下中央寄せのためのdisplay
  display: table;
`;

export const WordHeader = styled.div``;

export const Result = styled.div`
  //上下中央寄せのためのdisplay
  display: table-cell;
  vertical-align: middle;
  color: #fff;
`;

export const CardBody = styled.div`
  padding: 30% 20%;
  text-align: center;
  font-size: 18px;
`;

export const Definition = styled.div`
  @media (min-width: 951px) {
    padding: 5% 10% 20% 10%;
  }
  @media (max-width: 950px) {
    padding: 5% 10% 0% 10%;
  }

  text-align: center;
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
