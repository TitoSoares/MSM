import FuncaoGov from "./FuncaoGov";
import { render, screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'


it('Encontrar Saiba Mais na Home', () =>{

    const {container} =  render(
        <MemoryRouter>
            <FuncaoGov />
        </MemoryRouter>
    );

    expect(container.getElementsByClassName('FuncaoGov').length)
        .toBe(8)


});
export{}