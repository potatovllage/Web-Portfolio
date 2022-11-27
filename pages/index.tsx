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

export default function Home() {
  return (
    <FlexWrapper>
      <ProfileContainer>
        <Profile />
      </ProfileContainer>
      <Main />
    </FlexWrapper>
  );
}
