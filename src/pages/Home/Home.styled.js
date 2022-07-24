import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 220px);
    gap: 16px;
`;

export const CardWrapper = styled.div`
    position: relative;
    > a {
        text-decoration: none;
    }
`;

export const MovieImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    border-radius: 4px;
    object-fit: cover;
`;

export const MovieName = styled.h3`
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    background-color: rgb(255 69 0 / 55%);
    border-radius: 4px;
    font-size: 16px;
    padding: 8px 0;
    margin-bottom: 0;
    margin-top: 0;
`;
