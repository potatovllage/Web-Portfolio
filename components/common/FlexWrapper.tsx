import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const FlexWrapper = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 64px;
`;

export default FlexWrapper;
