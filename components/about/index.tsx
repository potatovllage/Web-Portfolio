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
          {/* DoingBox를 복붙해서 사용하면 됩니다. */}
          <DoingBox>
            <IconBox>
              <Image src={whale} alt="icon" />
            </IconBox>
            <DoingContent>
              <h1>Frontend Deverlopment</h1>
            </DoingContent>
          </DoingBox>
          <DoingBox>
            <IconBox>
              <Image src={whale} alt="icon" />
            </IconBox>
            <DoingContent>
              <h1>Making</h1>
            </DoingContent>
          </DoingBox>
          <DoingBox>
            <IconBox>
              <Image src={whale} alt="icon" />
            </IconBox>
            <DoingContent>
              <h1>Writing</h1>
            </DoingContent>
          </DoingBox>
          <DoingBox>
            <IconBox>
              <Image src={whale} alt="icon" />
            </IconBox>
            <DoingContent>
              <h1>Communication</h1>
            </DoingContent>
          </DoingBox>
        </DoingContainer>
      </ImDoingContainer>
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
  width: 768px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

export default About;
