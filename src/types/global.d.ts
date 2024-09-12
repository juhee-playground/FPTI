declare global {
  type TPersonalityType = 'T' | 'P' | 'C' | 'E' | 'L' | 'S' | 'A' | 'M' | 'D';
  type TButtonVariant = 'text' | 'contained' | 'outlined' | 'fab';
  type TPersonalityType = {
    id: number;
    name: string;
    description: string;
    characteristics: string[];
    strengths: string[];
    weaknesses: string[];
  };

  interface IOption {
    type: TPersonalityType;
    text: string;
  }

  interface IScale {
    min: TPersonalityType; // 성향의 최소 값 (예: 'D' for Dribbler)
    max: TPersonalityType; // 성향의 최대 값 (예: 'P' for Passer)
  }

  interface IQuestion {
    id: number;
    category: string;
    situation: string;
    options: IOption[];
    scale: IScale;
  }

  interface IPersonalityTest {
    questions: IQuestion[];
  }

  interface IScaleValue {
    [key: string]: number;
  }

  interface IAnswer {
    questionId: number;
    scale: IScaleValue;
  }

  interface IQuizResult {
    answers: IAnswer[];
  }

  interface IPersonalityTypeScores {
    [group: string]: {
      [type: string]: number;
    };
  }
}
export {};
