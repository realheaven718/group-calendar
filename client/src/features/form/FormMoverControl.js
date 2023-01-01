import React, { useState } from "react";
import { useFormContext } from "contexts/FormContext";

const FormMoverControl = () => {
  const { currentStep, totalSteps, handleNewStep } = useFormContext();

  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/* back button */}
      <button
        onClick={() => handleNewStep()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep === 1 ? "opacity-50 cursor cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      {/* next button */}
      {/* TODO: Insert some kind of condition handler to enable the button if data on a screen is valid */}
      {/* 
      // Button is still clickable, but only moves form forward if all fields are valid.
       */}
       
      {/* Disabled button that does nothing */}
      {/* <button
        className="bg-green-200 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  transition duration-200 ease-in-out"}
      >
        {currentStep === totalSteps.length - 1 ? "Submit" : "Next"}
      </button> */}

      {/* Actual button that moves you forward */}
      <button
        onClick={() => handleNewStep("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
      >
        {currentStep === totalSteps.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  );
};

export default FormMoverControl;