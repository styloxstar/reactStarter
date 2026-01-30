import React, { useState } from 'react';

// --- Shared Data ---
const stepsData = ['Account', 'Personal', 'Plan', 'Payment'];

// --- 1. The Standard (Ring & Line) ---
const StepperStandard = ({ currentStep }) => (
  <div className="w-full">
    <div className="flex items-center justify-between relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
      <div 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 -z-10 transition-all duration-500 ease-out"
        style={{ width: `${((currentStep - 1) / (stepsData.length - 1)) * 100}%` }}
      ></div>
      
      {stepsData.map((step, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;

        return (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold border-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg scale-110' 
                  : isCompleted 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
              }`}
            >
              {isCompleted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              ) : (
                stepNum
              )}
            </div>
            <span className={`mt-2 text-xs font-medium transition-colors duration-300 ${isActive || isCompleted ? 'text-gray-800' : 'text-gray-400'}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

// --- 2. The Progress Bar (Continuous) ---
export const StepperProgressBar = ({ currentStep }) => (
  <div className="w-full">
    <div className="flex justify-between mb-2">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
        Step {currentStep} of {stepsData.length}
      </span>
      <span className="text-xs font-bold text-indigo-600">
        {Math.round((currentStep / stepsData.length) * 100)}% Completed
      </span>
    </div>
    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
      <div 
        style={{ width: `${(currentStep / stepsData.length) * 100}%` }} 
        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-600 transition-all duration-500 ease-out"
      ></div>
    </div>
    <div className="grid grid-cols-4 text-center text-xs text-gray-400">
      {stepsData.map((step, i) => (
        <div key={i} className={`${i + 1 <= currentStep ? 'text-indigo-600 font-bold' : ''}`}>
          {step}
        </div>
      ))}
    </div>
  </div>
);

// --- 3. The Vertical Timeline ---
export const StepperVertical = ({ currentStep }) => (
  <div className="flex flex-col gap-0">
    {stepsData.map((step, i) => {
      const stepNum = i + 1;
      const isActive = stepNum === currentStep;
      const isCompleted = stepNum < currentStep;
      const isLast = i === stepsData.length - 1;

      return (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors duration-300 ${
              isActive || isCompleted ? 'border-emerald-500 bg-emerald-500 text-white' : 'border-gray-300 bg-white text-gray-500'
            }`}>
              {isCompleted ? '✓' : stepNum}
            </div>
            {!isLast && (
              <div className={`w-0.5 h-12 my-1 transition-colors duration-300 ${isCompleted ? 'bg-emerald-500' : 'bg-gray-200'}`}></div>
            )}
          </div>
          <div className={`pt-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`}>
            <h4 className="font-bold text-gray-900">{step}</h4>
            <p className="text-xs text-gray-500">Details about {step.toLowerCase()}.</p>
          </div>
        </div>
      );
    })}
  </div>
);

// --- 4. The Breadcrumb Arrow ---
export const StepperBreadcrumb = ({ currentStep }) => (
  <div className="w-full flex rounded-lg overflow-hidden border border-gray-200">
    {stepsData.map((step, i) => {
      const stepNum = i + 1;
      const isActive = stepNum === currentStep;
      const isCompleted = stepNum < currentStep;

      return (
        <div 
          key={i} 
          className={`relative flex-1 flex items-center justify-center py-3 text-sm font-medium transition-colors duration-300
          ${isActive ? 'bg-blue-600 text-white' : isCompleted ? 'bg-blue-50 text-blue-600' : 'bg-white text-gray-500 hover:bg-gray-50'}
          `}
        >
          {/* Arrow effect using borders or clip-path is complex, using simple separators here for cleaner code */}
          <span className="z-10 flex items-center gap-2">
            {isCompleted && <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>}
            {step}
          </span>
          
          {/* Chevron Separator (Visual Hack) */}
          {i !== stepsData.length - 1 && (
             <div className={`absolute top-0 bottom-0 right-0 w-4 transform translate-x-2 skew-x-[20deg] z-20 border-r border-white/50 ${isActive ? 'bg-blue-600' : isCompleted ? 'bg-blue-50' : 'bg-white'}`}></div>
          )}
        </div>
      );
    })}
  </div>
);

// --- 5. The Glassmorphism Stepper ---
// *Best on colorful background*
export const StepperGlass = ({ currentStep }) => (
  <div className="w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
    <div className="flex justify-between items-center relative">
       {/* Track */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-white/10 rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-0 h-1 bg-white/80 rounded-full -z-10 transition-all duration-500" style={{ width: `${((currentStep - 1) / (stepsData.length - 1)) * 100}%` }}></div>

      {stepsData.map((step, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isCompleted = stepNum < currentStep;
        return (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              isActive || isCompleted 
                ? 'bg-white border-white shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-125' 
                : 'bg-transparent border-white/40'
            }`}></div>
            <span className={`text-xs font-medium transition-colors ${isActive ? 'text-white' : 'text-white/50'}`}>
              {step}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

// --- 6. The Cyberpunk (Neon) ---
export const StepperCyberpunk = ({ currentStep }) => (
  <div className="w-full bg-gray-900 p-6 rounded-xl border border-gray-800">
    <div className="flex items-center gap-2 mb-4">
      {stepsData.map((step, i) => {
         const stepNum = i + 1;
         const isActive = stepNum === currentStep;
         const isCompleted = stepNum < currentStep;
         return (
           <div key={i} className={`h-1 flex-1 rounded-sm transition-all duration-300 ${
             isActive ? 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]' : isCompleted ? 'bg-cyan-800' : 'bg-gray-700'
           }`}></div>
         )
      })}
    </div>
    <div className="flex justify-between items-end font-mono">
       <div>
         <span className="text-gray-500 text-xs block mb-1">CURRENT_PHASE</span>
         <span className="text-cyan-400 font-bold text-lg tracking-widest">{stepsData[currentStep - 1].toUpperCase()}</span>
       </div>
       <div className="text-right">
         <span className="text-gray-500 text-xs">PROGRESS</span>
         <div className="text-white font-bold">{Math.round(((currentStep - 1) / (stepsData.length)) * 100)}%</div>
       </div>
    </div>
  </div>
);

// --- 7. The Minimal Dots ---
export const StepperMinimal = ({ currentStep }) => (
  <div className="w-full flex flex-col items-center">
    <div className="flex gap-3 mb-4">
      {stepsData.map((_, i) => {
        const stepNum = i + 1;
        return (
          <div 
            key={i} 
            className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
              stepNum === currentStep 
                ? 'w-8 bg-black' 
                : 'w-2.5 bg-gray-300'
            }`}
          ></div>
        );
      })}
    </div>
    <div className="text-center animate-in fade-in duration-300 key={currentStep}">
      <h3 className="text-lg font-bold text-gray-900">{stepsData[currentStep - 1]}</h3>
      <p className="text-sm text-gray-500">Description for step {currentStep}</p>
    </div>
  </div>
);

// --- 8. The Brutalist (Retro) ---
export const StepperBrutalist = ({ currentStep }) => (
  <div className="w-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">
    <div className="flex justify-between border-b-2 border-black pb-2 mb-4">
      <span className="font-black uppercase">Step {currentStep}</span>
      <span className="font-bold">{stepsData[currentStep - 1]}</span>
    </div>
    <div className="flex gap-2">
      {stepsData.map((_, i) => {
        const stepNum = i + 1;
        return (
          <div 
            key={i} 
            className={`flex-1 h-8 border-2 border-black transition-colors duration-0 ${
              stepNum <= currentStep ? 'bg-yellow-400' : 'bg-white pattern-dots'
            }`}
          ></div>
        );
      })}
    </div>
  </div>
);

// --- 9. The Neumorphic (Soft UI) ---
export const StepperNeumorphic = ({ currentStep }) => (
  <div className="w-full flex justify-between px-4">
    {stepsData.map((step, i) => {
      const stepNum = i + 1;
      const isActive = stepNum === currentStep;
      
      return (
        <div key={i} className="flex flex-col items-center gap-3">
          <div 
            className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
              isActive 
                ? 'bg-[#e0e5ec] text-blue-600 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]' 
                : 'bg-[#e0e5ec] text-gray-400 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'
            }`}
          >
            {stepNum}
          </div>
          {isActive && (
            <span className="text-xs font-bold text-gray-500 animate-in fade-in slide-in-from-top-2">{step}</span>
          )}
        </div>
      );
    })}
  </div>
);

// --- 10. The Floating Card (Shadow Pop) ---
export const StepperCard = ({ currentStep }) => (
  <div className="w-full grid grid-cols-4 gap-2">
    {stepsData.map((step, i) => {
      const stepNum = i + 1;
      const isActive = stepNum === currentStep;
      const isCompleted = stepNum < currentStep;

      return (
        <div 
          key={i} 
          className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 ${
            isActive 
              ? 'bg-white border-indigo-100 shadow-lg scale-105 z-10' 
              : isCompleted 
                ? 'bg-indigo-50 border-transparent text-indigo-600' 
                : 'bg-gray-50 border-transparent text-gray-400 opacity-70'
          }`}
        >
          <div className={`text-xs font-bold mb-1 ${isActive ? 'text-indigo-600' : 'text-inherit'}`}>
             STEP {stepNum}
          </div>
          <div className={`text-sm font-medium ${isActive ? 'text-gray-900' : 'text-inherit'}`}>
            {step}
          </div>
        </div>
      );
    })}
  </div>
);


// --- Main Gallery ---
const Steppers = () => {
  const [currentStep, setCurrentStep] = useState(2);
  const totalSteps = stepsData.length;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="container box-shadow overflow-y-auto bg-slate-50 p-6 md:p-12 font-sans pb-40">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">Modern Steppers</h1>
        <p className="text-slate-500 mb-8">Change the progress below to see animations across all styles.</p>
        
        {/* Global Controls */}
        <div className="inline-flex items-center gap-4 bg-white p-2 rounded-full shadow-lg border border-gray-100">
          <button 
            onClick={prevStep} 
            disabled={currentStep === 1}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center disabled:opacity-50"
          >
            ←
          </button>
          <span className="font-mono font-bold w-24 text-center">Step {currentStep} / {totalSteps}</span>
          <button 
            onClick={nextStep} 
            disabled={currentStep === totalSteps}
            className="w-10 h-10 rounded-full bg-black text-white hover:bg-gray-800 flex items-center justify-center disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-6xl mx-auto items-center">
        
        {/* 1. Standard */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard</span>
          <StepperStandard currentStep={currentStep} />
        </div>

        {/* 2. Progress Bar */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Continuous Bar</span>
          <StepperProgressBar currentStep={currentStep} />
        </div>

        {/* 3. Vertical */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03. Vertical Timeline</span>
          <StepperVertical currentStep={currentStep} />
        </div>

        {/* 4. Breadcrumb */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Breadcrumb</span>
          <StepperBreadcrumb currentStep={currentStep} />
        </div>

        {/* 5. Glass */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span className="text-xs font-bold text-white/60 uppercase tracking-widest">05. Glassmorphism</span>
          <StepperGlass currentStep={currentStep} />
        </div>

        {/* 6. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-gray-950">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">06. Cyberpunk</span>
          <StepperCyberpunk currentStep={currentStep} />
        </div>

        {/* 7. Minimal Dots */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Minimal Dots</span>
          <StepperMinimal currentStep={currentStep} />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Brutalist</span>
          <StepperBrutalist currentStep={currentStep} />
        </div>

        {/* 9. Neumorphic */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-[#e0e5ec]">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">09. Neumorphic</span>
          <StepperNeumorphic currentStep={currentStep} />
        </div>

        {/* 10. Card Grid */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Floating Cards</span>
          <StepperCard currentStep={currentStep} />
        </div>

      </div>
    </div>
  );
};

export default Steppers;