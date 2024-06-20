import React, { useState } from "react";

interface RewardCardProps {
  title: string;
  imageUrl: string;
  description: string;
  completed: boolean;
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  imageUrl,
  description,
  completed,
}) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="rounded-lg border p-4 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <img
        src={imageUrl}
        alt={title}
        className={`mb-4 h-40 w-full transform cursor-pointer rounded-lg object-contain transition-transform duration-300 hover:scale-105 ${!completed ? "grayscale" : ""}`}
        onClick={openModal}
      />
      <p className="text-center">{description}</p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black opacity-50 transition-opacity"
            onClick={closeModal}
          ></div>
          <div className="z-50 max-w-md transform rounded-lg bg-white p-8 shadow-lg transition-all duration-300">
            <h2 className="mb-4 text-2xl font-bold">{title}</h2>
            <img
              src={imageUrl}
              alt={title}
              className={`mb-4 h-60 w-full rounded-lg object-cover ${!completed ? "grayscale" : ""}`}
            />
            <p className="mb-4 text-center">{description}</p>
            <button
              className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RewardCard;
