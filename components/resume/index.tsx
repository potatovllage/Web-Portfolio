import styled from "@emotion/styled";

const Resume = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <p>|</p>
          <h1>Resume</h1>
        </Title>
      </TitleWrapper>
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

export default Resume;
