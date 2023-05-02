import styled from "styled-components";

export const Container = styled.button`
    width: 100vw;
    height: 56px;
    margin-top: 24px;
    
    color: ${({ theme }) => theme.COLORS.BLACK_90};
    font-weight: 500;
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    &:disabled {
        opacity: 0.5;
    }
`;