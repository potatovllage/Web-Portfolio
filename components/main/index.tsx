import styled from "@emotion/styled";
import DefaultBtn from "../common/DefaultBtn";
import { useRecoilState } from "recoil";
import { MenuState } from "../../store/atom";
import { useState } from "react";

const BtnData = {
  data: [{ value: "About" }, { value: "Resume" }, { value: "Portfolio" }],
};

const Main = () => {
  const [btnState, setbtnState] = useRecoilState(MenuState);
  const [cur, setCur] = useState<number>();

  const onClickBtn = (num: number, value: string) => {
    setbtnState({ stateValue: true, typeValue: value });
    setCur(num);
  };

  return (
    <Wrapper>
      <MenuContainer>
        {BtnData.data.map((data, idx) => (
          <DefaultBtn
            btnState={(idx + 1) * 10 === cur}
            onClick={() => onClickBtn((idx + 1) * 10, data.value)}
          >
            {data.value}
          </DefaultBtn>
        ))}
      </MenuContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  width: 395px;
  display: flex;
  justify-content: space-between;
`;

export default Main;
