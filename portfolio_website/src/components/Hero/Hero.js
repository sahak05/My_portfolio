import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My personal Portfolio
      </SectionTitle>
      <SectionText>
      Currently in the last year of a bachelor's degree in computer science at Montreal University,
      I am particularly interested in software programming, Full Stack Development and Leetcode.
      I am seeking for 2022 New Grad opportunities that will allow me to expand my knowledge in the workplace and gain experience.
      Feel free to reach out and connect.
      </SectionText>
      <Button onClick={()=>window.location='https://github.com/sahak05'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;