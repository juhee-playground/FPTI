import { PERSONALITY_TYPES } from '@/constants/PersonalityType';

interface ITypeComparisonBarProps {
  startLabel: string;
  midLabel?: string;
  endLabel: string;
  percentage: number;
  isReverse: boolean;
}

const getPersonalityName = (id: string) => {
  const item = PERSONALITY_TYPES[id];
  return item ? item.type : 'Unknown';
};

const TypeComparisonBar = ({ startLabel, midLabel, endLabel, percentage, isReverse }: ITypeComparisonBarProps) => {
  const mainLabel = midLabel || (isReverse ? endLabel : startLabel);

  const finalStartLabel = midLabel || startLabel;
  const isStartLabelMain = finalStartLabel === mainLabel;
  const isEndLabelMain = endLabel === mainLabel;

  const startTypeInfo = getPersonalityName(finalStartLabel);
  const endTypeInfo = getPersonalityName(endLabel);

  return (
    <div className='flex items-center justify-between w-full p-4 bg-white rounded-md shadow-lg'>
      <div className={`flex flex-col items-center ${isReverse ? 'order-2' : ''}`}>
        <p className={`text-lg font-bold ${isStartLabelMain ? 'text-primary' : 'text-gray-700'}`}>{finalStartLabel}</p>
        <span className='text-sm text-gray-500'>{startTypeInfo}</span>
      </div>

      <div className={`relative flex-grow mx-4 ${isReverse ? 'flex-row-reverse' : ''}`}>
        <div className='w-full h-4 bg-gray-200 rounded-full'>
          <div
            className={`h-4 rounded-full ${isReverse ? 'bg-secondary' : 'bg-primary'}`}
            style={{ width: `${percentage}%` }}
          >
            <span
              className={`absolute top-0 text-white text-xs font-bold ${isReverse ? 'right-1' : 'left-1'}`}
              style={{ width: `${percentage}%` }}
            >
              {`${Math.ceil(percentage)}%`}
            </span>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <p className={`text-lg font-bold ${isEndLabelMain ? 'text-primary' : 'text-gray-700'}`}>{endLabel}</p>
        <span className='text-sm text-gray-500'>{endTypeInfo}</span>
      </div>
    </div>
  );
};

export default TypeComparisonBar;
