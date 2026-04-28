import React, { useState } from 'react';
import CopyButton from '../common/CopyButton';

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
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperStandard = ({ currentStep }) => (\n  <div className="w-full">\n    <div className="flex items-center justify-between relative">\n      {steps.map((step, i) => <div key={i} className={\`w-10 h-10 rounded-full flex items-center justify-center font-semibold border-2 \${i+1<=currentStep?'bg-blue-600 border-blue-600 text-white':'bg-white border-gray-300 text-gray-400'}\`}>{i+1<currentStep?'\u2713':i+1}</div>)}\n    </div>\n  </div>\n);`} htmlCode={`<div class="stepper"><div class="step active"><span>1</span><label>Account</label></div><div class="step"><span>2</span><label>Personal</label></div></div>`} cssCode={`.stepper { display: flex; align-items: center; justify-content: space-between; position: relative; }
.step { display: flex; flex-direction: column; align-items: center; }
.step span { width: 2.5rem; height: 2.5rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; border: 2px solid #d1d5db; background: #fff; color: #9ca3af; }
.step.active span { background: #2563eb; border-color: #2563eb; color: #fff; }
.step label { margin-top: 0.5rem; font-size: 0.75rem; font-weight: 500; color: #9ca3af; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">01. Standard</span>
          <StepperStandard currentStep={currentStep} />
        </div>

        {/* 2. Progress Bar */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperProgressBar = ({ currentStep, total }) => (\n  <div className="w-full">\n    <div className="flex justify-between mb-2"><span>Step {currentStep} of {total}</span><span>{Math.round((currentStep/total)*100)}%</span></div>\n    <div className="h-2 bg-gray-200 rounded"><div className="h-full bg-indigo-600 rounded" style={{width:\`\${(currentStep/total)*100}%\`}} /></div>\n  </div>\n);`} htmlCode={`<div class="prog-stepper"><div class="header"><span>Step 2 of 4</span><span>50%</span></div><div class="bar"><div class="fill" style="width:50%"></div></div></div>`} cssCode={`.prog-stepper .header { display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-size: 0.75rem; font-weight: 700; }
.prog-stepper .bar { height: 0.5rem; background: #e5e7eb; border-radius: 9999px; overflow: hidden; }
.prog-stepper .fill { height: 100%; background: #4f46e5; border-radius: 9999px; transition: width 0.5s; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">02. Continuous Bar</span>
          <StepperProgressBar currentStep={currentStep} />
        </div>

        {/* 3. Vertical */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperVertical = ({ currentStep }) => (\n  <div className="flex flex-col">{steps.map((step,i) => (\n    <div key={i} className="flex gap-4">\n      <div className="flex flex-col items-center">\n        <div className={\`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 \${i+1<=currentStep?'border-emerald-500 bg-emerald-500 text-white':'border-gray-300 bg-white text-gray-500'}\`}>{i+1<currentStep?'\u2713':i+1}</div>\n        {i<steps.length-1 && <div className="w-0.5 h-12 my-1 bg-gray-200" />}\n      </div>\n      <div><h4 className="font-bold">{step}</h4></div>\n    </div>\n  ))}</div>\n);`} htmlCode={`<div class="v-stepper"><div class="v-step"><div class="circle active">1</div><div class="line"></div><div><strong>Account</strong></div></div></div>`} cssCode={`.v-stepper { display: flex; flex-direction: column; }
.v-step { display: flex; gap: 1rem; }
.v-step .circle { width: 2rem; height: 2rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.875rem; font-weight: 700; border: 2px solid #d1d5db; background: #fff; color: #6b7280; }
.v-step .circle.active { border-color: #10b981; background: #10b981; color: #fff; }
.v-step .line { width: 2px; height: 3rem; margin: 0.25rem auto; background: #e5e7eb; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">03. Vertical Timeline</span>
          <StepperVertical currentStep={currentStep} />
        </div>

        {/* 4. Breadcrumb */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperBreadcrumb = ({ currentStep }) => (\n  <div className="w-full flex rounded-lg overflow-hidden border border-gray-200">{steps.map((step,i) => (\n    <div key={i} className={\`relative flex-1 flex items-center justify-center py-3 text-sm font-medium \${i+1===currentStep?'bg-blue-600 text-white':i+1<currentStep?'bg-blue-50 text-blue-600':'bg-white text-gray-500'}\`}>{step}</div>\n  ))}</div>\n);`} htmlCode={`<div class="breadcrumb-stepper"><div class="active">Account</div><div>Personal</div><div>Plan</div></div>`} cssCode={`.breadcrumb-stepper { display: flex; border-radius: 0.5rem; overflow: hidden; border: 1px solid #e5e7eb; }
.breadcrumb-stepper div { flex: 1; display: flex; align-items: center; justify-content: center; padding: 0.75rem; font-size: 0.875rem; font-weight: 500; background: #fff; color: #6b7280; }
.breadcrumb-stepper div.active { background: #2563eb; color: #fff; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">04. Breadcrumb</span>
          <StepperBreadcrumb currentStep={currentStep} />
        </div>

        {/* 5. Glass */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperGlass = ({ currentStep }) => (\n  <div className="w-full px-4 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">\n    <div className="flex justify-between items-center">{steps.map((step,i) => (\n      <div key={i} className="flex flex-col items-center gap-2">\n        <div className={\`w-4 h-4 rounded-full border-2 \${i+1<=currentStep?'bg-white border-white scale-125':'bg-transparent border-white/40'}\`} />\n        <span className={\`text-xs font-medium \${i+1===currentStep?'text-white':'text-white/50'}\`}>{step}</span>\n      </div>\n    ))}</div>\n  </div>\n);`} htmlCode={`<div class="glass-stepper"><div class="dot active"></div><label>Account</label></div>`} cssCode={`.glass-stepper { padding: 1rem; border-radius: 1rem; background: rgba(255,255,255,0.1); backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.2); display: flex; justify-content: space-between; align-items: center; }
.glass-stepper .dot { width: 1rem; height: 1rem; border-radius: 50%; border: 2px solid rgba(255,255,255,0.4); }
.glass-stepper .dot.active { background: #fff; border-color: #fff; box-shadow: 0 0 10px rgba(255,255,255,0.5); transform: scale(1.25); }`} /></div>
          <span className="text-xs font-bold text-white/60 uppercase tracking-widest">05. Glassmorphism</span>
          <StepperGlass currentStep={currentStep} />
        </div>

        {/* 6. Cyberpunk */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-gray-950 relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperCyberpunk = ({ currentStep }) => (\n  <div className="w-full bg-gray-900 p-6 rounded-xl border border-gray-800">\n    <div className="flex items-center gap-2 mb-4">{steps.map((_,i) => <div key={i} className={\`h-1 flex-1 rounded-sm \${i+1===currentStep?'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]':i+1<currentStep?'bg-cyan-800':'bg-gray-700'}\`} />)}</div>\n    <span className="text-cyan-400 font-bold font-mono">{steps[currentStep-1].toUpperCase()}</span>\n  </div>\n);`} htmlCode={`<div class="cyber-stepper"><div class="bars"><div class="active"></div><div></div></div><span>ACCOUNT</span></div>`} cssCode={`.cyber-stepper { background: #111827; padding: 1.5rem; border-radius: 0.75rem; border: 1px solid #1f2937; }
.cyber-stepper .bars { display: flex; gap: 0.5rem; margin-bottom: 1rem; }
.cyber-stepper .bars div { flex: 1; height: 0.25rem; background: #374151; border-radius: 2px; }
.cyber-stepper .bars div.active { background: #22d3ee; box-shadow: 0 0 10px rgba(34,211,238,0.8); }
.cyber-stepper span { color: #22d3ee; font-weight: 700; font-family: monospace; letter-spacing: 0.1em; }`} /></div>
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">06. Cyberpunk</span>
          <StepperCyberpunk currentStep={currentStep} />
        </div>

        {/* 7. Minimal Dots */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperMinimal = ({ currentStep }) => (\n  <div className="w-full flex flex-col items-center">\n    <div className="flex gap-3 mb-4">{steps.map((_,i) => <div key={i} className={\`h-2.5 rounded-full \${i+1===currentStep?'w-8 bg-black':'w-2.5 bg-gray-300'}\`} />)}</div>\n    <h3>{steps[currentStep-1]}</h3>\n  </div>\n);`} htmlCode={`<div class="dot-stepper"><div class="active"></div><div></div><div></div><div></div></div>`} cssCode={`.dot-stepper { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1rem; }
.dot-stepper div { height: 0.625rem; width: 0.625rem; border-radius: 9999px; background: #d1d5db; transition: all 0.5s ease-in-out; }
.dot-stepper div.active { width: 2rem; background: #000; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">07. Minimal Dots</span>
          <StepperMinimal currentStep={currentStep} />
        </div>

        {/* 8. Brutalist */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperBrutalist = ({ currentStep }) => (\n  <div className="w-full border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-4">\n    <div className="flex justify-between border-b-2 border-black pb-2 mb-4"><span className="font-black uppercase">Step {currentStep}</span></div>\n    <div className="flex gap-2">{steps.map((_,i) => <div key={i} className={\`flex-1 h-8 border-2 border-black \${i+1<=currentStep?'bg-yellow-400':'bg-white'}\`} />)}</div>\n  </div>\n);`} htmlCode={`<div class="brutal-stepper"><div class="header"><span>STEP 2</span></div><div class="blocks"><div class="filled"></div><div class="filled"></div><div></div></div></div>`} cssCode={`.brutal-stepper { border: 2px solid #000; background: #fff; box-shadow: 4px 4px 0 #000; padding: 1rem; }
.brutal-stepper .header { display: flex; justify-content: space-between; border-bottom: 2px solid #000; padding-bottom: 0.5rem; margin-bottom: 1rem; font-weight: 900; text-transform: uppercase; }
.blocks { display: flex; gap: 0.5rem; }
.blocks div { flex: 1; height: 2rem; border: 2px solid #000; background: #fff; }
.blocks div.filled { background: #facc15; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">08. Brutalist</span>
          <StepperBrutalist currentStep={currentStep} />
        </div>

        {/* 9. Neumorphic */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg bg-[#e0e5ec] relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperNeumorphic = ({ currentStep }) => (\n  <div className="w-full flex justify-between px-4">{steps.map((step,i) => (\n    <div key={i} className="flex flex-col items-center gap-3">\n      <div className={\`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm \${i+1===currentStep?'bg-[#e0e5ec] text-blue-600 shadow-[inset_3px_3px_6px_#bebebe,inset_-3px_-3px_6px_#ffffff]':'bg-[#e0e5ec] text-gray-400 shadow-[5px_5px_10px_#bebebe,-5px_-5px_10px_#ffffff]'}\`}>{i+1}</div>\n    </div>\n  ))}</div>\n);`} htmlCode={`<div class="neu-stepper"><div class="active">1</div><div>2</div><div>3</div></div>`} cssCode={`.neu-stepper { display: flex; justify-content: space-between; padding: 0 1rem; }
.neu-stepper div { width: 3rem; height: 3rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.875rem; background: #e0e5ec; color: #9ca3af; box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff; }
.neu-stepper div.active { color: #2563eb; box-shadow: inset 3px 3px 6px #bebebe, inset -3px -3px 6px #ffffff; }`} /></div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">09. Neumorphic</span>
          <StepperNeumorphic currentStep={currentStep} />
        </div>

        {/* 10. Card Grid */}
        <div className="w-full flex flex-col gap-4 box-shadow p-4 rounded-lg relative group/step">
          <div className="absolute top-2 right-2 z-40 opacity-0 group-hover/step:opacity-100 transition-opacity"><CopyButton jsxCode={`const StepperCard = ({ currentStep }) => (\n  <div className="w-full grid grid-cols-4 gap-2">{steps.map((step,i) => (\n    <div key={i} className={\`flex flex-col items-center justify-center p-3 rounded-xl border \${i+1===currentStep?'bg-white border-indigo-100 shadow-lg scale-105':'bg-gray-50 border-transparent text-gray-400 opacity-70'}\`}>\n      <div className="text-xs font-bold mb-1">STEP {i+1}</div>\n      <div className="text-sm font-medium">{step}</div>\n    </div>\n  ))}</div>\n);`} htmlCode={`<div class="card-stepper"><div class="card active"><span>STEP 1</span><span>Account</span></div><div class="card"><span>STEP 2</span><span>Personal</span></div></div>`} cssCode={`.card-stepper { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.5rem; }
.card { display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0.75rem; border-radius: 0.75rem; background: #f9fafb; border: 1px solid transparent; color: #9ca3af; opacity: 0.7; }
.card.active { background: #fff; border-color: #e0e7ff; box-shadow: 0 10px 15px rgba(0,0,0,0.1); opacity: 1; transform: scale(1.05); }
.card span:first-child { font-size: 0.75rem; font-weight: 700; margin-bottom: 0.25rem; }
.card.active span:first-child { color: #4f46e5; }
.card span:last-child { font-size: 0.875rem; font-weight: 500; }`} /></div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">10. Floating Cards</span>
          <StepperCard currentStep={currentStep} />
        </div>

      </div>
    </div>
  );
};

export default Steppers;