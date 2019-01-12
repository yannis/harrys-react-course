import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

import BandList from "./App";

const bands = [
  "The Beatles",
  "The Hollies",
  "Buffalo Springfield (just kidding!)"
];

it("checks that the ResultsTable component renders content from its props", () => {
  const bandListComponent = shallow(
    <BandList
      genre="British invasion"
      bands={bands}
    />
  );
  expect(
    bandListComponent.contains(<ul>{bands.map(band => <li key={band}>${band}</li>)}</ul>)
  );
});
