import CircleSelector from '@/question/ui/CircleSelector';

interface IOptionSelectorProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
  options: { type: string; text: string }[];
}

const OptionSelector = ({ selectedValue, onSelect, options }: IOptionSelectorProps) => (
  <>
    <CircleSelector selectedValue={selectedValue} onSelect={onSelect} />
    <div className='flex items-start justify-between gap-4'>
      <h4 className='text-gray-800 text-lg font-normal max-w-[120px] min-h-[100px] text-left'>{options[0].text}</h4>
      <h4 className='text-gray-800 text-lg font-normal max-w-[120px] min-h-[100px] text-right'>{options[1].text}</h4>
    </div>
  </>
);

export default OptionSelector;
