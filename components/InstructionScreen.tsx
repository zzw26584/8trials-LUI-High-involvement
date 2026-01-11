
import React from 'react';

interface InstructionScreenProps {
  onContinue: () => void;
}

const InstructionScreen: React.FC<InstructionScreenProps> = ({ onContinue }) => {
  return (
    <div className="max-w-2xl w-full p-10 bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-white/50 animate-in fade-in zoom-in duration-500 text-center">
      <div className="mb-8">
        <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-black text-gray-900 mb-6">实验注意事项</h2>
        
        <div className="text-left bg-gray-50/50 p-8 rounded-3xl border border-gray-100 leading-relaxed text-gray-700 text-lg">
          <p className="mb-4">
            这些事情是你<span className="text-blue-600 font-black">生活中会遇到的比较重要的事情</span>，
            <span className="text-blue-600 font-black">对你生活影响比较大</span>。
          </p>
          <p>
            请尽可能代入真实生活，根据提示条件，做出<span className="text-blue-600 font-black">符合你日常生活的选择</span>。
          </p>
        </div>
      </div>

      <button 
        onClick={onContinue}
        className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-700 transition-all active:scale-[0.98] shadow-xl shadow-blue-200 group"
      >
        <span className="flex items-center justify-center gap-2">
          我已理解，开始实验
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </button>

      <div className="mt-8">
        <span className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.3em]">
          Subjective Immersion Protocol
        </span>
      </div>
    </div>
  );
};

export default InstructionScreen;
