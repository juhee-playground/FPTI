interface ITypeDescriptionProps {}
import {
  ArticleContainer,
  DinosaurHeader,
  FlexDiv,
  DinosaurKoreanName,
  DinosaurType,
  DescriptionText,
  List,
  ListItem,
} from './TypeDescription.styles';

interface IFitOrNotFitType {
  type: string;
  fpti: string;
  koreaName: string;
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
    <ArticleContainer>
      <DinosaurHeader>
        <FlexDiv>
          <DinosaurType>{content?.type}</DinosaurType>
          <DinosaurKoreanName>{content?.koreaName}</DinosaurKoreanName>
        </FlexDiv>
      </DinosaurHeader>

      <section>
        <DescriptionText>{content?.description}</DescriptionText>
      </section>

      <section>
        <h3>팀 내 역할</h3>
        <DescriptionText>{content?.roleWithinTeam}</DescriptionText>
      </section>

      <section>
        <h3>추천 전술</h3>
        <DescriptionText>{content?.recommendedTactics}</DescriptionText>
      </section>

      <section>
        <h3>비슷한 유형의 선수</h3>
        <DescriptionText>{content?.roleModel}</DescriptionText>
      </section>

      <section>
        <h3>어울리는 유형</h3>
        <List>
          {content?.fit.map((item, index) => (
            <ListItem key={index}>
              <span>
                {item.type}({item.fpti})
              </span>
              <span>{` - ${item.koreaName}`}</span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <h3>어울리지 않는 유형</h3>
        <List>
          {content?.doNotFit.map((item, index) => (
            <ListItem key={index}>
              <span>
                {item.type}({item.fpti})
              </span>
              <span>{` - ${item.koreaName}`}</span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <h3>강점 강화 훈련</h3>
        <List>
          {content?.training?.strengthen.map((tarining, index) => (
            <ListItem key={index}>
              <span>{tarining.name}</span> <span>{` - ${tarining.description}`}</span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <h3>약점 보완 훈련</h3>
        <List>
          {content?.training?.supplement.map((tarining, index) => (
            <ListItem key={index}>
              <span>{tarining.name}</span> <span>{` - ${tarining.description}`}</span>
            </ListItem>
          ))}
        </List>
      </section>
    </ArticleContainer>
  );
};

export default TypeDescription;
