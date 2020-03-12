import * as React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Heading from './';

const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const mockContent: string = 'Neque porro quisquam dolorem';

storiesOf('Component/Heading', module)
  .add('Default', () => (
    <Wrapper>
      <Heading content={mockContent} isPrimaryColor />
    </Wrapper>
  ))
  .add('Variant', () => (
    <Wrapper>
      <Heading content={mockContent} />
    </Wrapper>
  ));
