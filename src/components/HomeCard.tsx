import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="flex flex-col rounded-lg bg-gradient-to-r p-5 text-black shadow-lg">
      <h2 className="mb-3 border-b-2 border-black pb-2 text-xl font-semibold">
        {title}
      </h2>
      <p className="text-base">{content}</p>
    </div>
  );
};

export default Card;
