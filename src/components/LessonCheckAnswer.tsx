import { useState } from "react";
import { DoneSvg, BigCloseSvg } from "./Svgs";
import { Modal, ModalBackdrop } from "./styled";

const CheckAnswer = ({
  isAnswerSelected,
  isAnswerCorrect,
  correctAnswerShown,
  correctAnswer,
  isAnswerDetail,
  answerDetail,
  color,
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
  color: string;
  onCheckAnswer: () => void;
  onFinish: () => void;
  onSkip: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalTitle = "해설";

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isAnswerDetail && (
        <>
          {isModalOpen && (
            <Modal
              toggleModal={toggleModal}
              title={modalTitle}
              detail={answerDetail}
            />
          )}
        </>
      )}
      <section className="border-gray-200 font-['TTLaundryGothicB'] sm:border-t-2 sm:p-10">
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
              className={`grow rounded-2xl border-b-4 border-${color}-600 bg-${color}-500 p-3 font-bold uppercase text-white sm:min-w-[150px] sm:max-w-fit sm:grow-0`}
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
              ? "fixed bottom-0 left-0 right-0 bg-green-100 font-bold text-green-600 transition-all"
              : "fixed bottom-0 left-0 right-0 bg-red-100 font-bold text-red-500 transition-all"
            : "fixed -bottom-52 left-0 right-0"
        } ${!correctAnswerShown && "hidden sm:block"}`}
      >
        <div className="flex max-w-5xl flex-col gap-4 p-5 sm:mx-auto sm:flex-row sm:items-center sm:justify-between sm:p-10 sm:py-14">
          {isAnswerCorrect ? (
            <div className="mb-2 flex flex-col gap-5 sm:flex-row sm:items-center">
              <div
                className={`hidden rounded-full bg-white p-5 text-green-500 sm:block`}
              >
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
                <div className="text-2xl">Correct solution</div>
                <div className="text-sm font-normal">{correctAnswer}</div>
              </div>
            </div>
          )}
          <div className="flex max-w-5xl gap-5">
            <button
              onClick={onFinish}
              className={
                isAnswerCorrect
                  ? `w-full rounded-2xl border-b-4 border-green-600 bg-green-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit`
                  : "w-full rounded-2xl border-b-4 border-red-600 bg-red-500 p-3 font-bold uppercase text-white transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
              }
            >
              Continue
            </button>
            {isAnswerDetail && (
              <button
                type="button"
                className={
                  isAnswerCorrect
                    ? `border-white-600 text-green w-full rounded-2xl border-b-4 bg-white p-3 font-bold uppercase transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit`
                    : "border-white-600 text-red w-full rounded-2xl border-b-4 bg-white p-3 font-bold uppercase transition hover:brightness-105 sm:min-w-[150px] sm:max-w-fit"
                }
                onClick={toggleModal}
              >
                해설 보기
              </button>
            )}
          </div>
        </div>
      </div>
      <ModalBackdrop display={isModalOpen ? "block" : "none"} />
    </>
  );
};

export default CheckAnswer;
