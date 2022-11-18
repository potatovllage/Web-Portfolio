import styled from "@emotion/styled";
import DefaultBtn from "../common/DefaultBtn";
import { useRecoilState } from "recoil";
import { MenuState } from "../../store/atom";
import { useState } from "react";
import About from "../about";

const BtnData = {
  data: [
    { value: "About", 0: <About /> },
    { value: "Resume", 1: "" },
    { value: "Portfolio", 2: "" },
  ],
};

const Main = () => {
  const [btnState, setBtnState] = useState(0);

  const onClickBtn = (idx: number) => {
    setBtnState(idx);
  };

  return (
    <Wrapper>
      <MenuContainer>
        {BtnData.data.map((data, idx) => (
          <DefaultBtn
            btnState={btnState === idx ? true : false}
            onClick={() => onClickBtn(idx)}
          >
            {data.value}
          </DefaultBtn>
        ))}
      </MenuContainer>
      <MainContainer>
        <About />
      </MainContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuContainer = styled.div`
  width: 395px;
  display: flex;
  justify-content: space-between;
`;

const MainContainer = styled.div`
  margin-top: 24px;
`;

export default Main;
