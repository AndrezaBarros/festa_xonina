import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    header {
        height: 20%;
        margin: 10%;

        > h1 {
            font-size: 40px;
        }
    }

    main {
        margin: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: center;

        > Button {
            width: 60%;
        }
    }
    
`;