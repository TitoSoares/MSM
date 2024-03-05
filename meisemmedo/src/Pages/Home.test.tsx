import Home from "./Home";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

it('Encontrar Saiba Mais na Home', () =>{

    render(
        <MemoryRouter>
            <Home />
        </MemoryRouter>
    );

    let button = screen.getByText('Saiba Mais')
    expect (button).toBeInTheDocument();

});
export{}