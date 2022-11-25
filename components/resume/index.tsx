import styled from "@emotion/styled";
import SkillBox from "./SkillsBox";
import htmlImg from "../../assets/skills/html.svg";
import cssImg from "../../assets/skills/css.svg";
import jsImg from "../../assets/skills/js.svg";
import tsImg from "../../assets/skills/ts.svg";
import reactImg from "../../assets/skills/react.svg";
import recoilImg from "../../assets/skills/recoil.svg";
import styledImg from "../../assets/skills/styled.svg";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <p>|</p>
          <h1>Resume</h1>
        </Title>
      </TitleWrapper>
      <EducationWrapper>
        <EducationTitle>
          <h1>Education</h1>
        </EducationTitle>
        {/* ResumeBox 복붙해서 사용하기 */}
        <ResumeBox
          title="대덕소프트웨어마이스터고등학교"
          date="2021 - 재학 중"
          content=" 대덕소프트웨어마이스터고등학교는 대전광역시 유성구에 위치한
              마이스터고등학교이다. 소프트웨어 마이스터 고등학교로서 최초로
              개교한 학교이다."
        />
      </EducationWrapper>
      <ExperienceWrapper>
        <ExperienceTitle>
          <h1>Experience</h1>
        </ExperienceTitle>
        {/* ResumeBox 복붙해서 사용하기 */}
        <ResumeBox
          title="대덕소프트웨어마이스터고등학교"
          date="2021 - 재학 중"
          content=" 대덕소프트웨어마이스터고등학교는 대전광역시 유성구에 위치한
              마이스터고등학교이다. 소프트웨어 마이스터 고등학교로서 최초로
              개교한 학교이다."
        />
      </ExperienceWrapper>
      <MySkillsWrapper>
        <MySkillTitle>
          <h1>My Skills</h1>
        </MySkillTitle>
        <MySkillsContainerCover>
          <MySkillsContainer>
            {/* SkillBox 복붙해서 사용하기  */}
            <SkillBox img={htmlImg} percentage={80} title="HTML5" />
            <SkillBox img={cssImg} percentage={80} title="CSS3" />
            <SkillBox img={jsImg} percentage={70} title="JavaScript" />
            <SkillBox img={tsImg} percentage={70} title="TypeScript" />
            <SkillBox img={reactImg} percentage={70} title="React" />
            <SkillBox img={reactImg} percentage={60} title="Next.js" />
            <SkillBox
              img={styledImg}
              percentage={80}
              title="Styled-Components & Emotion.js"
            />
            <SkillBox img={recoilImg} percentage={60} title="recoil" />
            <SkillBox img={reactImg} percentage={50} title="Context api" />
          </MySkillsContainer>
        </MySkillsContainerCover>
      </MySkillsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 840px;
  padding-bottom: 30px;
  margin-bottom: 120px;
  background: #e7edf3;
  box-shadow: 5px 5px 16px rgba(203, 215, 226, 0.8), -5px -5px 16px #ffffff;
  border-radius: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  margin-right: 590px;
  margin-bottom: 32px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  height: 80px;
  background: #e7edf3;
  box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
    inset -3px -3px 8px #ffffff;
  border-radius: 12px 0px 32px;

  > h1 {
    font-size: 26px;
    font-weight: 700;
    color: #082642;
  }

  > p {
    margin-left: 32px;
    margin-right: 6px;
    margin-bottom: 4px;
    font-size: 26px;
    font-weight: 700;
    color: #377ab9;
  }
`;

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

const EducationTitle = styled.div`
  margin-right: 670px;
  margin-bottom: 24px;

  > h1 {
    color: #377ab9;
    font-weight: 700;
    font-size: 20px;
  }
`;

const ExperienceWrapper = styled.div``;

const ExperienceTitle = styled.div`
  margin-right: 660px;
  margin-bottom: 24px;

  > h1 {
    color: #377ab9;
    font-weight: 700;
    font-size: 20px;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
`;

const MySkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MySkillTitle = styled.div`
  margin-right: 680px;
  margin-bottom: 24px;

  > h1 {
    color: #377ab9;
    font-weight: 700;
    font-size: 20px;
  }
`;

const MySkillsContainerCover = styled.div`
  width: 768px;
  padding: 2px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;
`;

const MySkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 764px;
  padding: 22px 46px 0px 26px;
  background: #e7edf3;
  box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
    inset -3px -3px 8px #ffffff;
  border-radius: 14px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Resume;
