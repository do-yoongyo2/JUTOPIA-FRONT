import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoArrowRedoOutline } from "react-icons/io5";
import { MdOutlineSwipeLeft } from "react-icons/md";
import TextTypingAni from "./TextTypingAni";
import { DescriptionItem } from "./../data/description";
import { DescriptionFrame } from "./styled";

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
  backgroundColor?: string;
}) => {
  const titleChangeIndexes = nextIndexes.map((elem) => elem + 1);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const handleNext = () => {
    if (currentIndex < descriptionArr.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setIsTypingComplete(false);
      if (nextIndexes.includes(nextIdx)) onNext(nextIdx);
      if (titleChangeIndexes.includes(nextIdx))
        setTitleIndex((prev) => prev + 1);
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
      <style>
        {`
          @keyframes blink {
            0% { opacity: 0.7; }
            50% { opacity: 0; }
            100% { opacity: 0.7; }
          }
          .blink {
            animation: blink 1s infinite;
          }
          .hide {
            display:none;
          }
          @media (max-width: 768px) {
            .hide-on-small {
              display: none;
            }
          }
          
        `}
      </style>
      <DescriptionFrame
        backgroundColor={backgroundColor}
        draggable="true"
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <MdOutlineSwipeLeft
          className={
            window.innerWidth <= 768 &&
            isTypingComplete &&
            currentIndex < descriptionArr.length - 1
              ? "blink"
              : "hide"
          }
          style={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 50%)",
            opacity: "70%",
          }}
          size="150px"
        />
        <div
          className="container mx-auto block items-center justify-between sm:flex"
          style={{ maxWidth: "70vw" }}
        >
          <div className="block sm:flex">
            <img
              src="character_finger.webp"
              alt="Character pointing"
              width="100rem"
              style={{
                objectFit: "cover",
                margin: "30px",
                border: "white 5px solid",
                borderRadius: "100%",
              }}
            />
            {currentItem && (
              <div className="p-4">
                <h2
                  style={{
                    fontFamily: "TTLaundryGothicB",
                    padding: "10px 0",
                    fontSize: "1.5rem",
                    marginBottom: "10px",
                    cursor: "default",
                    whiteSpace: "pre-line",
                  }}
                >
                  {Object.keys(currentItem)[0]}
                </h2>
                <div
                  className="flex items-center"
                  onClick={handleTypingComplete}
                  style={{ cursor: "default" }}
                >
                  {isTypingComplete ? (
                    <div
                      style={{
                        fontFamily: "TTLaundryGothicB",
                        whiteSpace: "pre-line",
                        cursor: "default",
                      }}
                    >
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
            className={`transition-transform ${isTypingComplete ? "animate-bounce" : ""}`}
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {nextIndexes.includes(currentIndex)
              ? currentIndex === descriptionArr.length - 1
                ? isTypingComplete && (
                    <button
                      className="mb-2 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      onClick={handleNext}
                      style={{ fontFamily: "TTLaundryGothicB" }}
                    >
                      COMPLETE!
                    </button>
                  )
                : isTypingComplete && (
                    <MdKeyboardDoubleArrowRight
                      className="hide-on-small"
                      onClick={handleNext}
                      style={{ cursor: "pointer", fontSize: "40px" }}
                      color="white"
                    />
                  )
              : isTypingComplete && (
                  <IoArrowRedoOutline
                    className="hide-on-small"
                    onClick={handleNext}
                    style={{ cursor: "pointer", fontSize: "30px" }}
                  />
                )}
          </div>
        </div>
      </DescriptionFrame>
    </>
  );
};

export default CharacterExplain;
