import Profile from "../components/profile";
import FlexWrapper from "../components/common/FlexWrapper";
import Main from "../components/main";
import UpButton from "../components/common/UpButton";

export default function Home() {
  return (
    <FlexWrapper>
      <Profile />
      <Main />
      <UpButton />
    </FlexWrapper>
  );
}
