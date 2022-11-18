import styled from "@emotion/styled";
import Image from "next/image";
import whale from "../../assets/Icon/Whale.svg";

const About = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <p>|</p>
          <h1>About Me</h1>
        </Title>
      </TitleWrapper>
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
      <ImDoingContainer>
        <DoingTitleContainer>
          <h1>What I'm Doing</h1>
        </DoingTitleContainer>
        <DoingContainer>
          <DoingBoxContainer>
            {/* DoingBox를 복붙해서 사용하면 됩니다. */}
            <DoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <DoingContent>
                <h1>Frontend Deverlopment</h1>
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
              </DoingContent>
            </DoingBox>
            <DoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <DoingContent>
                <h1>Making</h1>
                <p>
                  만드는 것을 좋아하고 끝까지 놓지 않습니다. 새로운 아이디어나
                  재밌는 요소가 생각이 나면 머릿속으로 구상 후 코드로 구현하는
                  것을 좋아합니다. 다만 중간에 하다가 막히면 잠깐 멈칫하고
                  생각을 오래 하는 경우가 있지만 다시 마음을 잡고 한 번 시도
                  했던 것을 놓치지 않고 마무리 하고 있습니다.
                </p>
              </DoingContent>
            </DoingBox>
          </DoingBoxContainer>
          <DoingBoxContainer>
            {/* DoingBox를 복붙해서 사용하면 됩니다. */}
            <DoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <DoingContent>
                <h1>Writing</h1>
                <p>
                  기록을 좋아하고 중요하다고 생각합니다. 기록을 남기는 것은 나
                  자신을 다시 한 번 성찰 하게 해주어서 좋았던 점과 부족한 점
                  등을 파악하며 발전하는 계기가 될 수 있는게 아닌가 생각하고
                  스스로에게 피드백을 하여 계속하여 성장하는 것이 또 하나의
                  목표입니다.
                </p>
              </DoingContent>
            </DoingBox>
            <DoingBox>
              <IconBox>
                <Image src={whale} alt="icon" />
              </IconBox>
              <DoingContent>
                <h1>Communication</h1>
                <p>
                  저는 사람들과 이야기를 잘하고 먼저 잘 다가가는 사람입니다.
                  처음 어색한 상황이여도 스스럼 없이 먼저 다가가고 소통에도
                  다툼이나 감정에 휘둘리지 않고 이성적으로 대하는 것 같습니다.
                  여러 해커톤에 참여 해보면서 커뮤니케이션에 관하여는 저에게
                  장점이라고 생각하고 있습니다.
                </p>
              </DoingContent>
            </DoingBox>
          </DoingBoxContainer>
        </DoingContainer>
      </ImDoingContainer>
      <ProjectOrganization>
        <ProjectOrgaTitle>
          <h1>Project Organization</h1>
        </ProjectOrgaTitle>
        <OrganizationContainer></OrganizationContainer>
      </ProjectOrganization>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 840px;
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
  justify-content: center;
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
    margin-right: 6px;
    margin-bottom: 4px;
    font-size: 26px;
    font-weight: 700;
    color: #377ab9;
  }
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
  }
`;

const ImDoingContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 28px;
`;

const DoingTitleContainer = styled.div`
  margin-right: 630px;
  margin-bottom: 24px;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    color: #377ab9;
  }
`;

const DoingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DoingBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DoingBox = styled.div`
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

const DoingContent = styled.div`
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
    font-size: 16px;
    font-weight: 400;
    color: #222222;
    margin-bottom: 32px;
  }
`;

const ProjectOrganization = styled.div`
  margin-bottom: 44px;
`;

const ProjectOrgaTitle = styled.div`
  margin-right: 575px;
  margin-bottom: 24px;
  h1 {
    font-weight: 700;
    font-size: 20px;
    color: #377ab9;
  }
`;

const OrganizationContainer = styled.div`
  width: 746px;
  display: flex;
  flex-wrap: wrap;
`;

export default About;
