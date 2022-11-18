import styled from "@emotion/styled";

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
      <ImDoingContainer></ImDoingContainer>
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
  display: flex;
  flex-direction: column;
  justify-content: center;

  > p {
    color: #222222;
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

const ImDoingContainer = styled.div``;

export default About;
