declare global {
  type TPersonalityType = 'T' | 'P' | 'C' | 'E' | 'L' | 'S' | 'A' | 'M' | 'D';
  type TButtonVariant = 'text' | 'contained' | 'outlined' | 'fab';

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

  interface IFit {
    koreaName: string;
    name: string;
    type: string;
    reason: string;
    fpti: string;
  }

  interface ITrainingItem {
    name: string;
    description: string;
  }

  interface ITraining {
    strengthen: ITrainingItem[];
    supplement: ITrainingItem[];
  }

  interface IDinosaurCard {
    id: string;
    name: string;
    koreaName: string;
    type: string;
    alias: string;
    summary: string;
    description: string;
    roleWithinTeam: string;
    recommendedTactics: string;
    roleModel: string;
    fit: IFit[];
    doNotFit: IFit[];
    training: ITraining;
    compatibility: string;
    fpti: string;
  }
}
export {};
