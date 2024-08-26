type QuestionProps = {
  questionText: string;
  onAnswer: (answer: boolean) => void;
};

const Question = ({ questionText, onAnswer }: QuestionProps) => {
  return (
    <div className='p-4'>
      <h3 className='text-lg font-bold mb-4'>{questionText}</h3>
      <div>
        <button onClick={() => onAnswer(true)} className='bg-blue-500 text-white py-2 px-4 rounded mr-2'>
          Yes
        </button>
        <button onClick={() => onAnswer(false)} className='bg-red-500 text-white py-2 px-4 rounded'>
          No
        </button>
      </div>
    </div>
  );
};

export default Question;
