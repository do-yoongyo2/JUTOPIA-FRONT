import { NextPage } from "next";
import React from "react";
import ProblemUnitDescription from "~/components/ProblemUnitDescription";
import ProblemUnitQuiz from "~/components/ProblemUnitQuiz";
import * as descriptionData from "~/data/description";
import * as problemData from "~/data/problem";

const Lesson: NextPage = () => {
  return (
    <div>
      {/* learn페이지에서 버튼 클릭으로 lesson으로 이동함.
          이 클릭한 문제 번호에 따라 보여주는 컴포넌트를 다르게 가져갈 예정.
          삼항 삼항 삼항 연산자를 써 
          유닛 1,2,3,4  
      */}

      {/* <ProblemUnitDescription
        descriptionArr={descriptionData.descriptionArr2_0}
        titles={descriptionData.titles2_0}
        nextIndexes={descriptionData.nextIndexes2_0}
        images={descriptionData.images2_0}
        imageIndexes={descriptionData.imageIndexes2_0}
        backgroundColor="#0046ff"
        progressbarColor="blue"
      /> */}

      {/* <ProblemUnitDescription
        descriptionArr={descriptionData.descriptionArr2_1}
        titles={descriptionData.titles2_1}
        nextIndexes={descriptionData.nextIndexes2_1}
        images={descriptionData.images2_1}
        imageIndexes={descriptionData.imageIndexes2_1}
        backgroundColor="#0046ff"
        progressbarColor="blue"
      /> */}

      {/* <ProblemUnitDescription
        descriptionArr={descriptionData.descriptionArr2_3}
        titles={descriptionData.titles2_3}
        nextIndexes={descriptionData.nextIndexes2_3}
        images={descriptionData.images2_3}
        imageIndexes={descriptionData.imageIndexes2_3}
        backgroundColor="#0046ff"
        progressbarColor="blue"
      /> */}

      {/* <ProblemUnitQuiz
        problem={problemData.problem2_4}
        backgroundColor="blue"
        progressbarColor="blue"
      /> */}

      {/* <ProblemUnitQuiz
        problem={problemData.problem3_0}
        backgroundColor="blue"
        progressbarColor="blue"
      /> */}

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
