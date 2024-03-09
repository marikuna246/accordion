import { GlobalStyles } from "./Globals";
import styled from "styled-components";

import QuestionSection from "./components/QuestionSection";

import IllustrationMobile from "/images/illustration-woman-online-mobile.svg";
import IllustrationDesktop from "/images/illustration-woman-online-desktop.svg";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);
  console.log(active);
  return (
    <>
      <GlobalStyles />
      <Main>
        <img src={IllustrationMobile} alt="girl illustration" />
        <Title>FAQ</Title>
        <QuestionSection
          questionIndex={0}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={1}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={2}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={3}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={4}
          active={active}
          setActive={setActive}
        />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 32.7rem;
  background: #ffffff;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.8rem;
  border-radius: 25px;
  position: relative;

  & > img {
    width: 23.7rem;
    height: 18rem;
    position: absolute;
    top: -10.5rem;
  }

  @media only screen and (min-width: 90rem) {
    width: 92rem;
    padding: 6.5rem 9.5rem 8.3rem 47.5rem;
    align-items: flex-start;
    background-image: url(${IllustrationDesktop});
    background-repeat: no-repeat;
    background-position: top 10 rem;
    & > img {
      display: none;
    }
}

`;

const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
`;