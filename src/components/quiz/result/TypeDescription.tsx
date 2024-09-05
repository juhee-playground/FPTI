interface ITypeDescriptionProps {}
import {
  ArticleContainer,
  DinosaurHeader,
  FlexDiv,
  DinosaurName,
  DinosaurKoreanName,
  DinosaurType,
  DescriptionSection,
  DescriptionText,
  TeamRoleSection,
  RecommendedTacticsSection,
  RoleModelSection,
  List,
  ListItem,
} from './TypeDescription.styles';

interface IFitOrNotFitType {
  type: string;
  fpti: string;
  koreaName: string;
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
}

interface ITypeDescriptionProps {
  content: IContent | null;
}

const TypeDescription = ({ content }: ITypeDescriptionProps) => {
  return (
    <ArticleContainer>
      <DinosaurHeader>
        <DinosaurName>{content?.name}</DinosaurName>
        <FlexDiv>
          <DinosaurType>{content?.type}</DinosaurType>
          <DinosaurKoreanName>{content?.koreaName}</DinosaurKoreanName>
        </FlexDiv>
      </DinosaurHeader>

      <DescriptionSection>
        <DescriptionText>{content?.description}</DescriptionText>
      </DescriptionSection>

      <TeamRoleSection>
        <h3>팀 내 역할</h3>
        <DescriptionText>{content?.roleWithinTeam}</DescriptionText>
      </TeamRoleSection>

      <RecommendedTacticsSection>
        <h3>추천 전술</h3>
        <DescriptionText>{content?.recommendedTactics}</DescriptionText>
      </RecommendedTacticsSection>

      <RoleModelSection>
        <h3>비슷한 유형의 선수</h3>
        <DescriptionText>{content?.roleModel}</DescriptionText>
      </RoleModelSection>

      <section>
        <h3>어울리는 유형</h3>
        <List>
          {content?.fit.map((fitItem, index) => (
            <ListItem key={index}>
              ({fitItem.fpti}) {fitItem.type} - {fitItem.koreaName}
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <h3>어울리지 않는 유형</h3>
        <List>
          {content?.doNotFit.map((notFitItem, index) => (
            <ListItem key={index}>
              ({notFitItem.fpti}) {notFitItem.type} - {notFitItem.koreaName}
            </ListItem>
          ))}
        </List>
      </section>
    </ArticleContainer>
  );
};

export default TypeDescription;
