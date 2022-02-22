import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
//import pdf from "./cv.pdf"

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <LinkList>
          <LinkColumn>
            <LinkTitle>Email</LinkTitle>
            <LinkItem href='mailto:sadikouhak@gmail.com'>sadikouhak@gmail.com</LinkItem>
          </LinkColumn>

          {/* a revoir ave cv <LinkColumn>
            <LinkTitle>CV</LinkTitle>
            <LinkItem href={pdf} target="_blank" rel="noreferrer">Here my resume</LinkItem>
          </LinkColumn> */}
        </LinkList>

        <SocialIconsContainer>
          <CompanyContainer>
            <Slogan> One step at the time </Slogan>
          </CompanyContainer>
          <SocialContainer>
          <SocialIcons href='https://github.com'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://linkedin.com'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>

      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem'/>
      </SocialIcons>
      </SocialContainer>
        </SocialIconsContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
