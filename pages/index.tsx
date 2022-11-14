import Profile from "../components/profile";
import FlexWrapper from "../components/common/FlexWrapper";
import Main from "../components/main";

export default function Home() {
  return (
    <FlexWrapper>
      <Profile />
      <Main />
    </FlexWrapper>
  );
}
