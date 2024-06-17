import { useState } from "react";
import { DoneSvg, BigCloseSvg } from "./Svgs";

const CheckAnswer = ({
  isAnswerSelected,
  isAnswerCorrect,
  correctAnswerShown,
  correctAnswer,
  isAnswerDetail,
  answerDetail,
  onCheckAnswer,
  onFinish,
  onSkip,
}: {
  isAnswerSelected: boolean;
  isAnswerCorrect: boolean;
  correctAnswerShown: boolean;
  correctAnswer: string;
  isAnswerDetail?: boolean;
  answerDetail?: string;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className="border-gray-200 sm:border-t-2 sm:p-10">
        <div className="mx-auto flex max-w-5xl sm:justify-between">
          <button
            className="hidden rounded-2xl border-2 border-b-4 border-gray-200 bg-white p-3 font-bold uppercase text-gray-400 transition hover:border-gray-300 hover:bg-gray-200 sm:block sm:min-w-[150px] sm:max-w-fit"
            onClick={onSkip}
          >
            Skip
          </button>
          {!isAnswerSelected ? (
            <button
              className="grow rounded-2xl bg-gray-200 p-3 font-bold uppercase text-gray-400 sm:min-w-[150px] sm:max-w-fit sm:grow-0"
              disabled
            >
              Check
            </button>
          ) : (
            <button
              onClick={onCheckAnswer}
              className="grow rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0"
            >
              Check
            </button>
          )}
        </div>
      </section>

      <div
        className={`${
          correctAnswerShown
            ? isAnswerCorrect
              ? "fixed bottom-0 left-0 right-0 bg-lime-100 font-bold text-green-600 transition-all"
              : "fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all"
            : "fixed -bottom-52 left-0 right-0"
        } ${!correctAnswerShown && "hidden sm:block"}`}
      >
        <div className="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14">
          <>
            {isAnswerCorrect ? (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-green-500 sm:block">
                  <DoneSvg />
                </div>
                <div className="text-2xl">Good job!</div>
              </div>
            ) : (
              <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="hidden rounded-full bg-white p-5 text-red-500 sm:block">
                  <BigCloseSvg />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-2xl">Correct solution:</div>{" "}
                  <div className="text-sm font-normal">{correctAnswer}</div>
                </div>
              </div>
            )}
            {isAnswerDetail && (
              <>
                <button
                  type="button"
                  className="mb-2 me-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  onClick={toggleModal}
                >
                  해설 보기
                </button>
                {isModalOpen && (
                  <div
                    id="static-modal"
                    data-modal-backdrop="static"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
                  >
                    <div className="relative max-h-full w-full max-w-2xl p-4">
                      <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Answer Details
                          </h3>
                          <button
                            type="button"
                            className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={toggleModal}
                          >
                            <svg
                              className="h-3 w-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 14"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                              />
                            </svg>
                            <span className="sr-only">닫기</span>
                          </button>
                        </div>
                        <div className="space-y-4 p-4 md:p-5">
                          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {answerDetail}
                          </p>
                        </div>
                        <div className="flex items-center rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600">
                          <button
                            type="button"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={toggleModal}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </>
          <button
            onClick={onFinish}
            className={
              isAnswerCorrect
                ? "w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                : "w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
            }
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckAnswer;
