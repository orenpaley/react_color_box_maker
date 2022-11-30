import NewBoxForm from "./NewBoxForm";
import { Boxes, addBox } from "./BoxList";

import { fireEvent, render } from "@testing-library/react";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

// test("renders learn react link", () => {
//   render(<BoxLisst />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  render(<NewBoxForm addBox={addBox} />);
});
it("matches snapshot", function () {
  const { asFragment } = render(<NewBoxForm addBox={addBox} />);
  expect(asFragment()).toMatchSnapshot();
});

it("changes values of sliders", () => {
  const { getByLabelText, queryByText } = render(
    <NewBoxForm addBox={addBox} />
  );
  let height = getByLabelText("Height");
  let width = getByLabelText("Width");
  let color = getByLabelText("Color");
  const btn = queryByText("Add Box");
  expect(400).not.toBeInTheDocument();
  fireEvent.change(height, { target: { value: 400 } });
  expect(400).toBeInTheDocument();
  expect(500).not.toBeInTheDocument();
  fireEvent.change(width, { target: { value: 500 } });
  expect(500).toBeInTheDocument();
  fireEvent.change(color, { target: { value: "pink" } });
  expext(Boxes).length.not.toBe(4);
  fireEvent.click(btn);
  expext(Boxes).length.toBe(4);
});
