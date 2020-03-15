import * as React from 'react';
import { check } from '../../util/icons';
import { Wrapper, ListFlexParent, ItemFlexChild, ItemTitleWrapper } from './styles';
import Typography from '../Typography';
import mockCheckBoxList from './data';

interface Props {
  twoColumns?: boolean;
}

export const NewsList: React.FC<Props> = ({ twoColumns }) => {
  const { sectionTitle, list } = mockCheckBoxList;
  return (
    <Wrapper>
      <Typography content={sectionTitle} element="h2" variant="h1" align="center" />
      <ListFlexParent twoColumns={twoColumns}>
        {(list || []).map((box, index) => (
          <ItemFlexChild key={index} twoColumns={twoColumns}>
            {!!box.title && (
              <ItemTitleWrapper>
                {check}
                <Typography element="h3" variant="h3" isPrimaryColor content={box.title} />
              </ItemTitleWrapper>
            )}
            {!!box.content && (
              <Typography element="p" variant="b1" isPrimaryColor content={box.content} />
            )}
          </ItemFlexChild>
        ))}
      </ListFlexParent>
    </Wrapper>
  );
};

export default NewsList;
