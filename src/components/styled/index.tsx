import { ReactNode } from "react";
import styled from "styled-components";

interface DescriptionFrameProps {
  backgroundColor?: string;
}

export const DescriptionFrame = styled.section<DescriptionFrameProps>`
  background: ${(props: DescriptionFrameProps) => props.backgroundColor};
  border-radius: 20px;
  padding: 20px;
  margin: 20px 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  color: whitesmoke;
`;

// modal
interface ModalDisplayProps {
  display: string;
}

export const ModalBackdrop = styled.div<ModalDisplayProps>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
  display: ${(props: ModalDisplayProps) => props.display};
`;

export const Modal = ({
  toggleModal,
  title,
  detail,
}: {
  toggleModal: () => void;
  title: string;
  detail: string | ReactNode;
}) => {
  return (
    <div
      id="static-modal"
      data-modal-backdrop="static"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
    >
      <div className="relative z-50 max-h-full w-full max-w-2xl p-4">
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {title}
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
          <div className="space-y-4 p-4 md:p-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {detail}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
