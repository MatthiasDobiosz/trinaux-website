import { render, screen, fireEvent } from '@testing-library/react';
import AnimatedSlider from "../AnimatedSlider";
import { BrowserRouter as Router } from 'react-router-dom';
import "@testing-library/jest-dom/extend-expect";


describe("AnimatedSlider testing", () => {

    test("should Render new Picture", async() => {
        render(<AnimatedSlider pictures = {["code_snakk.jpg", "background-pattern.jpg"]} titles={["hey", "jp"]}/>);
        const currentImgElement = await screen.findByRole("img");
        expect(currentImgElement).toHaveAttribute('src', 'code_snakk.jpg');
        const nextButton = screen.getByTestId("next-btn");
        fireEvent.click(nextButton);
        const nextImgElement = await screen.findByRole("img");
        expect(nextImgElement).toHaveAttribute('src', 'background-pattern.jpg');
        const prevButton = screen.getByTestId("prev-btn");
        fireEvent.click(prevButton);
        const previousImgElement = await screen.findByRole("img");
        expect(previousImgElement).toHaveAttribute('src', 'code_snakk.jpg');

    })

})