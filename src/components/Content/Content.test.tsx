import * as React from 'react';
import * as renderer from 'react-test-renderer';

import { Content } from './Content';

it('renders correctly', () => {
  const tree = renderer.create(<Content />).toJSON();
  expect(tree).toMatchSnapshot();
});
