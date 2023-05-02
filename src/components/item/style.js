import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img {
        height: 50px;
        width: 60px;

        border: 1px solid transparent;
        border-radius: 50%;
    }

    font-size: 20px;

    div {
        width: 20%;
        padding: 0;
        display: flex;
        justify-content: space-between;

        > button {
            width: 20px;
            height: 20px;
            padding: 0;
            margin: 0;

            background: transparent;

            border-radius: 50%;
            border: none;

            font-size: 20px;
        }
    }
`;