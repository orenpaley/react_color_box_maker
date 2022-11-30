import BoxList from "./BoxList";

import { render, fireEvent, getAllByLabelText } from "@testing-library/react";
import App from "./App";

// test("renders learn react link", () => {
//   render(<BoxList />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  render(<BoxList />);
});
// it("matches snapshot", function () {
//   const { asFragment } = render(<BoxList />);
//   expect(asFragment()).toMatchSnapshot();
// });

// it("should add have default items", function () {
//   const { queryByText } = render(<BoxList />);
//   const boxes = queryByText("height");
//   console.log(boxes);
//   const width = getByLabelText("Width");
//   const color = getByLabelText("Color");
//   const btn = queryByText("Add Box");
//   expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
//   fireEvent.change(input, { target: { value: "Chocolate Milk" } });
//   fireEvent.click(btn);
//   expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
// });

// it("should add new item", function () {
//   const { queryByText, getByLabelText } = render(<BoxList />);
//   const height = getByLabelText("Height");
//   const width = getByLabelText("Width");
//   const color = getByLabelText("Color");
//   const btn = queryByText("Add Box");
//   expect(queryByText("Product Name: Chocolate Milk")).not.toBeInTheDocument();
//   fireEvent.change(input, { target: { value: "Chocolate Milk" } });
//   fireEvent.click(btn);
//   expect(queryByText("Product Name: Chocolate Milk")).toBeInTheDocument();
// });
