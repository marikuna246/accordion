import styled, { css } from "styled-components";
import Arrow from "/images/icon-arrow-down.svg";

import data from "../data.json";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function QuestionSection({ questionIndex, active, setActive }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;

  const isActive = active === questionIndex;

  return (
    <QuestionContainer
      onClick={() => {
        if (isActive) {
          setActive(null);
        } else {
          setActive(questionIndex);
        }
      }}
      isActive={isActive}
    >
      <div>
        <Question isActive={isActive}>{question}</Question>
        <img src={Arrow} alt="arrow icon" />
      </div>
      {isActive ? <Answer>{answer}</Answer> : null}
    </QuestionContainer>
  );
}

const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  width: 100%;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > img {
      transform: ${(props) =>
        props.isActive ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.3s;
    }
  }
`;

const Question = styled.h2`
  ${(props) => css`
    font-size: 1.3rem;
    font-weight: ${props.isActive ? "700" : "400"};
    line-height: 1.6rem;
    color: #4b4c5f;
    transition: 0ms.3s;

    &:hover {
      color: #f47b56;
    }
  `}
`;

const Answer = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: #787887;
`;