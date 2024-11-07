interface IFitOrNotFitType {
  type: string;
  fpti: string;
  koreaName: string;
  reason: string;
}

interface ITraining {
  name: string;
  description: string;
}

interface IContent {
  name: string;
  koreaName: string;
  type: string;
  description: string;
  roleWithinTeam: string;
  recommendedTactics: string;
  roleModel: string;
  compatibility: string;
  fit: IFitOrNotFitType[];
  doNotFit: IFitOrNotFitType[];
  training: {
    strengthen: ITraining[];
    supplement: ITraining[];
  };
}

interface ITypeDescriptionProps {
  content: IContent | null;
}

const TypeDescription = ({ content }: ITypeDescriptionProps) => {
  return (
    <article className='select-none p-5 rounded-lg max-w-2xl mx-auto'>
      <section className='flex flex-col items-start'>
        <p className='text-left text-gray-800 text-sm leading-relaxed'>{content?.description}</p>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>팀 내 역할</h3>
        <p className='text-left text-gray-800 text-sm'>{content?.roleWithinTeam}</p>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>추천 전술</h3>
        <p className='text-left text-gray-800 text-sm'>{content?.recommendedTactics}</p>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>잘 맞는 팀</h3>
        <p className='text-left text-gray-800 text-sm'>{content?.compatibility}</p>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>비슷한 유형의 선수</h3>
        <p className='text-left text-gray-800 text-sm'>{content?.roleModel}</p>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>어울리는 유형</h3>
        <ul className='list-none m-0'>
          {content?.fit.map((item, index) => (
            <li key={index} className='flex flex-col text-base text-gray-600 mb-2 text-left'>
              <span className='font-bold'>{`${item.type}(${item.fpti}) - ${item.koreaName}`}</span>
              <span className='font-normal text-sm'>{item.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>어울리지 않는 유형</h3>
        <ul className='list-none m-0'>
          {content?.doNotFit.map((item, index) => (
            <li key={index} className='flex flex-col text-base text-gray-600 mb-2 text-left'>
              <span className='font-bold'>{`${item.type}(${item.fpti}) - ${item.koreaName}`}</span>
              <span className='font-normal text-sm'>{item.reason}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>강점 강화 훈련</h3>
        <ul className='list-none m-0'>
          {content?.training?.strengthen.map((training, index) => (
            <li key={index} className='text-gray-600 mb-2 text-left font-bold'>
              <span>{training.name}</span>
              <span className='font-normal text-sm'> - {training.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className='flex flex-col items-start mt-4'>
        <h3 className='text-lg mb-2 font-semibold'>약점 보완 훈련</h3>
        <ul className='list-none m-0'>
          {content?.training?.supplement.map((training, index) => (
            <li key={index} className='text-gray-600 mb-2 text-left font-bold'>
              <span>{training.name}</span>
              <span className='font-normal text-sm'> - {training.description}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default TypeDescription;
