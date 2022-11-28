import styled from "@emotion/styled";
import DefaultBtn from "../common/DefaultBtn";
import { useState } from "react";
import About from "../about";
import Portfolio from "../portfolio";
import Resume from "../resume";
import UpButton from "../common/UpButton";

const BtnData = {
  data: [{ value: "About" }, { value: "Resume" }, { value: "Portfolio" }],
};
const tab: any = {
  0: <About />,
  1: <Resume />,
  2: <Portfolio />,
};

const Main = () => {
  const [btnState, setBtnState] = useState(0);

  const onClickBtn = (idx: number) => {
    setBtnState(idx);
  };

  return (
    <>
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
        <MainContainer>{tab[btnState]}</MainContainer>
      </Wrapper>
      <UpBtnContainer>
        <UpButton />
      </UpBtnContainer>
    </>
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
  padding-right: 40px;
`;

const UpBtnContainer = styled.div`
  position: relative;
`;

export default Main;
