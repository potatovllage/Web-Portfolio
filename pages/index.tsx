import Profile from "../components/profile";
import styled from "@emotion/styled";
import Main from "../components/main";

const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  height: fit-content;
`;

const ProfileContainer = styled.div`
  width: 344px;
  padding-bottom: 300px;
`;

const Focus = styled.div`
  border: 1px solid black;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
`;

export default function Home() {
  return (
    <>
      <Focus id="focus" />
      <FlexWrapper>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <Main />
      </FlexWrapper>
    </>
  );
}
