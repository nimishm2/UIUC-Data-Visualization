import React from "react";
import ShallowRenderer from 'react-shallow-renderer';

// Components
import CountryMap from "../maps/CountryMap"

it('renders correctly react-test-renderer', () => {
  const renderer = new ShallowRenderer();
  renderer.render(<CountryMap />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});
