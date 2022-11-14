import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width?: number;
  defaultColor?: boolean;
}

const DefaultBtn = ({ type = "button", ...props }: Props) => {
  return (
    <DefaultContainer>
      <DefaultBtnBox type={type} {...props} />
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

const DefaultBtnBox = styled.input<{ width?: number }>`
  cursor: pointer;
  width: ${({ width }) => (width ? `${width}px` : `121px`)};
  height: 44px;
  padding: 2px;
  background: #e7edf3;
  box-shadow: inset 3px 3px 8px rgba(203, 215, 226, 0.8),
    inset -3px -3px 8px #ffffff;
  border-radius: 14px;
  color: #377ab9;
  font-size: 16px;
  font-weight: 700;
`;

export default DefaultBtn;
