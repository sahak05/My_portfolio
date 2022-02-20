import React from 'react';
import { DiCode, DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id="tech">

      <SectionDivider />
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>I've worked with a range 
        of technologies from back-end to 
        front-end, some discovered in 
        my university studies and some 
        through my research. 
      </SectionText>

      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiCode size="3rem" />
          <ListContainer>
            <ListTitle>Others</ListTitle>
            <ListParagraph>
              Experience with <br />
              Things that i can complete later
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </div>
);

export default Technologies;
