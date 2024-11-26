import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button component", () => {
  it("deve renderizar corretamente com as props padrão", () => {
    render(<Button />);

    const button = screen.getByRole("button");

    expect(button).toHaveStyle("padding: 10px");
    expect(button).toHaveStyle("margin: 15px");
    expect(button).toHaveStyle("color: white");
    expect(button).toHaveStyle("background: green");
    expect(button).toHaveStyle("cursor: pointer");
    expect(button).toHaveStyle("border-radius: 5px");
  });

  it("deve renderizar corretamente com props customizadas", () => {
    render(
      <Button
        padding="20px"
        margin="10px"
        color="black"
        background="blue"
        cursor="not-allowed"
      />
    );
    const button = screen.getByRole("button");

    expect(button).toHaveStyle("padding: 20px");
    expect(button).toHaveStyle("margin: 10px");
    expect(button).toHaveStyle("color: black");
    expect(button).toHaveStyle("background: blue");
    expect(button).toHaveStyle("cursor: not-allowed");
  });

  it("deve responder ao evento de clique", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
