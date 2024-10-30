interface ITypeDescriptionProps {}
import {
  ArticleContainer,
  Content,
  DescriptionTitle,
  DescriptionText,
  List,
  ListItem,
  ListItemColumn,
} from './TypeDescription.styles';

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
    <ArticleContainer>
      <Content>
        <DescriptionText>{content?.description}</DescriptionText>
      </Content>

      <Content>
        <DescriptionTitle>팀 내 역할</DescriptionTitle>
        <DescriptionText>{content?.roleWithinTeam}</DescriptionText>
      </Content>

      <Content>
        <DescriptionTitle>추천 전술</DescriptionTitle>
        <DescriptionText>{content?.recommendedTactics}</DescriptionText>
      </Content>

      <Content>
        <DescriptionTitle>잘 맞는 팀</DescriptionTitle>
        <DescriptionText>{content?.compatibility}</DescriptionText>
      </Content>

      <Content>
        <DescriptionTitle>비슷한 유형의 선수</DescriptionTitle>
        <DescriptionText>{content?.roleModel}</DescriptionText>
      </Content>

      <Content>
        <DescriptionTitle>어울리는 유형</DescriptionTitle>
        <List>
          {content?.fit.map((item, index) => (
            <ListItemColumn key={index}>
              <span>{`${item.type}(${item.fpti}) - ${item.koreaName}`}</span>
              <span>{item.reason}</span>
            </ListItemColumn>
          ))}
        </List>
      </Content>

      <Content>
        <DescriptionTitle>어울리지 않는 유형</DescriptionTitle>
        <List>
          {content?.doNotFit.map((item, index) => (
            <ListItemColumn key={index}>
              <span>{`${item.type}(${item.fpti}) - ${item.koreaName}`}</span>
              <span>{item.reason}</span>
            </ListItemColumn>
          ))}
        </List>
      </Content>

      <Content>
        <DescriptionTitle>강점 강화 훈련</DescriptionTitle>
        <List>
          {content?.training?.strengthen.map((tarining, index) => (
            <ListItem key={index}>
              <span>{tarining.name}</span>
              <span> - {tarining.description}</span>
            </ListItem>
          ))}
        </List>
      </Content>

      <Content>
        <DescriptionTitle>약점 보완 훈련</DescriptionTitle>
        <List>
          {content?.training?.supplement.map((tarining, index) => (
            <ListItem key={index}>
              <span>{tarining.name}</span>
              <span> - {tarining.description}</span>
            </ListItem>
          ))}
        </List>
      </Content>
    </ArticleContainer>
  );
};

export default TypeDescription;
