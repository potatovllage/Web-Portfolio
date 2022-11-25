import styled from "@emotion/styled";
import Image, { StaticImageData } from "next/image";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

interface Props {
  title: string;
  ratio: number;
  img: StaticImageData;
}

const SkillBox = ({ title, ratio, img }: Props) => {
  return (
    <Wrapper>
      <ImgWrapper>
        <Image src={img} alt="" />
      </ImgWrapper>
      <ContentWrapper>
        <InfomationWrapper>
          <h1>{title}</h1>
          <p>{ratio}%</p>
        </InfomationWrapper>
        <Box sx={{ width: 612 }}>
          <BorderLinearProgress variant="determinate" value={ratio} />
        </Box>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 20px;
  background: #e7edf3;
  box-shadow: 2px 2px 2px rgba(203, 215, 226, 0.8), -2px -2px 2px #ffffff;
  border-radius: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfomationWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  > h1 {
    color: #082642;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    margin-right: 12px;
  }
  > p {
    color: #629fd8;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`;

const BorderLinearProgress = styled(LinearProgress)`
  height: 8px;
  border-radius: 6px;
  background: #f2f6fa;
  box-shadow: inset 2px 2px 2px rgba(203, 215, 226, 0.8),
    inset -2px -2px 2px #ffffff;
  border-radius: 6px;
  .MuiLinearProgress-barColorPrimary {
    background: #377ab9;
    box-shadow: 2px 2px 2px rgba(203, 215, 226, 0.8), -2px -2px 2px #ffffff;
    border-radius: 6px;
  }
`;

export default SkillBox;
