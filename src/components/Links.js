import React from "react";
import ProfileImage from "../assets/profileImage.png";
import instagramIcon from "../assets/instagram.png";
import githubIcon from "../assets/github.png";
import twitterIcon from "../assets/twitter.png";
import mailIcon from "../assets/mail-logo.png";
import linkedin from "../assets/linkedIn.png";

const LinkButton = (props) => {
  return (
    <div className="links-btn">
      <img src={props.icon} alt="" className={props.className} />
      <h2>{props.name}</h2>
    </div>
  );
};

const Image = ({ src, alt, className, id }) => {
  return (
    <>
      <img src={src} alt={alt} className={className} id={id} />
    </>
  );
};

const Links = () => {
  return (
    <div className="links-div">
      <div className="profile_section">
        <div className="img_container">
          <Image
            src={ProfileImage}
            alt="profile"
            id="profile__img"
            className="profile-img"
          />
        </div>
        <div className="profile_section_content">
          <h1 id="">Angela Raphael</h1>
          <p id="">
            As a frontend developer, my passion lies in crafting beautiful and
            functional websites that provide an exceptional user experience.
            With years of experience in HTML, CSS, JavaScript and React, I have
            honed my skills to create responsive designs that are both
            aesthetically pleasing and intuitive to use.
          </p>
          <br />
          <p>
            My approach to frontend development involves a deep understanding of
            user behavior and psychology. By leveraging this knowledge, I can
            create websites that not only look great but also engage users on a
            deeper level.
          </p>
          <br />
          <p>
            In addition to my technical expertise, I am committed to staying
            up-to-date with the latest trends and best practices in frontend
            development. This allows me to deliver cutting-edge solutions that
            meet the evolving needs of clients across various industries.
          </p>
          <br />
          <p>
            Overall, my goal as a frontend developer is to create websites that
            are visually stunning, easy-to-use, and optimized for maximum
            performance.
          </p>
          <p>
            <bold>Send a message today.</bold>
          </p>
        </div>
      </div>

      <div className="links">
        <div className="link_section">
          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/gelaraph/"
            target="_blank"
            rel="noreferrer"
            id="instagram"
          >
            <LinkButton name="Instagram" icon={instagramIcon} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/angelaraph/"
            target="_blank"
            rel="noreferrer"
            id="youtube"
          >
            <LinkButton
              name="LinkedIn"
              icon={linkedin}
              className="linkedin-icon"
            />
          </a>
          {/* Github */}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            id="books"
            title="pinterest"
          >
            <LinkButton name="Github" icon={githubIcon} className="icon" />
          </a>

          {/* TWITTER */}
          <a
            href="https://twitter.com/gelaraph"
            target="_blank"
            rel="noreferrer"
            id="twitter"
          >
            <LinkButton name="Twitter" icon={twitterIcon} />
          </a>

          {/* E-MAIL */}
          <a
            href="/"
            target="_blank"
            title="Send an email"
            rel="noreferrer"
            id="email"
          >
            <LinkButton name="E-mail" icon={mailIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
