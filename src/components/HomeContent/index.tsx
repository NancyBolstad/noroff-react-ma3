import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${props => props.theme.spacing.m}rem;
  max-width: 1440px;
  margin: 0 auto;
`;

interface Props {
  children: React.ReactNode[];
}

export const HomeContent: React.FunctionComponent<Props> = ({ children }) => {
  if (!children) return null;
  return (
    <Wrapper>
      {(children || []).map((child, index) => {
        return <div key={index}>{child}</div>;
      })}
    </Wrapper>
  );
};

export default HomeContent;
