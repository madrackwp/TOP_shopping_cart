import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";

describe("App", () => {
  it("renders headline", () => {
    render(<App title="React" />);

    // screen.debug();

    // check if App components renders headline
  });

  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

// describe("The shop name should be at the top", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/racky's wares/i);
//   });
// });

it("renders radical rhinos after button click", async () => {
  const user = userEvent.setup();

  render(<App />);
  const button = screen.getByRole("button", { name: "Shop" });

  await user.click(button);

  expect(screen.getByRole("heading").textContent).toMatch(
    /this is the shop page/i
  );
});
