import styled from "@emotion/styled";
import Image from "next/image";
import whale from "../../assets/Icon/Whale.svg";
import medal from "../../assets/Icon/medal.svg";
import onMoiza from "../../assets/organizations/onMoiza.svg";
import onWalkHub from "../../assets/organizations/onWalkhub.svg";
import onRto from "../../assets/organizations/onRto.svg";
import onBagger from "../../assets/organizations/onBagger.svg";
import { openWindow } from "../../utils/function/openWindow";
import PageTitle from "../common/PageTitle";
import leftVector from "../../assets/Icon/leftVector.svg";

const About = () => {
  return (
    <Wrapper>
      <PageTitle title="About Me" />
      <IntroContainer>
        <p>
          늦었다고 생각했을 때가 가장 빠르다고 생각하는 개발자 전영준 입니다
          도전을 멈추지 않고 소통하는 것을 좋아합니다!
        </p>
        <p>
          I'm Jeon Yeongjun, the developer who thinks it's the fastest when you
          think it's late I like to communicate without stopping challenges!
        </p>
      </IntroContainer>
      <ImDoingWrapper>
        <ImDoingTitle>
          <h1>What I'm Doing</h1>
        </ImDoingTitle>
        <ImDoingContainer>
          {/*왼쪽 */}
          <ImDoingBoxContainer>
            {/*  DoingBox를 복붙하여서 내용을 채워 넣어서 사용하면 된다. */}
            <ImDoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <ImDoingContent>
                <h1>FrontEnd Developer</h1>
                <p>
                  처음 코딩은 초6때 스크래치라는 블럭코딩으로 시작하였고
                  중학교에 올라와서 python을 사용해보다 중3때 html,css를
                  접하고서 FrontEnd 개발자를 꿈꿨습니다.
                </p>
                <p>
                  그 후 대덕소프트웨어마이스터고등학교에서 재학중이며 Front-End
                  분야를 공부하고 있습니다. 공부를 최대한 멈추지 않고 늘 열심히
                  해야 한다고 생각하여 평일 주말 상관 없이 꾸준하게
                  공부중입니다.
                </p>
              </ImDoingContent>
            </ImDoingBox>
            <ImDoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <ImDoingContent>
                <h1>Making</h1>
                <p>
                  만드는 것을 좋아하고 끝까지 놓지 않습니다. 새로운 아이디어나
                  재밌는 요소가 생각이 나면 머릿속으로 구상 후 코드로 구현하는
                  것을 좋아합니다. 다만 중간에 하다가 막히면 잠깐 멈칫하고
                  생각을 오래 하는 경우가 있지만 다시 마음을 잡고 한 번 시도
                  했던 것을 놓치지 않고 마무리 하고 있습니다.
                </p>
              </ImDoingContent>
            </ImDoingBox>
          </ImDoingBoxContainer>
          {/*오른쪽 */}
          <ImDoingBoxContainer>
            {/* DoingBox를 복붙하여서 내용을 채워 넣어서 사용하면 된다. */}
            <ImDoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <ImDoingContent>
                <h1>Writing</h1>
                <p>
                  기록을 좋아하고 중요하다고 생각합니다. 기록을 남기는 것은 나
                  자신을 다시 한 번 성찰 하게 해주어서 좋았던 점과 부족한 점
                  등을 파악하며 발전하는 계기가 될 수 있는게 아닌가 생각하고
                  스스로에게 피드백을 하여 계속하여 성장하는 것이 또 하나의
                  목표입니다.
                </p>
              </ImDoingContent>
            </ImDoingBox>
            <ImDoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <ImDoingContent>
                <h1>Communication</h1>
                <p>
                  저는 사람들과 이야기를 잘하고 먼저 잘 다가가는 사람입니다.
                  처음 어색한 상황이여도 스스럼 없이 먼저 다가가고 소통에도
                  다툼이나 감정에 휘둘리지 않고 이성적으로 대하는 것 같습니다.
                  여러 해커톤에 참여 해보면서 커뮤니케이션에 관하여는 저에게
                  장점이라고 생각하고 있습니다.
                </p>
              </ImDoingContent>
            </ImDoingBox>
          </ImDoingBoxContainer>
        </ImDoingContainer>
      </ImDoingWrapper>
      <ProjectOrganization>
        <ProjectOrgaTitle>
          <h1>Project Organization</h1>
        </ProjectOrgaTitle>
        <OrganizationContainer>
          {/* OrganizationCover를 복붙하여 Img에 src에는 img openWindow에는 링크를 입력한다. */}
          <OrganizationImgCover>
            <Image
              width={156}
              height={156}
              src={onMoiza}
              onClick={() =>
                openWindow(
                  "https://github.com/Software-Meister-High-School-Community"
                )
              }
              alt="icon"
            />
          </OrganizationImgCover>
          <OrganizationImgCover>
            <Image
              width={156}
              height={156}
              src={onWalkHub}
              onClick={() => openWindow("https://github.com/Walkhub")}
              alt="icon"
            />
          </OrganizationImgCover>
          <OrganizationImgCover>
            <Image
              width={156}
              height={156}
              src={onRto}
              onClick={() =>
                openWindow(
                  "https://github.com/Software-High-School-United-Hackathon"
                )
              }
              alt="icon"
            />
          </OrganizationImgCover>
          <OrganizationImgCover>
            <Image
              width={156}
              height={156}
              src={onBagger}
              onClick={() => openWindow("https://github.com/unithon-9th-10th")}
              alt="icon"
            />
          </OrganizationImgCover>
        </OrganizationContainer>
      </ProjectOrganization>
      <AwardContainer>
        <AwardTitle>
          <h1>Award</h1>
        </AwardTitle>
        {/* AwardBox를 복붙하여 사용하고 내용을 채워 넣으면 된다. AwardContentText는 문단을 나눌시 추가하여 글을 쓰면 된다.  */}
        <AwardBox>
          <AwardImgWrapper>
            <Image width={96} height={96} src={medal} alt="" />
          </AwardImgWrapper>
          <AwardContentWrapper>
            <AwardContentTitle>UNITHON 9th 특별상</AwardContentTitle>
            <AwardContentDate>22.09.02 ~ 22.09.04</AwardContentDate>
            <AwardContentText>
              유니톤은 IT 커뮤니티 구성원들의 즐거운 성장과 교류를 목표로 하는
              해커톤입니다. FrontEnd 개발자로 참가하였습니다. 현업 재직자,
              대학생 분들과 같이 프로젝트를 해본 좋은 경험이였습니다.
            </AwardContentText>
            <AwardNotionContainer
              onClick={() =>
                openWindow(
                  "https://www.notion.so/f1925d8a37c14337ba80b0122bf61ce6?v=bcb8bb40215746d9ac3334519bb88080"
                )
              }
            >
              <p>노션 바로가기</p>
              <Image width={16} height={16} src={leftVector} alt=">" />
            </AwardNotionContainer>
          </AwardContentWrapper>
        </AwardBox>
        <AwardBox>
          <AwardImgWrapper>
            <Image width={96} height={96} src={medal} alt="" />
          </AwardImgWrapper>
          <AwardContentWrapper>
            <AwardContentTitle>
              sw마이스터고 연합 해커톤 인기상
            </AwardContentTitle>
            <AwardContentDate>22.10.05 ~ 22.10.07</AwardContentDate>
            <AwardContentText>
              sw마이스터고에서 주관하는 4개교 연합 해커톤에 FrontEnd 개발자로
              참가하였습니다. 디자이너, 백엔드, AI 팀원 3명과 같이 즐겁게
              개발하여 수상도 할 수 있었던 것 같습니다.
            </AwardContentText>
            <AwardNotionContainer
              onClick={() =>
                openWindow(
                  "https://www.notion.so/f1925d8a37c14337ba80b0122bf61ce6?v=bcb8bb40215746d9ac3334519bb88080"
                )
              }
            >
              <p>노션 바로가기</p>
              <Image width={16} height={16} src={leftVector} alt=">" />
            </AwardNotionContainer>
          </AwardContentWrapper>
        </AwardBox>
        <AwardBox>
          <AwardImgWrapper>
            <Image width={96} height={96} src={medal} alt="" />
          </AwardImgWrapper>
          <AwardContentWrapper>
            <AwardContentTitle>
              제 7회 전국 고등학교 동아리 SW 경진대회 장려상
            </AwardContentTitle>
            <AwardContentDate>22.08.01 ~ 22.11.12</AwardContentDate>
            <AwardContentText>
              SW 중심 대학 4개교와 함깨하는 전국 고등학교 동아리 SW 경진대회에
              참여하였습니다. 같은 동아리 친구 4명과 함깨하였고 예선 80팀을 뚫고
              본선 20팀에 뽑혀 장려상을 수상 할 수 있었습니다.
            </AwardContentText>
            <AwardNotionContainer
              onClick={() =>
                openWindow(
                  "https://www.notion.so/f1925d8a37c14337ba80b0122bf61ce6?v=bcb8bb40215746d9ac3334519bb88080"
                )
              }
            >
              <p>노션 바로가기</p>
              <Image width={16} height={16} src={leftVector} alt=">" />
            </AwardNotionContainer>
          </AwardContentWrapper>
        </AwardBox>
      </AwardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 840px;
  margin-bottom: 120px;
  background: #e7edf3;
  box-shadow: 5px 5px 16px rgba(203, 215, 226, 0.8), -5px -5px 16px #ffffff;
  border-radius: 16px;
`;

const IntroContainer = styled.div`
  width: 768px;
  flex-direction: column;
  justify-content: center;

  > p {
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
    line-height: 26px;
  }
`;

const ImDoingWrapper = styled.div`
  margin-top: 14px;
  margin-bottom: 28px;
`;

const ImDoingTitle = styled.div`
  margin-right: 630px;
  margin-bottom: 24px;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    color: #377ab9;
  }
`;

const ImDoingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImDoingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImDoingBox = styled.div`
  display: flex;
  width: 370px;
  margin-bottom: 28px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;
`;

const IconBox = styled.div`
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  margin-left: 2px;
  margin-right: 16px;
  background: #e7edf3;
  box-shadow: inset 2px 2px 2px rgba(203, 215, 226, 0.8),
    inset -2px -2px 2px #ffffff;
  border-radius: 14px 0px 16px;
`;

const ImDoingContent = styled.div`
  margin-top: 28px;
  margin-right: 28px;
  width: 256px;

  > h1 {
    font-size: 18px;
    font-weight: 700;
    color: #082642;
    margin-bottom: 8px;
  }

  > p {
    line-height: 26px;
    font-size: 16px;
    font-weight: 400;
    color: #222222;
    margin-bottom: 32px;
  }
`;

const ProjectOrganization = styled.div`
  margin-bottom: 44px;
  margin-right: 20px;
`;

const ProjectOrgaTitle = styled.div`
  width: 195px;
  margin-bottom: 24px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #377ab9;
  }
