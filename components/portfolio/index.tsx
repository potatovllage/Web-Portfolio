import styled from "@emotion/styled";
import PortfolioBox from "./PortfolioBox";
import WalkHub from "../../assets/portfolio/WalkHub.svg";
import Rto from "../../assets/portfolio/Rto.svg";
import Beggar from "../../assets/portfolio/Beggar.svg";
import Moiza from "../../assets/portfolio/Moiza.svg";

const Portfolio = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <p>|</p>
          <h1>Portfolio</h1>
        </Title>
      </TitleWrapper>
      <PortfolioContainer>
        <PortfolioBox
          imgURL={Moiza}
          date="21.10.01 ~ ing"
          field="FrontEnd"
          title="MOIZA"
        />
        <PortfolioBox
          date="21.12.28 ~ 22.07.10"
          field="FrontEnd"
          imgURL={WalkHub}
          title="WalkHub"
        />
        <PortfolioBox
          date="22.09.02 ~ 22.09.04"
          field="FrontEnd"
          imgURL={Beggar}
          title="무소비 챌린지(도전 상거지)"
        />
        <PortfolioBox
          date="22.10.05 ~ 22.10.07"
          field="FrontEnd"
          imgURL={Rto}
          title="알투"
        />
      </PortfolioContainer>
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
    margin-left: 34px;
    margin-right: 6px;
    margin-bottom: 4px;
    font-size: 26px;
    font-weight: 700;
    color: #377ab9;
  }
`;

const PortfolioContainer = styled.div`
  width: 768px;
  padding-bottom: 32px;
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Portfolio;
