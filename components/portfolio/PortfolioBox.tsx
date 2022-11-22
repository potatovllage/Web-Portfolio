import styled from "@emotion/styled";
import Image from "next/image";

interface Props {
  title: string;
  imgURL: string;
  date: string;
  field: string;
}

const PortfolioBox = ({ field, date, imgURL, title }: Props) => {
  return (
    <Wrapper>
      <Image width={338} height={190} src={imgURL} alt="img" />
      <PortfolioTitle>{title}</PortfolioTitle>
      <PortfolioDate>{date}</PortfolioDate>
      <PortfolioField>{field}</PortfolioField>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 370px;
  height: 320px;
  padding: 16px 16px 24px 16px;
  border-radius: 16px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;

  > img {
    filter: drop-shadow(3px 3px 8px rgba(203, 215, 226, 0.8))
      drop-shadow(-3px -3px 8px #ffffff);
    margin-bottom: 20px;
  }
`;

const PortfolioTitle = styled.h1`
  color: #082642;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;

const PortfolioDate = styled.p`
  color: #629fd8;
  font-weight: 400;
  font-size: 16px;
`;

const PortfolioField = styled.p`
  color: #222222;
  font-weight: 400;
  font-size: 16px;
`;

export default PortfolioBox;
