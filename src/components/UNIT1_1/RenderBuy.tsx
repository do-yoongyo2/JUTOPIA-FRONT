import React, { useState, useEffect } from "react";
import Buy from "./Buy";
import BuyComplete from "./BuyComplete";
interface RenderBuyProps {
  onNext: () => void;
  onFinish: () => void;
  onPrev: () => void;
}
const RenderBuy: React.FC<RenderBuyProps> = ({ onNext, onPrev, onFinish }) => {
  const [activeComponent, setActiveComponent] = useState("Buy");
  useEffect(() => {
    console.log("Buy props updated");
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
      case "Buy":
        return <Buy onNext={() => handleNext("BuyComplete")} />;
      case "BuyComplete":
        return (
          <BuyComplete onFinish={onFinish} onPrev={() => handlePrev("Buy")} />
        );
      default:
        return <Buy onNext={() => handleNext("BuyComplete")} />;
    }
  };

  return <div>{renderComponent()}</div>;
};

export default RenderBuy;
