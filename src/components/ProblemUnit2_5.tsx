import { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CharacterExplainVer2_5 from "./CharacterExplainVer2_5";
import Link from "next/link";

const ProblemUnit2_5 = () => {
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [totalCorrectAnswersNeeded, setTotalCorrectAnswersNeeded] = useState(0);

  const onNext = () => {
    if (currentStep < totalCorrectAnswersNeeded - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setLessonComplete(true); // Mark lesson as complete
    }
  };

  const onFinish = () => {
    // Logic to move to the next problem or end the lesson
    setLessonComplete(true); // Example: Mark lesson as complete
  };

  const handleDataLength = (length: number) => {
    setTotalCorrectAnswersNeeded(length);
  };

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
              근거있는 투자, 기업분석이란 무엇일까요?
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
          <CharacterExplainVer2_5
            onNext={onNext}
            onFinish={onFinish}
            onDataLength={handleDataLength}
          />
        </>
      ) : (
        <LessonComplete />
      )}
    </div>
  );
};

export default ProblemUnit2_5;

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