`;

const OrganizationContainer = styled.div`
  width: 724px;
  margin-left: 24px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const OrganizationImgCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  margin-right: 18px;
  background: #d9d9d9;
  border-radius: 30px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  overflow: hidden;
  > img {
    border-radius: 30px;
    cursor: pointer;
    :hover {
      transform: scale(1.1);
      transition: transform 1s;
      filter: opacity(0.5) drop-shadow(0 0 0 #cbd7e280);
    }
  }
`;

const AwardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AwardTitle = styled.div`
  margin-right: 712px;
  margin-bottom: 56px;
  > h1 {
    font-weight: 700;
    font-size: 20px;
    color: #377ab9;
  }
`;

const AwardBox = styled.div`
  display: flex;
  width: 768px;
  padding: 28px 32px 32px 22px;
  margin-bottom: 60px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;
  position: relative;
`;

const AwardImgWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -28px;
  left: 22px;
  width: 100px;
  height: 100px;
  margin-right: 24px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;

  > img {
    border-radius: 16px;
  }
`;

const AwardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 146px;
`;

const AwardContentTitle = styled.h1`
  color: #082642;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`;

const AwardContentDate = styled.p`
  color: #629fd8;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

const AwardContentText = styled.p`
  line-height: 26px;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 12px;
`;

const AwardNotionContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  > p {
    margin-right: 8px;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #377ab9;
  }
`;

export default About;
