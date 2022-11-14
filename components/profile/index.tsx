import styled from "@emotion/styled";
import NotifyBox from "./NotifyBox";
import Image from "next/image";
import mail from "../../assets/Icon/mail.svg";
import phone from "../../assets/Icon/phone.svg";
import calender from "../../assets/Icon/calender.svg";
import map from "../../assets/Icon/map.svg";
import GitHub from "../../assets/Icon/GitHub.svg";
import Facebook from "../../assets/Icon/Facebook.svg";
import Instargram from "../../assets/Icon/Instagram.svg";
import hoverGitHub from "../../assets/Icon/hoverGitHub.svg";
import hoverInstagram from "../../assets/Icon/hoverInstagram.svg";
import hoverFacebook from "../../assets/Icon/hoverFacebook.svg";
import { useState } from "react";

interface hoverState {
  github: boolean;
  facebook: boolean;
  instagram: boolean;
}

const Profile = () => {
  const [isOver, setIsOver] = useState<hoverState>({
    github: false,
    facebook: false,
    instagram: false,
  });

  return (
    <CoverWrapper>
      <Wrapper>
        <ProfileImg src=";" alt="ProfileImg" />
        <Name>OOO</Name>
        <JobContainer>
          <p>Backend Developer</p>
        </JobContainer>
        <HR />
        <NotifyBox
          imgURL={mail}
          title="EMAIL"
          content="leejeongyoon0411@g..."
        />
        <NotifyBox imgURL={phone} title="PHONE" content="000-0000-0000" />
        <NotifyBox imgURL={calender} title="Birthday" content="0000.00.00" />
        <NotifyBox imgURL={map} title="Location" content="어디사시나효" />
        <IconContainer>
          <Image
            src={isOver.github ? hoverGitHub : GitHub}
            alt="icon"
            onMouseEnter={() => setIsOver({ ...isOver, github: true })}
            onMouseLeave={() => setIsOver({ ...isOver, github: false })}
          />
          <Image
            src={isOver.facebook ? hoverFacebook : Facebook}
            alt="icon"
            onMouseEnter={() => setIsOver({ ...isOver, facebook: true })}
            onMouseLeave={() => setIsOver({ ...isOver, facebook: false })}
          />
          <Image
            src={isOver.instagram ? hoverInstagram : Instargram}
            alt="icon"
            onMouseEnter={() => setIsOver({ ...isOver, instagram: true })}
            onMouseLeave={() => setIsOver({ ...isOver, instagram: false })}
          />
        </IconContainer>
      </Wrapper>
    </CoverWrapper>
  );
};

const CoverWrapper = styled.div`
  width: 300px;
  height: 816px;
  background: #e7edf3;
  box-shadow: 5px 5px 16px rgba(203, 215, 226, 0.8), -5px -5px 16px #ffffff;
  border-radius: 32px;
`;

const Wrapper = styled.div`
  width: 292px;
  height: 808px;
  padding: 48px 0 20px 0;
  display: flex;
  flex-direction: column;
  background: #e7edf3;
  box-shadow: inset 5px 5px 16px rgba(203, 215, 226, 0.8),
    inset -5px -5px 16px #ffffff;
  border-radius: 28px;
`;

const ProfileImg = styled.img`
  width: 196px;
  height: 196px;
  margin-left: 48px;
  filter: drop-shadow(3px 3px 8px rgba(203, 215, 226, 0.8))
    drop-shadow(-3px -3px 8px #ffffff);
  border-radius: 16px;
`;

const Name = styled.p`
  width: 100px;
  margin-top: 32px;
  font-size: 26px;
  font-weight: 700;
  margin-left: 112px;
  color: #082642;
`;

const JobContainer = styled.div`
  width: 162px;
  height: 30px;
  margin-top: 16px;
  margin-left: 65px;
  background: #f2f6fa;
  box-shadow: 2px 2px 2px rgba(203, 215, 226, 0.8),
    -2px -2px 2px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    background: #f2f6fa;
    color: #082642;
    font-size: 14px;
    font-weight: 400;
  }
`;

const HR = styled.hr`
  width: 236px;
  height: 4px;
  margin-top: 40px;
  margin-left: 28px;
  background: #f2f6fa;
  background: #f2f6fa;
  box-shadow: inset 2px 2px 2px rgba(203, 215, 226, 0.8);
  border-radius: 2px;
`;

const IconContainer = styled.div`
  width: 112px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 90px;
  margin-top: 28px;

  > img {
    cursor: pointer;
  }
`;

export default Profile;
