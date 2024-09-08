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
    max: TPersonalityType; // 성향의 최대 값 (예: 'P' for Playmaker)
  }

  interface IQuestion {
    id: number; // 질문의 고유 ID
    category: string; // 질문이 속한 카테고리 (예: 'Dribbler vs. Playmaker')
    situation: string; // 질문의 상황 설명
    options: IOption[]; // 선택지 목록
    scale: IScale; // 성향의 양 끝단을 나타내는 값
  }

  interface IPersonalityTest {
    questions: IQuestion[]; // 전체 질문 목록
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
