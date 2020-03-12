import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import HomeContent from './';
import Heading from '../Heading';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mockHeading = <Heading content="Neque porro quisquam dolorem" isPrimaryColor />;

storiesOf('Component/HomeContent', module).add('Default', () => (
  <Wrapper>
    <HomeContent>{mockHeading}</HomeContent>
  </Wrapper>
));
