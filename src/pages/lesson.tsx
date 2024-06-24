import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import ProblemUnitDescription from "~/components/ProblemUnitDescription";
import ProblemUnitQuiz from "~/components/ProblemUnitQuiz";
import * as descriptionData from "~/data/description";
import * as problemData from "~/data/problem";
import { useBoundStore } from "~/hooks/useBoundStore";
import ProblemUnit1_0 from "~/components/ProblemUnit1_0";
import ProblemUnit1_1 from "~/components/ProblemUnit1_1";
import ProblemUnit1_2 from "~/components/ProblemUnit1_2";

const Lesson: NextPage = () => {
  const router = useRouter();
  const { type, status } = router.query;
  const increaseLessonsCompleted = useBoundStore(
    (x) => x.increaseLessonsCompleted,
  );
  const email = useBoundStore((x) => x.email);

  const handleIncreaseLessonsCompleted = (by = 1) => {
    increaseLessonsCompleted(email, by);
  };
  return (
    <div>
      {/* URL 파라미터에 따라 다른 컴포넌트를 렌더링 */}
      {type === "1.0" ? (
        <ProblemUnit1_0
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "1.1" ? (
        <ProblemUnit1_1
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "1.2" ? (
        <ProblemUnit1_2
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "2.0" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr2_0}
          titles={descriptionData.titles2_0}
          nextIndexes={descriptionData.nextIndexes2_0}
          images={descriptionData.images2_0}
          imageIndexes={descriptionData.imageIndexes2_0}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "2.1" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr2_1}
          titles={descriptionData.titles2_1}
          nextIndexes={descriptionData.nextIndexes2_1}
          images={descriptionData.images2_1}
          imageIndexes={descriptionData.imageIndexes2_1}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "2.2" ? (
        <ProblemUnitQuiz
          problem={problemData.problem2_2}
          backgroundColor="blue"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "2.3" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr2_3}
          titles={descriptionData.titles2_3}
          nextIndexes={descriptionData.nextIndexes2_3}
          images={descriptionData.images2_3}
          imageIndexes={descriptionData.imageIndexes2_3}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "2.4" ? (
        <ProblemUnitQuiz
          problem={problemData.problem2_4}
          backgroundColor="blue"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        /> // 3-0 ~ 3-7 description quiz xx (3-0,3-1,3-2맵핑 우선)
      ) : type === "3.0" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr3_0}
          titles={descriptionData.titles3_0}
          nextIndexes={descriptionData.nextIndexes3_0}
          images={descriptionData.images3_0}
          imageIndexes={descriptionData.imageIndexes3_0}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "3.1" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr3_1}
          titles={descriptionData.titles3_1}
          nextIndexes={descriptionData.nextIndexes3_1}
          images={descriptionData.images3_1}
          imageIndexes={descriptionData.imageIndexes3_1}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : type === "3.2" ? (
        <ProblemUnitDescription
          descriptionArr={descriptionData.descriptionArr3_2}
          titles={descriptionData.titles3_2}
          nextIndexes={descriptionData.nextIndexes3_2}
          images={descriptionData.images3_2}
          imageIndexes={descriptionData.imageIndexes3_2}
          backgroundColor="#0046ff"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : // ) : type === "3.3" ? (
      //   <ProblemUnitDescription
      //     descriptionArr={descriptionData.descriptionArr3_3}
      //     titles={descriptionData.titles3_3}
      //     nextIndexes={descriptionData.nextIndexes3_3}
      //     images={descriptionData.images3_3}
      //     imageIndexes={descriptionData.imageIndexes3_3}
      //     backgroundColor="#0046ff"
      //     progressbarColor="blue"
      //     increaseLessonsCompleted={handleIncreaseLessonsCompleted}
      //     status={status as string}
      //   />
      // ) : type === "3.4" ? (
      //   <ProblemUnitDescription
      //     descriptionArr={descriptionData.descriptionArr3_4}
      //     titles={descriptionData.titles3_4}
      //     nextIndexes={descriptionData.nextIndexes3_4}
      //     images={descriptionData.images3_4}
      //     imageIndexes={descriptionData.imageIndexes3_4}
      //     backgroundColor="#0046ff"
      //     progressbarColor="blue"
      //     increaseLessonsCompleted={handleIncreaseLessonsCompleted}
      //     status={status as string}
      //   />
      // ) : type === "3.5" ? (
      //   <ProblemUnitDescription
      //     descriptionArr={descriptionData.descriptionArr3_5}
      //     titles={descriptionData.titles3_5}
      //     nextIndexes={descriptionData.nextIndexes3_5}
      //     images={descriptionData.images3_5}
      //     imageIndexes={descriptionData.imageIndexes3_5}
      //     backgroundColor="#0046ff"
      //     progressbarColor="blue"
      //     increaseLessonsCompleted={handleIncreaseLessonsCompleted}
      //     status={status as string}
      //   />
      // ) : type === "3.6" ? (
      //   <ProblemUnitDescription
      //     descriptionArr={descriptionData.descriptionArr3_6}
      //     titles={descriptionData.titles3_6}
      //     nextIndexes={descriptionData.nextIndexes3_6}
      //     images={descriptionData.images3_6}
      //     imageIndexes={descriptionData.imageIndexes3_6}
      //     backgroundColor="#0046ff"
      //     progressbarColor="blue"
      //     increaseLessonsCompleted={handleIncreaseLessonsCompleted}
      //     status={status as string}
      //   />
      // ) : type === "3.7" ? (
      //   <ProblemUnitDescription
      //     descriptionArr={descriptionData.descriptionArr3_7}
      //     titles={descriptionData.titles3_7}
      //     nextIndexes={descriptionData.nextIndexes3_7}
      //     images={descriptionData.images3_7}
      //     imageIndexes={descriptionData.imageIndexes3_7}
      //     backgroundColor="#0046ff"
      //     progressbarColor="blue"
      //     increaseLessonsCompleted={handleIncreaseLessonsCompleted}
      //     status={status as string}
      //   />
      type === "4.0" ? (
        <ProblemUnitQuiz
          problem={problemData.problem3_0}
          backgroundColor="blue"
          progressbarColor="blue"
          increaseLessonsCompleted={handleIncreaseLessonsCompleted}
          status={status as string}
        />
      ) : (
        <div>Unknown type</div>
      )}
    </div>
  );
};

export default Lesson;
