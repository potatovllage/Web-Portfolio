import styled from "@emotion/styled";
import Image from "next/image";
import { useState } from "react";
import { openWindow } from "../../utils/function/openWindow";

type NotifyType = "EMAIL" | "PHONE" | "BIRTHDAY" | "LOCATION";

interface Props {
  type: NotifyType;
  imgURL: string;
  title: string;
  content: string;
}

const NotifyBox = ({ type, content, imgURL, title }: Props) => {
  const [select, setSelect] = useState<boolean>(false);

  const onClickNotify = () => {
    if (type === "EMAIL") {
      openWindow("mailto:bluehome8626@naver.com");
    } else {
    }
  };

  const onSelectType = () => {
    if (type === "EMAIL") {
      setSelect(true);
    } else {
      setSelect(false);
    }
  };

  return (
    <Wrapper>
      <IconContainer>
        <Image width={32} height={32} src={imgURL} alt="icon" />
      </IconContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Content
          select={select}
          onMouseEnter={onSelectType}
          onClick={onClickNotify}
        >
          {content.length > 19 ? (
            <>{content.substring(0, 18)}...</>
          ) : (
            <>{content}</>
          )}
        </Content>
      </ContentContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 236px;
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: 28px;
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  background: #e7edf3;
  box-shadow: 2px 2px 2px rgba(203, 215, 226, 0.8), -2px -2px 2px #ffffff;
  border-radius: 16px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 14px;
  color: #629fd8;
`;

const Content = styled.p<{ select: boolean }>`
  width: 164px;
  font-weight: 400;
  font-size: 16px;
  color: #082642;
  cursor: ${({ select }) => (select ? "pointer" : "auto")};
`;

export default NotifyBox;
