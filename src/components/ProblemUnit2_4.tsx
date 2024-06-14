import { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CheckAnswer from "~/components/LessonCheckAnswer";
import Link from "next/link";
import Image from "next/image";

const lessonProblem1 = {
  type: "SELECT_1_OF_3",
  question: `동종 업종 중 삼성전자의 기업 개요로 옳은것은 무엇인가요?`,
  image: `/UNIT2_4/동일업종비교_삼전.png`,
  answers: [
    {
      name: "삼성전자의 주요 제품으로는 스마트폰, 노트북, 태블릿 등이 있으며, 클라우드 컴퓨팅 서비스도 제공한다.",
    },
    {
      name: "삼성전자는 국내와 중국에 4개의 생산기지와 연구개발법인, 미국, 중국, 홍콩, 대만 등에 판매법인을 운영 중이다.",
    },
    {
      name: "삼성전자는 국내 최초로 반도체 패키지 절단 모듈인 'micro SAW'를 국산화 하는데 성공하였다.",
    },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem2 = {
  type: "SELECT_1_OF_3",
  question: `삼성 전자의 매출액을 보고, 옳은 것을 고르세요.`,
  answers: [
    { name: "삼성 전자는 작년에 비해 성장하고 있다." },
    { name: "삼성 전자는 작년에 비해 성장하지 않고 있다." },
    { name: "삼성 전자는 작년에 비해 큰 변화 없다." },
  ],
  correctAnswer: 0,
} as const;

const lessonProblem3 = {
  type: "SELECT_1_OF_3",
  question: `영업이익에 대해 옳지 않은 것을 고르시오.`,
  answers: [
    { name: "영업 이익은 매출액에서 매출원가, 판관비 등을 뺀 금액이다." },
    {
      name: "당기 순이익은 영업이익에서 여러가지 비용 및 세금을 제외하고 남은 순이익이다.",
    },
    { name: "매출액이 크면 무조건 흑자이다." },
  ],
  correctAnswer: 2,
} as const;
const lessonProblem4 = {
  type: "SELECT_1_OF_3",
  question: `삼성전자의 2024년 3월 순이익율을 고르세요.`,
  answers: [{ name: "18.47" }, { name: "9.39" }, { name: "9.19" }],
  correctAnswer: 1,
} as const;
const lessonProblem5 = {
  type: "SELECT_1_OF_3",
  image: "/UNIT2_4/기업실적분석_삼전.png",
  question: `삼성전자의 2024년 3월 부채비율을 보고 옳은 것을 고르세요.`,
  answers: [
    { name: "부채 비율은 189.76이다." },
    { name: "재무 구조가 안정적이라고 할 수 있다." },
    {
      name: "부채 비율이 높다는 것은 금융 기관에 대해 의존도가 낮다는 것이다.",
    },
  ],
  correctAnswer: 1,
} as const;
const lessonProblem6 = {
  type: "SELECT_1_OF_3",
  image: "/UNIT2_4/기업실적분석_삼전.png",
  question: `삼성전자의 2024년 3월 PER이 의미하는 것이 무엇인지 고르세요.`,
  answers: [
    { name: "삼성전자의 주가가 매우 저평가 되어있다." },
    { name: "삼성전자의 주가가 적정 수준에 있다." },
    { name: "삼성전자의 주가가 매우 고평가되어 있다." },
  ],
  correctAnswer: 2,
} as const;
const lessonProblem7 = {
  type: "SELECT_1_OF_3",
  image: "/UNIT2_4/기업실적분석_삼전.png",
  question: `다음 중 옳은 것을 고르세요.`,
  answers: [
    { name: "삼성 전자의 분기 주가배당금은 2023년 12월 기준 1444원이다." },
    { name: "삼성전자의 2023년 시가배당률은 2022년보다 낮다." },
    { name: "배당성향을 볼 때 삼성전자는 주주친화적이라고 볼 수 있다." },
  ],
  correctAnswer: 2,
} as const;

const lessonProblems = [
  lessonProblem1,
  lessonProblem2,
  lessonProblem3,
  lessonProblem4,
  lessonProblem5,
  lessonProblem6,
  lessonProblem7,
];

const ProblemUnit2_4 = () => {
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0); // 맞춘 문제 수
  const totalCorrectAnswersNeeded = lessonProblems.length; // 필요한 총 정답 수
  const [quitMessageShown, setQuitMessageShown] = useState(false); // 종료 메시지 표시 여부
  const [correctAnswerShown, setCorrectAnswerShown] = useState(false); // 정답 표시 여부
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false); // 선택된 답이 정답인지 여부
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null); // 선택된 답
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0); // 현재 문제 인덱스
  const [incorrectAnswers, setIncorrectAnswers] = useState<number[]>([]); // 틀린 문제 인덱스
  const [retryMode, setRetryMode] = useState(false); // 재도전 모드 여부

  const currentProblem = lessonProblems[currentProblemIndex];
  const correctAnswer = currentProblem!.correctAnswer;

  // 정답을 확인할 때 호출되는 함수
  const onCheckAnswer = () => {
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
    setSelectedAnswer(null);
    setCorrectAnswerShown(true);
  };

  if (correctAnswerCount >= totalCorrectAnswersNeeded && !retryMode) {
    if (incorrectAnswers.length > 0) {
      setRetryMode(true);
      setCurrentProblemIndex(incorrectAnswers[0]!);
      setIncorrectAnswers(incorrectAnswers.slice(1));
    } else {
      return <LessonComplete correctAnswerCount={correctAnswerCount} />;
    }
  }

  // 다음 문제로 넘어갈 때 호출되는 함수
  const onFinish = () => {
    setSelectedAnswer(null);
    setCorrectAnswerShown(false);
    setIsAnswerCorrect(false);
    if (retryMode) {
      if (incorrectAnswers.length > 0) {
        setCurrentProblemIndex(incorrectAnswers[0]!);
        setIncorrectAnswers(incorrectAnswers.slice(1));
      } else {
        setRetryMode(false);
        return <LessonComplete correctAnswerCount={correctAnswerCount} />;
      }
    } else {
      if (currentProblemIndex < lessonProblems.length - 1) {
        setCurrentProblemIndex((prev) => prev + 1);
      } else {
        if (incorrectAnswers.length > 0) {
          setRetryMode(true);
          setCurrentProblemIndex(incorrectAnswers[0]!);
          setIncorrectAnswers(incorrectAnswers.slice(1));
        } else {
          return <LessonComplete correctAnswerCount={correctAnswerCount} />;
        }
      }
    }
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
        {/* 문제 표시 */}
        <section className="flex max-w-2xl grow flex-col gap-5 self-center rounded-lg sm:items-center sm:justify-center sm:gap-24 sm:px-5">
          <h1 className="self-start text-center text-2xl font-bold sm:text-3xl">
            {currentProblem!.question}
          </h1>
          {currentProblem!.image && (
            <div className="relative h-64 w-full">
              <Image
                src={currentProblem!.image}
                alt="Problem Image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          )}
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {currentProblem!.answers.map((answer, index) => (
              <div
                key={index}
                className={
                  index === selectedAnswer
                    ? "cursor-pointer rounded-xl border-2 border-b-4 border-blue-300 bg-blue-100 p-4 text-center text-blue-400"
                    : "cursor-pointer rounded-xl border-2 border-b-4 border-gray-200 p-4 text-center hover:bg-gray-100"
                }
                role="radio"
                aria-checked={index === selectedAnswer}
                tabIndex={0}
                onClick={() => setSelectedAnswer(index)}
              >
                {/* {answer.icon} */}
                <h2 className="font-bold">{answer.name}</h2>
              </div>
            ))}
          </div>
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
        correctAnswer={currentProblem!.answers[correctAnswer].name}
        onCheckAnswer={onCheckAnswer}
        onFinish={onFinish}
        onSkip={onSkip}
      />
    </div>
  );
};

export default ProblemUnit2_4;

const LessonComplete = (
  {
    // correctAnswerCount,
  }: {
    correctAnswerCount: number;
  },
) => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-8 font-bold">
        <h1 className="text-center text-3xl text-yellow-400">
          Lesson Complete!
        </h1>
      </div>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <Link
            className={
              "flex w-full items-center justify-center rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
            href="/tutorial"
          >
            돌아가기
          </Link>
        </div>
      </section>
    </div>
  );
};
