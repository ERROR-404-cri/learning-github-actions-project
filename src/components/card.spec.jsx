import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./card";
import { describe, it, expect } from "@jest/globals";

describe("test Card", () => {
  it("should render card successfully", () => {
    render(<Card />);

    const cardContainer = screen.getByTestId("Card-container");
    expect(cardContainer).toBeInTheDocument();
  });
});
