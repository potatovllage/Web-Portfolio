import styled from "@emotion/styled";
import PortfolioBox from "./PortfolioBox";
import WalkHub from "../../assets/portfolio/WalkHub.svg";
import Rto from "../../assets/portfolio/Rto.svg";
import Beggar from "../../assets/portfolio/Beggar.svg";
import Moiza from "../../assets/portfolio/Moiza.svg";
import { openWindow } from "../../utils/function/openWindow";
import PageTitle from "../common/PageTitle";

const Portfolio = () => {
  return (
    <Wrapper>
      <PageTitle title="Portfolio" />
      <PortfolioContainer>
        <PortfolioBox
          onClick={() => {
            openWindow(
              "https://github.com/Software-Meister-High-School-Community/MOIZA-Front-V1"
            );
          }}
          img={Moiza}
          date="21.10.01 ~ ing"
          field="FrontEnd"
          title="MOIZA"
        />
        <PortfolioBox
          onClick={() => {
            openWindow("https://github.com/Walkhub/Walkhub-AdminWeb");
          }}
          date="21.12.28 ~ 22.07.10"
          field="FrontEnd"
          img={WalkHub}
          title="WalkHub"
        />
        <PortfolioBox
          onClick={() => {
            openWindow("https://github.com/unithon-9th-10th/10-Beggar-Front");
          }}
          date="22.09.02 ~ 22.09.04"
          field="FrontEnd"
          img={Beggar}
          title="무소비 챌린지(도전 상거지)"
        />
        <PortfolioBox
          onClick={() => {
            openWindow(
              "https://github.com/Software-High-School-United-Hackathon/StockPrices_Front"
            );
          }}
          date="22.10.05 ~ 22.10.07"
          field="FrontEnd"
          img={Rto}
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

const PortfolioContainer = styled.div`
  width: 768px;
  padding-bottom: 32px;
  display: flex;
  gap: 28px;
  justify-content: center;
  flex-wrap: wrap;
`;

export default Portfolio;
