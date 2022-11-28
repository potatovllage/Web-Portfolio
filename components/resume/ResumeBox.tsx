import styled from "@emotion/styled";

interface Props {
  title: string;
  date: string;
  content: string;
  isLast?: boolean;
}

const ResumeBox = ({ content, date, title, isLast = false }: Props) => {
  return (
    <Wrapper>
      <ShapesWrapper>
        <CircleWrapper>
          <div className="circle" />
        </CircleWrapper>
        <HR style={{ opacity: isLast ? 0 : 1 }} />
      </ShapesWrapper>
      <ContentWrapper>
        <ContentTitle>{title}</ContentTitle>
        <ContentDate>{date}</ContentDate>
        <ContentText>{content}</ContentText>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const ShapesWrapper = styled.div`
  margin-right: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: #f2f6fa;
  box-shadow: 2px 2px 2px rgba(203, 215, 226, 0.8), -2px -2px 2px #ffffff;

  .circle {
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background: #e7edf3;
    box-shadow: inset 2px 2px 2px rgba(203, 215, 226, 0.8),
      inset -2px -2px 2px #ffffff;
  }
`;

const HR = styled.hr`
  width: 4px;
  height: 114px;
  background: #f2f6fa;
  background: #f2f6fa;
  box-shadow: inset 2px 2px 2px rgba(203, 215, 226, 0.8);
  border-radius: 2px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.h1`
  color: #082642;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
`;

const ContentDate = styled.p`
  color: #629fd8;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

const ContentText = styled.p`
  line-height: 26px;
  width: 560px;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
`;

export default ResumeBox;
