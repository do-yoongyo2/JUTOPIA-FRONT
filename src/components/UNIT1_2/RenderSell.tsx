import React, { useState, useEffect } from "react";
import Sell from "./Sell";
import SellComplete from "./SellComplete";
interface RenderSellProps {
  onNext: () => void;
  onFinish: () => void;
  onPrev: () => void;
}
const RenderSell: React.FC<RenderSellProps> = ({
  onNext,
  onPrev,
  onFinish,
}) => {
  const [activeComponent, setActiveComponent] = useState("Sell");
  useEffect(() => {
    console.log("Sell props updated");
  }, [onNext, onPrev, setActiveComponent, activeComponent]);
  const handleNext = (nextComponent: React.SetStateAction<string>) => {
    setActiveComponent(nextComponent);
    onNext();
  };
  const handlePrev = (prevComponent: React.SetStateAction<string>) => {
    setActiveComponent(prevComponent);
    onPrev();
  };
  const renderComponent = () => {
    switch (activeComponent) {
      case "Sell":
        return <Sell onNext={() => handleNext("SellComplete")} />;
      case "SellComplete":
        return (
          <SellComplete onFinish={onFinish} onPrev={() => handlePrev("Sell")} />
        );
      default:
        return <Sell onNext={() => handleNext("SellComplete")} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default RenderSell;
