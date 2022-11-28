import styled from "@emotion/styled";
import up from "../../assets/Icon/up.svg";
import Image from "next/image";

const UpButton = () => {
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <UpButtonCover onClick={goToTop}>
      <UpButtonWrapper>
        <Image src={up} alt="up" />
      </UpButtonWrapper>
    </UpButtonCover>
  );
};

const UpButtonCover = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  :active {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #e7edf3;
    box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
  }
`;

const UpButtonWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #e7edf3;
  box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;

  > img {
    -ms-user-select: none;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  :hover {
    background: #f2f6fa;
    > img {
      background: #f2f6fa;
    }
  }

  :active {
    background: #e7edf3;
    box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
      inset -3px -3px 8px #ffffff;

    > img {
      background-color: #e7edf3;
    }
  }
`;

export default UpButton;
