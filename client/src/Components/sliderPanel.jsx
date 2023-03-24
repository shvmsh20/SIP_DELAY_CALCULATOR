import React from "react";
import SliderArea from "../../src/Components/sliders";

function SliderPanel(props) {
  return (
    <div class="leftContainer">
      <SliderArea
        index={0}
        type = "monthlyInvestment"
        min={500}
        max={100000}
        steps={50}
        value={props.monthlyInvestment}
        onSliderChange={props.onSliderChange}
        
      />
      <SliderArea
        index={1}
        type = "investmentPeriod"
        min={1}
        max={30}
        steps={1}
        value={props.investmentPeriod}
        onSliderChange={props.onSliderChange}
      />
      <SliderArea
        index={2}
        type = "rateOfReturn"
        min={1}
        max={30}
        steps={0.1}
        value={props.rateOfReturn}
        onSliderChange={props.onSliderChange}
      />
      <SliderArea
        index={3}
        type = "delay"
        min={1}
        max={120}
        steps={1}
        value={props.delay}
        onSliderChange={props.onSliderChange}
      />
    </div>
  );
}

export default SliderPanel;
