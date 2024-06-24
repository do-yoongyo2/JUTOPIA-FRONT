import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { MdOutlineSwipeLeft } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";
import type { DescriptionItem } from "./../data/description";
import { DescriptionFrame } from "./styled";
import Image from "next/image";

const CharacterExplain = ({
  onNext,
  onFinish,
  currentIndex,
  setCurrentIndex,
  setTitleIndex,
  descriptionArr,
  nextIndexes,
  backgroundColor,
}: {
  onNext: (index: number) => void;
  onFinish: () => void;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  setTitleIndex: React.Dispatch<React.SetStateAction<number>>;
  descriptionArr: DescriptionItem[];
  nextIndexes: number[];
  backgroundColor: string;
}) => {
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < descriptionArr.length - 1) {
      if (nextIndexes.includes(currentIndex)) setTitleIndex((prev) => prev + 1);
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setIsTypingComplete(false);
      if (nextIndexes.includes(nextIdx)) onNext(nextIdx);
    } else {
      onFinish();
    }
  };

  const handleTypingComplete = () => {
    setIsTypingComplete(true);
  };

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragStartX(e.clientX);
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (dragStartX && e.clientX < dragStartX) {
      handleNext();
    }
    setDragStartX(null);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX && e.changedTouches[0].clientX < touchStartX) {
      handleNext();
    }
    setTouchStartX(null);
  };

  const currentItem = descriptionArr[currentIndex];

  return (
    <>
      <DescriptionFrame
        backgroundColor={backgroundColor}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MdOutlineSwipeLeft
          className={`${isTypingComplete && currentIndex < descriptionArr.length - 1 ? "blink-on-small" : "hidden"} absolute left-2/4 size-[150px] translate-x-[-50%] translate-y-[50%] opacity-0`}
        />
        <div className="container mx-auto block max-w-[70vw] items-center justify-between sm:flex">
          <div className="block sm:flex">
            <Image
              className="m-[15px] h-[7rem] w-[7rem] rounded-[100%] border-4 border-solid border-white object-cover"
              src="character_finger.webp"
              alt="Character pointing"
            />
            {currentItem && (
              <div className="p-4 ">
                <h2 className="mb-5 cursor-default whitespace-pre-line font-['TTLaundryGothicB'] text-[1.5rem]">
                  {Object.keys(currentItem)[0]}
                </h2>
                <div
                  className="flex cursor-default items-center"
                  onClick={handleTypingComplete}
                >
                  {isTypingComplete ? (
                    <div className="cursor-default whitespace-pre-line font-['TTLaundryGothicB']">
                      {
                        currentItem[
                          Object.keys(currentItem)[0] as keyof DescriptionItem
                        ]
                      }
                    </div>
                  ) : (
                    <TextTypingAni
                      text={
                        currentItem[
                          Object.keys(currentItem)[0] as keyof DescriptionItem
                        ]
                      }
                      onTypingComplete={handleTypingComplete}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
          <div
            className={`ml-10 flex items-center transition-transform ${isTypingComplete ? "animate-bounce" : ""}`}
          >
            {nextIndexes.includes(currentIndex)
              ? currentIndex === descriptionArr.length - 1
                ? isTypingComplete && (
                    <button
                      className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 font-['TTLaundryGothicB'] text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      onClick={handleNext}
                    >
                      COMPLETE!
                    </button>
                  )
                : isTypingComplete && (
                    <MdKeyboardDoubleArrowRight
                      className="cursor-pointer text-[40px] text-white max-[768px]:hidden"
                      onClick={handleNext}
                    />
                  )
              : isTypingComplete && (
                  <IoArrowRedoOutline
                    className="cursor-pointer text-[30px] max-[768px]:hidden"
                    onClick={handleNext}
                  />
                )}
          </div>
        </div>
      </DescriptionFrame>
    </>
  );
};

export default CharacterExplain;
