import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow } from "enzyme";

import ResultsTable from "./results-table";

const mockResult = {
  description: {
    en: "National Bank profits for the OASI"
  },
  results: [
    { canton: "AG", yes: 62092, no: 105546 },
    { canton: "AR", yes: 6337, no: 12406 },
    { canton: "AI", yes: 1181, no: 3522 },
    { canton: "BL", yes: 41764, no: 50047 },
  ]
}

it("checks that the ResultsTable component renders content from its props", () => {
  const tableComponent = shallow(<ResultsTable {...mockResult} />);
  expect(tableComponent.contains(<caption>{mockResult.description.en}</caption>));
});
