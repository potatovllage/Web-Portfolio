import styled from "@emotion/styled";
import NotifyBox from "./NotifyBox";
import Image from "next/image";
import mail from "../../assets/Icon/mail.svg";
import phone from "../../assets/Icon/phone.svg";
import calender from "../../assets/Icon/calender.svg";
import map from "../../assets/Icon/map.svg";
import GitHub from "../../assets/Icon/GitHub.svg";
import Instargram from "../../assets/Icon/Instagram.svg";
import hoverGitHub from "../../assets/Icon/hoverGitHub.svg";
import hoverInstagram from "../../assets/Icon/hoverInstagram.svg";
import Linkedin from "../../assets/Icon/Linkedin.svg";
import hoverLinkedin from "../../assets/Icon/hoverLinkedin.svg";
import myPhoto from "../../assets/myPhoto.svg";
import { useState } from "react";
import { openWindow } from "../../utils/function/openWindow";

interface hoverState {
  github: boolean;
  Linkedin: boolean;
  instagram: boolean;
}

const Profile = () => {
  const [isOver, setIsOver] = useState<hoverState>({
    github: false,
    Linkedin: false,
    instagram: false,
  });

  return (
    <CoverWrapper>
      <Wrapper>
        <Image width={196} height={196} src={myPhoto} alt="ProfileImg" />
        <Name>전영준</Name>
        <JobContainer>
          <p>Frontend Developer</p>
        </JobContainer>
        <HR />
        <NotifyBox
          type="EMAIL"
          img={mail}
          title="EMAIL"
          content="bluehome8626@naver.com"
        />
        <NotifyBox
          type="PHONE"
          img={phone}
          title="PHONE"
          content="010-4999-8626"
        />
        <NotifyBox
          type="BIRTHDAY"
          img={calender}
          title="Birthday"
          content="2005.04.10"
        />
        <NotifyBox
          type="LOCATION"
          img={map}
          title="Location"
          content="강원도 정선"
        />
        <IconContainer>
          <Image
            src={isOver.github ? hoverGitHub : GitHub}
            alt="icon"
            onClick={() => openWindow("https://github.com/potatovllage")}
            onMouseEnter={() => setIsOver({ ...isOver, github: true })}
            onMouseLeave={() => setIsOver({ ...isOver, github: false })}
          />
          <Image
            src={isOver.Linkedin ? hoverLinkedin : Linkedin}
            alt="icon"
            onClick={() =>
              openWindow("https://www.linkedin.com/in/영준-전-559058231/")
            }
            onMouseEnter={() => setIsOver({ ...isOver, Linkedin: true })}
            onMouseLeave={() => setIsOver({ ...isOver, Linkedin: false })}
          />
          <Image
            src={isOver.instagram ? hoverInstagram : Instargram}
            alt="icon"
            onClick={() =>
              openWindow("https://www.instagram.com/yeongjun_333/")
            }
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
  margin-right: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
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

  > img {
    margin-left: 48px;
  }
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
