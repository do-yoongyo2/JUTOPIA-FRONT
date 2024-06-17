import { NextPage } from "next";
import React from "react";
// import ProblemUnit2_4 from "~/components/ProblemUnit2_4";
// import ProblemUnit3_0 from "~/components/ProblemUnit3_0";
// import ProblemUnit2_3 from "~/components/ProblemUnit2_3";

const Lesson: NextPage = () => {
  return (
    <div>
      {/* learn페이지에서 버튼 클릭으로 lesson으로 이동함.
          이 클릭한 문제 번호에 따라 보여주는 컴포넌트를 다르게 가져갈 예정.
          삼항 삼항 삼항 연산자를 써 
          유닛 1,2,3,4  
      */}

      {/* <ProblemUnit2_3 /> */}
      {/* <ProblemUnit2_4 /> */}

      {/* <TestExample /> */}
      {/* <ProblemUnit3_0 /> */}

      {/* 
            구현한 문제 컴포넌트에서 알아서 사용해라. div css구조는 아래와 같이 사용할것.
            ex)
            <div className="flex min-h-screen flex-col gap-5 px-4 py-5 sm:px-0 sm:py-0">
              <div className="flex grow flex-col items-center gap-5">
                <div className="w-full max-w-5xl sm:mt-8 sm:px-5">
                  <ProgressBar
                  correctAnswerCount={correctAnswerCount}
                  totalCorrectAnswersNeeded={totalCorrectAnswersNeeded}
                  setQuitMessageShown={setQuitMessageShown}
                  />
                </div>
              </div>
              <QuitMessage
                quitMessageShown={quitMessageShown}
                setQuitMessageShown={setQuitMessageShown}
              />
            </div>
          */}
    </div>
  );
};

export default Lesson;
