/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";
import ProgressBar from "~/components/LessonProgressBar";
import QuitMessage from "~/components/LessonQuitMessage";
import CharacterExplain from "./CharacterExplain";
import type { DescriptionItem } from "~/data/description";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Link from "next/link";

const ProblemUnitDescription = ({
  descriptionArr,
  titles,
  nextIndexes,
  backgroundColor,
  images,
  imageIndexes,
  progressbarColor,
  increaseLessonsCompleted,
  status,
}: {
  descriptionArr: DescriptionItem[];
  titles: string[];
  nextIndexes: number[];
  backgroundColor: string;
  images: string[];
  imageIndexes: number[];
  progressbarColor: string;
  increaseLessonsCompleted: (count: number) => void;
  status: string;
}) => {
  const totalCorrectAnswersNeeded = nextIndexes.length;
  const [quitMessageShown, setQuitMessageShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const transformWrapperRef = useRef<any>(null);

  const onNext = (): void => {
    if (currentStep < totalCorrectAnswersNeeded) {
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setLessonComplete(true);
    }
  };

  const onFinish = () => {
    setLessonComplete(true);
  };

  useEffect(() => {
    if (imageIndexes.includes(currentIndex)) setImageIndex((prev) => prev + 1);
  }, [currentIndex, imageIndexes]);

  useEffect(() => {
    if (transformWrapperRef.current) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      transformWrapperRef.current.resetTransform();
    }
  }, [imageIndex]);

  useEffect(() => {
    if (lessonComplete) {
      if (status === "active") {
        increaseLessonsCompleted(1);
      }
    }
  }, [lessonComplete, increaseLessonsCompleted]);

  const LessonComplete = () => {
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

  return (
    <div className="flex min-h-screen flex-col gap-5 px-4 py-5 font-['TTLaundryGothicB'] sm:px-0 sm:py-0">
      {!lessonComplete ? (
        <>
          <div className="flex grow flex-col items-center gap-8">
            <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
              <ProgressBar
                correctAnswerCount={currentStep}
                totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
                setQuitMessageShown={setQuitMessageShown}
                color={progressbarColor}
              />
            </div>
            <h1 className="mb-2 text-2xl font-bold sm:text-3xl">
              {titles[titleIndex]}
            </h1>
            <div>
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={5}
                ref={transformWrapperRef}
              >
                <TransformComponent>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="h-[45vh] w-[100vw] cursor-pointer object-contain"
                    alt="설명 이미지"
                    src={images[imageIndex]}
                  />
                </TransformComponent>
              </TransformWrapper>
              <p className="max-[768px] mt-[2.5vh] cursor-default text-center text-[11px] text-gray-600">
                <IoIosInformationCircleOutline className="inline pr-0.5 text-[14px]" />
                마우스 스크롤시 이미지 확대/축소가 가능합니다.
              </p>
            </div>
          </div>
          <QuitMessage
            quitMessageShown={quitMessageShown}
            setQuitMessageShown={setQuitMessageShown}
          />
          <CharacterExplain
            onNext={onNext}
            onFinish={onFinish}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            setTitleIndex={setTitleIndex}
            descriptionArr={descriptionArr}
            nextIndexes={nextIndexes}
            backgroundColor={backgroundColor}
          />
        </>
      ) : (
        <LessonComplete />
      )}
    </div>
  );
};

export default ProblemUnitDescription;
