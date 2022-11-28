import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";

interface Props {
  title: string;
  img: StaticImageData;
  date: string;
  field: string;
  onClick: () => void;
}

const PortfolioBox = ({ onClick, field, date, img, title }: Props) => {
  return (
    <WrapperCover>
      <Wrapper onClick={onClick}>
        <ImgWrapper>
          <Image width={338} height={190} src={img} alt="img" />
        </ImgWrapper>
        <PortfolioTitle>{title}</PortfolioTitle>
        <PortfolioDate>{date}</PortfolioDate>
        <PortfolioField>{field}</PortfolioField>
      </Wrapper>
    </WrapperCover>
  );
};

const WrapperCover = styled.div`
  width: 370px;
  height: 320px;
  cursor: pointer;
  border-radius: 16px;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  :hover {
    background: #e7edf3;
    box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  }
`;

const Wrapper = styled.div`
  width: 366px;
  height: 316px;
  padding: 16px 16px 24px 16px;
  border-radius: 16px;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  border-radius: 16px;

  :hover {
    background: #f2f6fa;
    box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
      inset -3px -3px 8px #ffffff;
    border-radius: 16px;

    > h1 {
      background: #f2f6fa;
      text-decoration: underline;
    }

    > p {
      background: #f2f6fa;
    }

    > div {
      > img {
        border-radius: 16px;
        transform: scale(1.1);
        transition: transform 1s;
        filter: opacity(0.6) drop-shadow(0 0 0 #082642);
      }
    }
  }

  > img {
    border-radius: 16px;
  }
`;

const ImgWrapper = styled.div`
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 12px;
  filter: drop-shadow(3px 3px 8px rgba(203, 215, 226, 0.8))
    drop-shadow(-3px -3px 8px #ffffff);
  margin-bottom: 20px;

  :hover {
    filter: drop-shadow(3px 3px 8px rgba(203, 215, 226, 0.8))
      drop-shadow(-3px -3px 8px #ffffff);
  }
`;

const PortfolioTitle = styled.h1`
  color: #082642;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
  margin-left: 12px;
`;

const PortfolioDate = styled.p`
  color: #629fd8;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
  margin-left: 12px;
`;

const PortfolioField = styled.p`
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  margin-left: 12px;
`;

export default PortfolioBox;
