import { useEffect, useState } from 'react';

import OptionSelector from '@/question/ui/OptionSelector';
import Progress from '@/question/ui/ProgressBar';

interface IQuestionContainerProps {
  questionId: number;
  questionText: string;
  percentage: number;
  options: { type: string; text: string }[];
  scale: { min: string; max: string };
  isFirstQuestion: boolean;
  selectedValue: IScaleValue | null;
  onPrevious: () => void;
  onAnswer: (questionId: number, scaleValue: IScaleValue) => void;
}

const Question = ({
  questionId,
  questionText,
  percentage,
  scale,
  isFirstQuestion,
  options,
  selectedValue,
  onPrevious,
  onAnswer,
}: IQuestionContainerProps) => {
  const [currentSelectedValue, setCurrentSelectedValue] = useState<number | null>(null);
  const isNotSelected = currentSelectedValue === null;

  const handleSelect = (value: number) => {
    setCurrentSelectedValue(value);
  };

  const handleSubmit = () => {
    if (!isNotSelected) {
      const scaleValue = {
        [scale.min]: 100 - currentSelectedValue,
        [scale.max]: currentSelectedValue,
      };
      onAnswer(questionId, scaleValue);
    }
  };

  useEffect(() => {
    if (selectedValue) {
      const value = selectedValue[scale.max];
      setCurrentSelectedValue(value);
    } else {
      setCurrentSelectedValue(null);
    }
  }, [questionId, selectedValue, scale.max]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !isNotSelected) {
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isNotSelected, currentSelectedValue]);

  return (
    <div className='w-full h-full flex flex-col justify-between bg-green-300 text-white shadow-md overflow-y-auto'>
      <Progress percentage={percentage} />
      <div className='flex justify-center items-center p-4 m-6 min-h-[240px] bg-green-500 text-gray-800 border border-gray-800 rounded-lg text-center'>
        <h3 className='text-xl font-normal mb-4 select-none'>{questionText}</h3>
      </div>
      <div className='flex flex-col justify-center mx-6'>
        <OptionSelector selectedValue={currentSelectedValue} onSelect={handleSelect} options={options} />
      </div>
      <div className={`flex ${isFirstQuestion ? 'justify-end' : 'justify-between'} m-5`}>
        {!isFirstQuestion && (
          <button
            onClick={onPrevious}
            className='m-4 bg-gray-200 bg-opacity-80 text-black px-4 py-3 rounded-md text-lg font-semibold cursor-pointer hover:bg-opacity-90 hover:text-white'
          >
            이전
          </button>
        )}
        <button
          onClick={handleSubmit}
          disabled={isNotSelected}
          className={`m-4 px-4 py-3 rounded-md text-lg font-semibold cursor-pointer ${isNotSelected ? 'bg-gray-200 text-gray-500' : 'bg-gray-200 text-black hover:bg-opacity-90 hover:text-white'}`}
        >
          다음
        </button>
      </div>
    </div>
  );
};

export default Question;
