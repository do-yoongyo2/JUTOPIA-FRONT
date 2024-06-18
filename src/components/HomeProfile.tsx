import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-evenly rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 p-5 text-white shadow-lg">
      <img
        src="UNIT2_3/축하원숭이.png"
        alt="Profile"
        className="h-40 w-40 rounded-full border-4 border-white shadow-md"
      />
      <div className="ml-5">
        <h1 className="text-2xl font-bold">여긴 프로필 이름으로 연결</h1>
        <h2 className="mt-2 text-lg font-semibold">
          주토피아와 함께한 지 N일 [api연결]
        </h2>
        <h2 className="mt-2 text-lg font-semibold">이번 주 총 N일 학습 완🔥</h2>
      </div>
    </div>
  );
};

export default Profile;
