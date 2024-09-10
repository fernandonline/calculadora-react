import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 12vh;
    background: var(--display);

    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 2rem;
    font-family: 'Roboto';

    input {
        width: 100%;
        height: 100%;
        padding: 0 2rem;
        background: var(--display);
        border: 0;
        font-size: 2rem;
        font-family: 'Roboto';
        color: #fff;
    }
`