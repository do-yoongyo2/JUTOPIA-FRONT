import { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CheckAnswer from "~/components/LessonCheckAnswer";
import Link from "next/link";

// JSON 데이터 타입 정의
interface Problem {
  problem: string;
  problemDetail?: string | string[] | null;
  problemSelect: string[];
  answer: string;
  solutionDetail?: string;
}

interface Data {
  [key: string]: Problem;
}

// JSON 데이터 불러오기
import data from "../../public/miniTest_5.json" assert { type: "json" };

// JSON 데이터에 타입 적용
const typedData: Data = data;

const ProblemUnit3_0 = () => {
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [attemptedProblemsCount, setAttemptedProblemsCount] = useState(0);
  const [isLessonComplete, setIsLessonComplete] = useState(false);
  const totalProblemsCount = Object.keys(typedData).length;
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const problemKeys: string[] = Object.keys(typedData);
  const currentProblem: Problem | null = problemKeys[currentProblemIndex]
    ? (typedData[problemKeys[currentProblemIndex]] as Problem)
    : null;

  const onCheckAnswer = () => {
    if (!currentProblem) return;

    setCorrectAnswerShown(true);
    setAttemptedProblemsCount((x) => x + 1);
    if (selectedAnswer?.toString() === currentProblem.answer) {
      setIsAnswerCorrect(true);
      setCorrectAnswerCount((x) => x + 1);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  const onSkip = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
    setAttemptedProblemsCount((x) => x + 1);
  };

  const onFinish = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(false);
    if (currentProblemIndex + 1 < totalProblemsCount) {
      setCurrentProblemIndex((x) => x + 1);
    } else {
      setIsLessonComplete(true);
    }
  };

  if (isLessonComplete) {
    return <LessonComplete correctAnswerCount={correctAnswerCount} />;
  }

  if (!currentProblem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={attemptedProblemsCount}
            totalCorrectAnswersNeeded={totalProblemsCount}
            setQuitMessageShown={setQuitMessageShown}
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="mb-4 text-2xl font-bold">{currentProblem.problem}</h1>
          {currentProblem.problemDetail && (
            <div className="mb-4">
              {Array.isArray(currentProblem.problemDetail) ? (
                currentProblem.problemDetail.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))
              ) : (
                <p>{currentProblem.problemDetail}</p>
              )}
            </div>
          )}
          <ul>
            {currentProblem.problemSelect.map((option, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded border p-2 ${
                  selectedAnswer === index ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedAnswer(index)}
              >
                {option}
              </li>
            ))}
          </ul>
          {correctAnswerShown && (
            <div className="mt-4 text-red-500">
              {isAnswerCorrect
                ? "정답입니다!"
                : `오답입니다. 정답은 ${currentProblem.problemSelect[parseInt(currentProblem.answer) - 1]}입니다.`}
              <div>{currentProblem.solutionDetail}</div>
            </div>
          )}
        </div>
      </div>
      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
      <CheckAnswer
        isAnswerSelected={selectedAnswer !== null}
        isAnswerCorrect={isAnswerCorrect}
        correctAnswerShown={correctAnswerShown}
        correctAnswer={
          currentProblem.problemSelect[parseInt(currentProblem.answer) - 1]
        }
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />
    </div>
  );
};

export default ProblemUnit3_0;

const LessonComplete = ({
  correctAnswerCount,
}: {
  correctAnswerCount: number;
}) => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <h1 className="text-center text-3xl text-yellow-400">
          Lesson Complete! <br />
          AnswerCount: {correctAnswerCount}
        </h1>
        {/* 이 부분에 추가적인 완료 페이지 콘텐츠를 넣을 수 있습니다 */}
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <Link
            className="flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            href="/tutorial"
          >
            돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
};
