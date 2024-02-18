import styled, { css } from "styled-components";

export const QuestionContainer = styled.div`
  padding: 36px;
  text-align: center;
`;

export const QuestionNumber = styled.div`
  margin-top: 20px;
`;

export const QuestionTitle = styled.h1`
  margin-top: 20px;
  font-size: 28px;
  font-weight: 700;
`;

export const QuestionText = styled.p`
  margin-top: 20px;
  font-size: 17px;
  font-weight: 400;
`;

export const QuestionList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.questionId === 2 &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.questionId === 3 &&
    css`
      flex-direction: column;
    `}
`;

export const QuestionItem = styled.li`
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.btn};
  width: 100%;
  height: 100%;
  padding: 20px;

  ${(props) =>
    props.questionId === 2 &&
    css`
      width: 60px;
      height: 80px;
      padding: 40px 12px;
    `}

  ${(props) =>
    props.questionId === 1 &&
    css`
      width: 100%;
      height: 100%;
      padding: 20px;
    `}

  ${(props) =>
    props.questionId === 3 &&
    css`
      width: 100%;
      height: 100%;
      padding: 20px;
    `}

     ${(props) =>
    props.questionId === 4 &&
    css`
      display: flex;
      justify-content: space-between;
    `}
`;

export const QuestionEmoji = styled.span`
  font-size: 36px;
`;

export const QuestionEmojiText = styled.span``;

export const QuestionBtn = styled.button`
  width: 100%;
  text-align: left;
  color: ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  font-size: 14px;
  font-weight: 600;
  border: none;
  background-color: ${(props) => props.theme.colors.btn};
  margin-top: ${(props) => props.questionId === 2 && "10px"};
`;

export const QuestionInput = styled.input``;
