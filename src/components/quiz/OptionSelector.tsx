import { TextContainer, OptionText } from './Question.styles';

import CircleSelector from '@/components/quiz/CircleSelector';

interface IOptionSelectorProps {
  selectedValue: number | null;
  onSelect: (value: number) => void;
  options: { type: string; text: string }[];
}

const OptionSelector = ({ selectedValue, onSelect, options }: IOptionSelectorProps) => (
  <>
    <CircleSelector selectedValue={selectedValue} onSelect={onSelect} />
    <TextContainer>
      <OptionText>{options[0].text}</OptionText>
      <OptionText>{options[1].text}</OptionText>
    </TextContainer>
  </>
);

export default OptionSelector;
