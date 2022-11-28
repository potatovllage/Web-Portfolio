import styled from "@emotion/styled";
import React from "react";

interface Props {
  children: React.ReactNode;
  btnState: boolean;
  onClick: () => void;
}

const DefaultBtn = ({ children, btnState, onClick }: Props) => {
  return (
    <DefaultContainer state={btnState}>
      <DefaultBtnBox onClick={onClick} state={btnState}>
        {children}
      </DefaultBtnBox>
    </DefaultContainer>
  );
};

const DefaultContainer = styled.div<{ state: boolean }>`
  width: 125px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e7edf3;
  box-shadow: ${({ state }) =>
    state
      ? ""
      : "5px 5px 16px rgba(203, 215, 226, 0.8), -2px -5px 16px #ffffff"};
  border-radius: 14px;
`;

const DefaultBtnBox = styled.button<{ state: boolean }>`
  cursor: ${({ state }) => (state ? "" : "pointer")};
  width: 121px;
  height: 44px;
  padding: 2px;
  background: ${({ state }) => (state ? "#377AB9" : "#E7EDF3")};
  box-shadow: ${({ state }) =>
    state
      ? "3px 3px 8px rgba(203, 215, 226, 0.8), 0px -3px 8px #FFFFFF"
      : "inset 3px 3px 8px rgba(203, 215, 226, 0.8), inset -3px -3px 8px #FFFFFF"};
  border-radius: 14px;
  color: ${({ state }) => (state ? "#FFFFFF" : "#377AB9")};
  font-size: 16px;
  font-weight: 700;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  :hover {
    color: ${({ state }) => (state ? "" : "#629fd8")};
    background: ${({ state }) => (state ? "" : "#f2f6fa")};
    box-shadow: ${({ state }) =>
      state
        ? ""
        : "3px 3px 8px rgba(203, 215, 226, 0.8), -3px -3px 8px #ffffff"};
    border-radius: ${({ state }) => (state ? "" : "16px")};
  }
`;

export default DefaultBtn;
