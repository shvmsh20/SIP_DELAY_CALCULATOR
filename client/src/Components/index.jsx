import React, { useState, useEffect } from "react";
import axios from "axios";
import SliderPanel from "../../src/Components/sliderPanel";
import GraphArea from "./graphArea";
import ErrorPage from "./errorPage";

function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [rateOfReturn, setRateOfReturn] = useState(1);
  const [delay, setDelay] = useState(1);
  const [graphData, setGraphData] = useState({});
  const [err, setErr] = useState(false);

  //Set Values of monthly investment,rate of return, investmment period, delay

  function onSliderChange(type, val) {
    switch (type) {
      case "monthlyInvestment":
        setMonthlyInvestment(val);
        break;
      case "investmentPeriod":
        setInvestmentPeriod(val);
        break;
      case "rateOfReturn":
        setRateOfReturn(val);
        break;
      case "delay":
        setDelay(val);
        break;
    }
  }

  //Api calling

  useEffect(() => {
    axios
      .get("/getResults", {
        params: {
          monthlyInvestment: monthlyInvestment,
          investmentPeriod: investmentPeriod,
          rateOfReturn: rateOfReturn,
          delay: delay,
        },
      })
      .then((res) => {
        // for backend validation and showing the error page
        if (res.data && res.data.status == 0) {
          setGraphData(res.data.result && res.data.result);
          setErr(false);
        } else {
          setErr(true);
        }
      })
      .catch((error) => {
        setErr(true);
      })
  }, [monthlyInvestment, investmentPeriod, rateOfReturn, delay]);

 



  return (
    <div className="rightMain">
      <h2 className="heading"> SIP Delay Calculator</h2>

      <h5 className="info">
        It tells you how much wealth you can create by making monthly investment
      </h5>
      <div className="container">
        <SliderPanel
          monthlyInvestment={monthlyInvestment}
          investmentPeriod={investmentPeriod}
          rateOfReturn={rateOfReturn}
          delay={delay}
          onSliderChange={onSliderChange}
        />
        {err ? (
          <ErrorPage />
        ) : (
          <GraphArea
            monthlyInvestment={monthlyInvestment}
            investmentPeriod={investmentPeriod}
            graphData={graphData}
          />
        )}
      </div>
    </div>
  );
}

export default Calculator;
