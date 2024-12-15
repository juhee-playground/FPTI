import { PERSONALITY_TYPES } from '@/constants/PersonalityType';
import { getColorByType } from '@/utils/color';

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

  const startTypeText = isReverse ? endLabel : startLabel;
  const endTypeText = isReverse ? startLabel : endLabel;

  return (
    <section className='flex justify-center items-center w-full gap-2 px-2'>
      <div className={`flex flex-row-reverse items-center w-[190px] gap-1`}>
        <h2
          className={`flex justify-center items-center m-0 h-[20px] w-[20px] rounded-full border border-basic text-xs text-text-white`}
          style={{
            backgroundColor: isStartLabelMain ? getColorByType(startTypeText) : 'inherit',
            color: isStartLabelMain ? 'black' : 'white',
          }}
        >
          {finalStartLabel}
        </h2>
        <p className='text-xs text-text-white'>{startTypeInfo}</p>
      </div>

      <div
        className={`flex items-center w-full h-5 bg-primary-darken rounded-xl ${isReverse ? 'flex-row-reverse text-right' : 'row text-left'}`}
      >
        <div
          className={`h-5 flex items-center px-3 transition-all duration-300 ${
            isReverse ? 'justify-start' : 'justify-end'
          } rounded-lg border border-darken`}
          style={{
            width: `${percentage}%`,
            backgroundColor: isStartLabelMain ? getColorByType(startTypeText) : getColorByType(endTypeText),
          }}
        >
          <span className={`text-xs text-text-default`} style={{ width: `${percentage}%` }}>
            {`${Math.ceil(percentage)}%`}
          </span>
        </div>
      </div>

      <div className='flex flex-row items-center w-[190px] gap-1'>
        <h2
          className={`flex justify-center items-center m-0 h-[20px] w-[20px] rounded-full border border-basic text-xs text-text-white`}
          style={{
            backgroundColor: isEndLabelMain ? getColorByType(endTypeText) : 'inherit',
            color: isEndLabelMain ? 'black' : 'white',
          }}
        >
          {endLabel}
        </h2>
        <p className='text-xs text-text-white'>{endTypeInfo}</p>
      </div>
    </section>
  );
};

export default TypeComparisonBar;
