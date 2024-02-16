import { useTranslation } from "react-i18next";
import {
  QuestionBtn,
  QuestionContainer,
  QuestionEmoji,
  QuestionItem,
  QuestionList,
  QuestionNumber,
  QuestionText,
  QuestionTitle,
} from "./Question.styled";

function Question({ question, onAnswer, questionId }) {
  const { t } = useTranslation();

  const questions = t("questions", { returnObjects: true });
  const questionsLength = Object.keys(questions).length;

  return (
    <QuestionContainer>
      <QuestionNumber>
        {questionId}/{questionsLength}
      </QuestionNumber>
      <QuestionTitle>{question.title}</QuestionTitle>
      <QuestionText>{question.subTitle}</QuestionText>
      <QuestionList questionId={questionId}>
        {question.options.map((option, index) => (
          <QuestionItem key={index} questionId={questionId}>
            {questionId === 2 && (
              <QuestionEmoji>{question.emojis[index]}</QuestionEmoji>
            )}
            <QuestionBtn onClick={() => onAnswer(option)}>{option}</QuestionBtn>
          </QuestionItem>
        ))}
      </QuestionList>
    </QuestionContainer>
  );
}

export default Question;
