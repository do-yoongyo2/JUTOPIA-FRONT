import { useState, useEffect, useRef } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IoIosInformationCircleOutline } from "react-icons/io";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CheckAnswer from "~/components/LessonCheckAnswer";
import type { Problem, ProblemItem } from "~/data/problem";
import Link from "next/link";

const LessonComplete = ({ backgroundColor }: { backgroundColor: string }) => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 font-['TTLaundryGothicB'] sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <h1 className="text-center text-3xl text-yellow-400">
          Lesson Complete!
        </h1>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <Link
            className={`bg-${backgroundColor}-500 flex w-full items-center justify-center rounded-2xl border-b-4 border-${backgroundColor}-600 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit`}
            href="/tutorial"
          >
            돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
};

const ProblemUnitQuiz = ({
  problem,
  backgroundColor,
  progressbarColor,
  increaseLessonsCompleted,
  status,
}: {
  problem: ProblemItem;
  backgroundColor: string;
  progressbarColor: string;
  increaseLessonsCompleted: (count: number) => void;
  status: string;
}) => {
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); // 맞춘 문제 수
  const totalCorrectAnswersNeeded = Object.keys(problem).length; // 필요한 총 정답 수
  const [quitMessageShown, setQuitMessageShown] = useState(false); // 종료 메시지 표시 여부
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false); // 정답 표시 여부
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // 선택된 답이 정답인지 여부
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // 선택된 답
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0); // 현재 문제 인덱스
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]); // 틀린 문제 인덱스
  const [retryMode, setRetryMode] = useState(false); // 재도전 모드 여부
  const [isComplete, setIsComplete] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const transformWrapperRef = useRef(null);

  const problemKeys: string[] = Object.keys(problem);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const currentProblem: Problem | null = problemKeys[currentProblemIndex]
    ? problem[problemKeys[currentProblemIndex]]
    : null;
  const correctAnswer = Number(currentProblem.answer);

  // 정답을 확인할 때 호출되는 함수
  const onCheckAnswer = () => {
    setIsChecked(true);
    setCorrectAnswerShown(true);
    if (selectedAnswer === correctAnswer) {
      setIsAnswerCorrect(true);
      setCorrectAnswerCount((prev) => prev + 1);
    } else {
      setIsAnswerCorrect(false);
      setIncorrectAnswers((prev) => [...prev, currentProblemIndex]);
    }
  };

  // 문제를 건너뛰기 할 때 호출되는 함수
  const onSkip = () => {
    setIsChecked(true);
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  // 필요없지만 학습에 굉장히 중요했던 코드. 아주 큰 이슈를 가져왔음
  // 이거 주석 풀면 마지막 프로그레스 바 안차고 바로 LessonComplete으로 넘어감.
  // 그런데 주석 풀고 return까지 지우면 프로그레스 바만 차고 LessonComplete는 호출 안됨.
  // 추가로 <LessonComplete backgroundColor={backgroundColor} /> 이 부분을 setIsComplete(true)로 대체하면 too many rerenders 에러가 남.
  // 아마 이 if문을 전역으로 관리해서 그런 것 같음. 전역 제발 금지...
  // 2024.06.19 return 대란 by 준우 & 진아

  // if (correctAnswerCount === totalCorrectAnswersNeeded && !retryMode) {
  //   if (incorrectAnswers.length > 0) {
  //     setRetryMode(true);
  //     setCurrentProblemIndex(incorrectAnswers[0]!);
  //     setIncorrectAnswers(incorrectAnswers.slice(1));
  //   } else {
  //     return <LessonComplete backgroundColor={backgroundColor} />;
  //   }
  // }

  // 다음 문제로 넘어갈 때 호출되는 함수
  const onFinish = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(false);
    setIsAnswerCorrect(false);
    setIsChecked(false);
    if (retryMode) {
      if (incorrectAnswers.length > 0) {
        setCurrentProblemIndex(incorrectAnswers[0]);
        setIncorrectAnswers(incorrectAnswers.slice(1));
      } else {
        setRetryMode(false);
        setIsComplete(true);
      }
    } else {
      if (currentProblemIndex < totalCorrectAnswersNeeded - 1) {
        setCurrentProblemIndex((prev) => prev + 1);
      } else {
        if (incorrectAnswers.length > 0) {
          setRetryMode(true);
          setCurrentProblemIndex(incorrectAnswers[0]);
          setIncorrectAnswers(incorrectAnswers.slice(1));
        } else {
          setIsComplete(true);
        }
      }
    }
  };

  useEffect(() => {
    if (transformWrapperRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      transformWrapperRef.current.resetTransform();
    }
  }, [currentProblemIndex]);

  useEffect(() => {
    if (isComplete) {
      if (status === "active") {
        increaseLessonsCompleted(1);
      }
    }
  }, [isComplete, increaseLessonsCompleted]);

  return isComplete ? (
    <LessonComplete backgroundColor={backgroundColor} />
  ) : (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 font-['TTLaundryGothicB'] sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center gap-5">
        <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
          <ProgressBar
            correctAnswerCount={correctAnswerCount}
            totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
            setQuitMessageShown={setQuitMessageShown}
            color={progressbarColor}
          />
        </div>
        <section className="flex grow flex-col gap-5 self-center rounded-lg text-center sm:items-center sm:justify-center sm:gap-5 sm:px-5">
          <h1 className="max-w-4xl whitespace-pre-line text-center text-2xl font-bold sm:text-3xl ">
            {currentProblem.problem}
          </h1>
          {currentProblem.problemDetail != null && (
            <div className="mb-4 text-center text-gray-600">
              {Array.isArray(currentProblem.problemDetail) ? (
                currentProblem.problemDetail.map((detail, index) => (
                  <p key={index}>{detail}</p>
                ))
              ) : (
                <p>{currentProblem.problemDetail}</p>
              )}
            </div>
          )}
          {currentProblem.problemImage != null && (
            <div>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={5}
                ref={transformWrapperRef}
              >
                <TransformComponent>
                  {/*eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-[300px] w-[100vw] cursor-pointer object-contain"
                    src={currentProblem.problemImage}
                    alt="Problem Image"
                  />
                </TransformComponent>
              </TransformWrapper>
              <p className="max-[768px] mt-[2.5vh] cursor-default text-center text-[11px] text-gray-600">
                <IoIosInformationCircleOutline className="inline pr-0.5 text-[13px]" />
                마우스 스크롤시 이미지 확대/축소가 가능합니다.
              </p>
            </div>
          )}
          {currentProblem.problemSelect.length >= 4 ? (
            <ul>
              {currentProblem.problemSelect.map((option, index) => (
                <li
                  key={index}
                  className={
                    index === selectedAnswer
                      ? `${!isChecked ? "cursor-pointer" : `cursor-default`} mb-[10px] rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-center text-blue-600`
                      : `${!isChecked ? "cursor-pointer hover:bg-gray-100" : `cursor-default`} mb-[10px] cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 text-center`
                  }
                  onClick={() => (!isChecked ? setSelectedAnswer(index) : null)}
                >
                  {option}
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-4 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-3">
              {currentProblem.problemSelect.map((option, index) => (
                <div
                  key={index}
                  className={
                    index === selectedAnswer
                      ? `${!isChecked ? "cursor-pointer" : `cursor-default`} rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-center text-blue-600`
                      : `${!isChecked ? "cursor-pointer hover:bg-gray-100" : `cursor-default`} rounded-xl border-2 border-b-4 border-gray-200 p-4 text-center`
                  }
                  role="radio"
                  aria-checked={index === selectedAnswer}
                  tabIndex={0}
                  onClick={() => !isChecked && setSelectedAnswer(index)}
                >
                  <h2 className="font-bold">{option}</h2>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      <QuitMessage
        quitMessageShown={quitMessageShown}
        setQuitMessageShown={setQuitMessageShown}
      />
      <CheckAnswer
        isAnswerSelected={selectedAnswer !== null}
        isAnswerCorrect={isAnswerCorrect}
        correctAnswerShown={correctAnswerShown}
        correctAnswer={currentProblem.problemSelect[correctAnswer]}
        onCheckAnswer={onCheckAnswer}
        isAnswerDetail={currentProblem.solutionDetail !== undefined}
        answerDetail={currentProblem.solutionDetail || ""}
        onFinish={onFinish}
        onSkip={onSkip}
        color={backgroundColor}
      />
    </div>
  );
};

export default ProblemUnitQuiz;
