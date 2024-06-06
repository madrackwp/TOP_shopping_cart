import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter for routing components
import {} from "react-router-dom";

import Header from "../Header";
import App from "../App";

import { createMemoryHistory } from "history";

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

describe("Testing the routing", () => {
  it("Click the shop button and the path should be at /shop", async () => {
    const history = createMemoryHistory();

    // Render the App component within a Router context
    render(<App />);

    const homeButton = await screen.findByRole("button", {
      name: /home-button/i,
    });
    expect(homeButton).toBeInTheDocument();

    // Find the "Shop" button by its role and name
    const shopButton = screen.getByRole("button", { name: /shop-button/i });

    // Simulate a click event on the button
    await userEvent.click(shopButton);

    // Check if the current path is '/shop'
    expect(history.location.pathname).toBe("/shop");

    // Optionally, you can also check if the shop page heading is rendered
    const shopHeading = screen.getByRole("heading", {
      level: 2,
      name: /this is the shop page/i,
    });
    expect(shopHeading).toBeInTheDocument();
  });
});
