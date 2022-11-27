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
import PageTitle from "../common/PageTitle";

const EducationContent = [
  {
    title: "대덕소프트웨어마이스터고등학교",
    date: "2021 - 재학 중",
    content:
      "대덕소프트웨어마이스터고등학교는 대전광역시 유성구에 위치한 마이스터고등학교이다. 소프트웨어 마이스터 고등학교로서 최초로 개교한 학교이다.",
  },
];

const ExperienceContent = [
  {
    title: "HIGHTHON 7th",
    date: "22.01.15 ~ 22.01.16",
    content:
      "고등학생들이 운영하고 참가하는 HIGHTHON에서 팀장 역할 및 FrontEnd 개발자로 참가하였습니다. 아쉽게 수상은 못하였지만 첫 해커톤의 경험을 쌓고 부족한 점을 깨우칠 수 있던 시간이였습니다.",
  },
  {
    title: "UNITHON 9th",
    date: "222.09.02 ~ 22.09.04",
    content:
      "유니톤은 IT 커뮤니티 구성원들의 즐거운 성장과 교류를 목표로 하는 해커톤입니다. FrontEnd 개발자로 참가하였습니다. 현업 재직자, 대학생 분들과 같이 프로젝트를 해본 좋은 경험이였습니다.",
  },
  {
    title: "sw마이스터고 연합 해커톤",
    date: "22.10.05 ~ 22.10.07",
    content:
      "sw마이스터고에서 주관하는 4개교 연합 해커톤에 FrontEnd 개발자로 참가하였습니다. 디자이너, 백엔드, AI 팀원 3명과 같이 즐겁게 개발하여 수상도 할 수 있었던 것 같습니다.",
  },
  {
    title: "KOSA-MIDAS YOUNG TALENT CHALLENGE 2022",
    date: "22.11.03 ~ 22.11.04",
    content:
      "한국소프트웨어산업협회가 마이다스아이티, 정보기술 산업 인적자원개발위원회와 공동으로 개최한 고교 해커톤 행사에 참여하여 협업인 처음인 친구들을 이끌어서 팀장 역할 및 FrontEnd 개발자로 참여하였습니다.",
  },
  {
    title: "제 7회 전국 고등학교 동아리 SW 경진대회",
    date: "22.08.01 ~ 22.11.12",
    content:
      "SW 중심 대학 4개교와 함깨하는 전국 고등학교 동아리 SW 경진대회에 참여하였습니다. 같은 동아리 친구 4명과 함깨하였고 예선 80팀을 뚫고 본선 20팀에 뽑혀 장려상을 수상 할 수 있었습니다.",
  },
];

const Resume = () => {
  return (
    <Wrapper>
      <PageTitle title="Resume" />
      <EducationWrapper>
        <EducationTitle>
          <h1>Education</h1>
        </EducationTitle>
        {EducationContent.map((data, idx) => (
          <ResumeBox
            title={data.title}
            date={data.date}
            content={data.content}
            isLast={idx == EducationContent.length - 1}
          />
        ))}
      </EducationWrapper>
      <ExperienceWrapper>
        <ExperienceTitle>
          <h1>Experience</h1>
        </ExperienceTitle>
        {ExperienceContent.map((data, idx) => (
          <ResumeBox
            title={data.title}
            date={data.date}
            content={data.content}
            isLast={idx == ExperienceContent.length - 1}
          />
        ))}
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

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
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

const ExperienceWrapper = styled.div`
  margin-bottom: 24px;
  :nth-last-child(1) {
    border: 1px solid black;
  }
`;

const ExperienceTitle = styled.div`
  margin-right: 660px;
  margin-bottom: 24px;

  > h1 {
    color: #377ab9;
    font-weight: 700;
    font-size: 20px;
  }
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

export default Resume;
