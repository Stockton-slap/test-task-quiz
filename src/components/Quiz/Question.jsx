import { useTranslation } from "react-i18next";
import {
  QuestionBtn,
  QuestionContainer,
  QuestionEmoji,
  QuestionEmojiText,
  QuestionInput,
  QuestionItem,
  QuestionList,
  QuestionNumber,
  QuestionText,
  QuestionTitle,
} from "./Question.styled";
import Button from "../Button/Button";

function Question({
  question,
  onAnswer,
  questionId,
  handleOptionChange,
  selectedOptions,
  onNextQuestionClick,
}) {
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
            {question.type === "single-select-image" && (
              <div onClick={() => onAnswer(option)}>
                <QuestionEmoji>{option.emoji}</QuestionEmoji>
                <QuestionEmojiText>{option.text}</QuestionEmojiText>
              </div>
            )}
            {question.type === "single-select" && (
              <QuestionBtn type="button" onClick={() => onAnswer(option)}>
                {option}
              </QuestionBtn>
            )}
            {question.type === "multi-select" && (
              <>
                <label htmlFor="input">{option}</label>
                <QuestionInput
                  type="checkbox"
                  id="input"
                  value={option}
                  checked={selectedOptions.includes(option)}
                  onChange={() => handleOptionChange(option)}
                />
              </>
            )}
          </QuestionItem>
        ))}
      </QuestionList>
      {question.type === "multi-select" && (
        <Button onClick={onNextQuestionClick} />
      )}
    </QuestionContainer>
  );
}

export default Question;
