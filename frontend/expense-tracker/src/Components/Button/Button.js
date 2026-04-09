import React from 'react'
import styled from 'styled-components'
export default function Button({ name, icon, bg, bpad, color, bRad }) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bpad,
            color: color,
            borderRadius: bRad

        }} onClick={onclick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;