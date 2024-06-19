import React, { useState, useEffect } from "react";
import Accounts from "./MakeAccount";
import Accounts2 from "./MakeAccount2";
import Accounts3 from "./MakeAccount3";
import Accounts4 from "./MakeAccount4";
import Accounts5 from "./MakeAccount5";
import Accounts6 from "./MakeAccount6";
import Accounts7 from "./MakeAccount7";
import Accounts8 from "./MakeAccount8";
interface RenderComponentProps {
  onNext: () => void;
  onFinish: () => void;
  onPrev: () => void;
}
const RenderComponent: React.FC<RenderComponentProps> = ({
  onNext,
  onPrev,
  onFinish,
}) => {
  const [activeComponent, setActiveComponent] = useState("Accounts");
  useEffect(() => {
    console.log("Accounts2 props updated");
  }, [onNext, onPrev, setActiveComponent, activeComponent]);
  const handleNext = (nextComponent: React.SetStateAction<string>) => {
    setActiveComponent(nextComponent); // 다음 컴포넌트로 상태 업데이트
    onNext(); // 부모 컴포넌트에서 currentStep 업데이트
  };
  const handlePrev = (prevComponent: React.SetStateAction<string>) => {
    setActiveComponent(prevComponent);
    onPrev();
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case "Accounts":
        return <Accounts onNext={() => handleNext("Accounts2")} />;
      case "Accounts2":
        return (
          <Accounts2
            onNext={() => handleNext("Accounts3")}
            onPrev={() => handlePrev("Accounts")}
          />
        );
      case "Accounts3":
        return (
          <Accounts3
            onNext={() => handleNext("Accounts4")}
            onPrev={() => handlePrev("Accounts2")}
          />
        );
      case "Accounts4":
        return (
          <Accounts4
            onNext={() => handleNext("Accounts5")}
            onPrev={() => handlePrev("Accounts3")}
          />
        );
      case "Accounts5":
        return (
          <Accounts5
            onNext={() => handleNext("Accounts6")}
            onPrev={() => handlePrev("Accounts4")}
          />
        );
      case "Accounts6":
        return (
          <Accounts6
            onNext={() => handleNext("Accounts7")}
            onPrev={() => handlePrev("Accounts5")}
          />
        );
      case "Accounts7":
        return (
          <Accounts7
            onNext={() => handleNext("Accounts8")}
            onPrev={() => handlePrev("Accounts6")}
          />
        );
      case "Accounts8":
        return (
          <Accounts8
            onFinish={onFinish}
            onPrev={() => handlePrev("Accounts7")}
          />
        );
      default:
        return <Accounts onNext={() => handleNext("Accounts2")} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default RenderComponent;
