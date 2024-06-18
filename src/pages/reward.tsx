import type { NextPage } from "next";
import React from "react";
import { LeftBar } from "~/components/LeftBar";
import { BottomBar } from "~/components/BottomBar";
import TopBar from "~/components/TopBar";
import RewardCard from "~/components/RewardCard";

const Reward: NextPage = () => {
  // Sample data for challenge cards
  const challenges = [
    {
      title: "Challenge 1",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 1",
    },
    {
      title: "Challenge 2",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 2",
    },
    {
      title: "Challenge 3",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 3",
    },
    {
      title: "Challenge 4",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 4",
    },
    {
      title: "Challenge 5",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 5",
    },
    {
      title: "Challenge 6",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 6",
    },
    {
      title: "Challenge 7",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 7",
    },
    {
      title: "Challenge 8",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 8",
    },
    {
      title: "Challenge 9",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 9",
    },
    {
      title: "Challenge 10",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 10",
    },
    {
      title: "Challenge 11",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 11",
    },
    {
      title: "Challenge 12",
      imageUrl: "Reward/rewardExample.jpeg",
      description: "Description for challenge 12",
    },
  ];

  return (
    <div className="font-ttlaundrygothicb">
      <TopBar menuName="Reward" />
      <LeftBar selectedTab="리워드" />

      <div className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        <div className="flex max-w-[65rem] grow flex-col">
          <h1 className="border-b-2 pb-4 text-center text-4xl font-bold">
            {" "}
            도전과제 <div className="pt-[40px]"></div>
          </h1>
          <div className="pt-[40px]"></div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((challenge, index) => (
              <RewardCard
                key={index}
                title={challenge.title}
                imageUrl={challenge.imageUrl}
                description={challenge.description}
              />
            ))}
          </div>
        </div>
      </div>

      <BottomBar selectedTab="리워드" />
    </div>
  );
};

export default Reward;
