import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 100%;
    height: 75vh;
    min-height: 350px;
    background-color: #FFF;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`