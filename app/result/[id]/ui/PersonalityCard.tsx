import React from 'react';

import TypeComparisonBar from '@/app/result/[id]/ui/TypeComparisonBar';
import ImageBox from '@/app/ui/ImageBox';

interface IPersonalityCardProps {
  fpti: string | undefined;
  type: string | undefined;
  result: { [group: string]: IScaleValue };
}

const PersonalityCard = ({ fpti, type, result }: IPersonalityCardProps) => {
  return (
    <div className='bg-white w-[90%] p-3 border border-text-placeholder rounded-xl text-text-default'>
      <div className='flex flex-col items-center bg-background py-3 gap-3 w-full border border-text-placeholder rounded-xl'>
        <div className='flex justify-center bg-inherit w-full align-middle'>
          <ImageBox topTypes={fpti as string} width={240} height={240} />
        </div>
        <h3 className='flex flex-col items-center gap-1 text-text-basic m-0'>
          <span className='w-40 h-7 bg-primary text-center rounded-lg font-medium text-lg border border-black'>
            {fpti}
          </span>
          <span className='text-lg'>{type}</span>
        </h3>
        {result &&
          Object.entries(result).map(([group, values]) => {
            // values가 유효한지 확인
            if (!values || Object.entries(values).length < 2) {
              return null; // values가 유효하지 않으면 렌더링하지 않음
            }

            const [type1, percentage1] = Object.entries(values)[0];
            const [type2, percentage2] = Object.entries(values)[1];

            const midLabel = values.M ? 'M' : undefined;
            const isReverse = percentage2 > percentage1;
            return (
              <React.Fragment key={group}>
                <TypeComparisonBar
                  startLabel={type1}
                  midLabel={midLabel}
                  endLabel={type2}
                  percentage={Math.max(percentage1, percentage2)}
                  isReverse={isReverse}
                />
              </React.Fragment>
            );
          })}
        {/* <p className='text-xs text-text-default text-end mt-1'>FPTI / 나의 풋살타입은? / onthedot</p> */}
      </div>
    </div>
  );
};

export default PersonalityCard;
