import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    main {
        height: 70%;
        padding: 10%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        > h1 {
            font-size: 50px;
            color: ${({ theme }) => theme.COLORS.BLACK_90};
        }

        > span {
            font-size: 30px;
            color: ${({ theme }) => theme.COLORS.BLACK_90};
        }
    }

    div {
        display: flex;
        align-items: center;
        padding: 0 90px;
    }
`;