import styled from "@emotion/styled";
import DefaultBtn from "../common/DefaultBtn";

const BtnData = {
  data: [{ value: "About" }, { value: "Resume" }, { value: "Portfolio" }],
};

const Main = () => {
  return (
    <Wrapper>
      <MenuContainer>
        {BtnData.data.map((data, idx) => (
          <DefaultBtn value={data.value} />
        ))}
      </MenuContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const MenuContainer = styled.div`
  width: 389px;
  display: flex;
  justify-content: space-between;
`;

export default Main;
