import React from "react";
import "./components/css/CollectionProgress.css";
import StepProgressBar from "react-step-progress";
// import the stylesheet
//import "react-step-progress/dist/index.css";

export default function CollectionProgress() {
  const step1Content = <h1></h1>;
  const step2Content = <h1></h1>;
  const step3Content = <h1></h1>;

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="CollectionStatus-Area">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: "Submitted",
            name: "Submitted",
            content: step1Content
          },
          {
            label: "In Progress",
            name: "In Progress",
            content: step2Content
          },
          {
            label: "Collection Complete",
            name: "Collection Complete",
            content: step3Content,
            validator: step2Validator
          },

        ]}
      />
    </div>
  );
}
