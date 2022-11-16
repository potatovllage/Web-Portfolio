import styled from "@emotion/styled";
import React from "react";
import { useRecoilState } from "recoil";
import { MenuState } from "../../store/atom";

interface Props {
  children: React.ReactNode;
}

const DefaultBtn = ({ children }: Props) => {
  const [btnState, setbtnState] = useRecoilState(MenuState);

  return (
    <DefaultContainer>
      <DefaultBtnBox state={btnState.stateValue}>{children}</DefaultBtnBox>
    </DefaultContainer>
  );
};

const DefaultContainer = styled.div`
  width: 125px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e7edf3;
  box-shadow: 5px 5px 16px rgba(203, 215, 226, 0.8), -5px -5px 16px #ffffff;
  border-radius: 14px;
`;

const DefaultBtnBox = styled.button<{ state: boolean }>`
  cursor: pointer;
  width: 121px;
  height: 44px;
  padding: 2px;
  background: #e7edf3;
  box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
    inset -3px -3px 8px #ffffff;
  border-radius: 14px;
  color: #377ab9;
  font-size: 16px;
  font-weight: 700;
  transition: all 0.5s;
  :hover {
    transition: all 0.5s;
    color: #629fd8;
    background: #f2f6fa;
    box-shadow: 3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff;
    border-radius: 16px;
  }
`;

export default DefaultBtn;
