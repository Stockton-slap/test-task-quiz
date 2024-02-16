import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { languageMapping } from "../../utils/utils";
import Question from "./Question";

export default function Quiz() {
  const params = useParams();
  const questionId = parseInt(params.questionId);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [answers, setAnswers] = useState([]);
  const [loader, setLoader] = useState(false);

  const currentQuestion = t(`questions.${questionId}`, {
    returnObjects: true,
  });

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem("answers")) || [];
    const savedLanguage = localStorage.getItem("appLanguage");

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }

    setAnswers(savedAnswers);
  }, [i18n]);

  useEffect(() => {
    localStorage.setItem("appLanguage", i18n.language);
  }, [answers, i18n.language]);

  const handleAnswer = (option) => {
    const newAnswers = { ...answers, [questionId]: option };
    setAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers));

    if (questionId === 1 && languageMapping[option]) {
      i18n.changeLanguage(languageMapping[option]);
    }

    const questions = t("questions", { returnObjects: true });
    const nextQuestion = questions[questionId + 1];

    if (nextQuestion) {
      navigate(`/quiz/${questionId + 1}`);
    } else {
      setLoader(true);
    }
  };

  useEffect(() => {
    if (loader) setTimeout(() => navigate(`/email`), 5000);
  }, [loader, navigate]);

  if (!currentQuestion) {
    return navigate("/quiz/1");
  }

  if (loader) {
    return <div>{t("loader")}</div>;
  }

  return (
    <Question
      question={currentQuestion}
      onAnswer={handleAnswer}
      questionId={questionId}
    />
  );
}
