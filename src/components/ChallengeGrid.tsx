// components/ChallengeGrid.tsx
import React from "react";
import RewardCard from "~/components/RewardCard";
import { challenges } from "~/data/challengesData";

interface ChallengeGridProps {
  showOnlyCompleted?: boolean;
}

const ChallengeGrid: React.FC<ChallengeGridProps> = ({ showOnlyCompleted }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {challenges
        .filter((challenge) => !showOnlyCompleted || challenge.completed)
        .map((challenge, index) => (
          <RewardCard
            key={index}
            title={challenge.title}
            imageUrl={challenge.imageUrl}
            description={challenge.description}
            completed={challenge.completed}
          />
        ))}
    </div>
  );
};

export default ChallengeGrid;
