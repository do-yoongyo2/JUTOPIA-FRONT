import { useState } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import Link from "next/link";
import RenderComponent from "./UNIT1_0/RenderComponent";

// const pages = [Accounts, Accounts2, Accounts3];
const ProblemUnit1_0 = () => {
  const totalCorrectAnswersNeeded = 8;
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);

  const onNext = () => {
    if (currentStep < totalCorrectAnswersNeeded - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const onPrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const onFinish = () => {
    setLessonComplete(true);
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
              계좌 개설하기
            </h1>

            <RenderComponent
              onNext={onNext}
              onFinish={onFinish}
              onPrev={onPrev}
            />
            {/* {currentStep > 0 && (
              <button
                onClick={onPrev}
                className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                이전
              </button>
            )} */}
          </div>

          <QuitMessage
            quitMessageShown={quitMessageShown}
            setQuitMessageShown={setQuitMessageShown}
          />
        </>
      ) : (
        <LessonComplete />
      )}
    </div>
  );
};

export default ProblemUnit1_0;

const LessonComplete = () => {
  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
      <div className="flex grow flex-col items-center justify-center gap-2 font-bold">
        {/* <h1 className="text-center text-3xl text-yellow-400">
          Lesson Complete!
        </h1> */}
        <img
          className="mt-4"
          alt="설명 이미지"
          src="/UNIT1_0/shinhanEvent.png"
          style={{ height: "400px", width: "350px" }}
        />
        <div className="flex items-center">
          <img
            className="mt-4"
            alt="설명 이미지"
            src="/UNIT1_0/신한투자증권qr코드.jpg"
            style={{ height: "100px", width: "100px" }}
          />
          <h1 className="text-shinhan-blue text-center text-xl">
            신한투자증권 바로가기
          </h1>
        </div>
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
