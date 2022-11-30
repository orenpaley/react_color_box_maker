import Box from "./Box";

import { render } from "@testing-library/react";

// test("renders learn react link", () => {
//   render(<BoxList />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("renders without crashing", () => {
  render(<Box id={1} key={1} height={50} width={50} backgroundColor={"red"} />);
});
it("matches snapshot", function () {
  const { asFragment } = render(
    <Box id={1} key={1} height={50} width={50} backgroundColor={"red"} />
  );
  expect(asFragment()).toMatchSnapshot();
});
