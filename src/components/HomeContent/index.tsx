import * as React from 'react';

interface Props {}

export const HomeContent: React.FunctionComponent<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default HomeContent;
