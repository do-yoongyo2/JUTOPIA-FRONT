import React, { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CharacterExplain2_0 from "./CharacterExplain2_0";
import Link from "next/link";

const ProblemUnit2_0 = () => {
  const totalCorrectAnswersNeeded = 4;
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);

  const onNext = (index: number) => {
    if (currentStep < totalCorrectAnswersNeeded) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const onFinish = () => {
    setLessonComplete(true);
  };

  const LessonComplete = () => {
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

  const titles = [
    "수입, 비용, 자산에 대해 알아볼까요?",
    "계좌와 신용에 대해 알아볼까요?",
    "이자율과 적금, 예금에 대해 알아볼까요?",
    "금융 상품과 비금융 상품에 대해 알아볼까요?",
  ];

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      {!lessonComplete ? (
        <>
          <div className="flex grow flex-col items-center gap-5">
            <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
              <ProgressBar
                correctAnswerCount={currentStep}
                totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
                setQuitMessageShown={setQuitMessageShown}
              />
            </div>
            <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
              {titles[titleIndex]}
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
          <CharacterExplain2_0
            onNext={onNext}
            onFinish={onFinish}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setTitleIndex={setTitleIndex}
          />
        </>
      ) : (
        <LessonComplete />
      )}
    </div>
  );
};

export default ProblemUnit2_0;
