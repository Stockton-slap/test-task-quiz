import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const QuizPage = lazy(() => import("./pages/QuizPage"));
const EmailPage = lazy(() => import("./pages/EmailPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/quiz/:questionId" element={<QuizPage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/results" element={<ThankYouPage />} />
        <Route path="/" element={<Navigate replace to="/quiz/1" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
