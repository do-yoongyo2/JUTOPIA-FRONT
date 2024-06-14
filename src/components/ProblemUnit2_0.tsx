import { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CheckAnswer from "~/components/LessonCheckAnswer";
import CharacterExplain from "./CharacterExplain";

const ProblemUnit2_0 = () => {
  // 아래를 참고해서 자신의 문제에 맞게 커스텀하라.
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); // 맞춘 문제수
  const totalCorrectAnswersNeeded = 5; // 예시 값
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("answer");
  const [correctAnswer, setCorrectAnswer] = useState(""); // 정답도 여러분이 처리해야겠죠?

  const onNext = () => {
    setCorrectAnswerShown(true);
    if (isAnswerCorrect) {
      setCorrectAnswerCount((x) => x + 1);
    }
  };

  const onFinish = () => {
    setSelectedAnswer("null");
    setCorrectAnswerShown(false);
    // 다음 문제 넘어가는 로직 짜라
  };

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
          />
        </div>
        {/* 여기에 너의 문제를 만들어 */}
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
          수입, 비용, 자산에 대해 알아볼까요?
        </h1>
        <img
          alt="설명 이미지"
          src="dummyImage.jpeg"
          style={{ height: "300px" }}
        />
      </div>
      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
      <CharacterExplain onNext={onNext} onFinish={onFinish} />
      {/* <CheckAnswer
        isAnswerSelected={selectedAnswer !== null}
        isAnswerCorrect={isAnswerCorrect}
        correctAnswerShown={correctAnswerShown}
        correctAnswer={correctAnswer}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      /> */}
    </div>
  );
};

export default ProblemUnit2_0;
