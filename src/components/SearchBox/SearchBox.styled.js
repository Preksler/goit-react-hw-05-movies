import styled from "styled-components";

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
    padding: 8px 32px 8px 8px;
    border-radius: 4px;
    border-color: rgb(255 69 0);
    border-style: solid;
    border-width: 1px;
    margin-right: 4px;
`;

export const Button = styled.button`
    padding: 8px;
    border-radius: 4px;
    background-color: rgb(255 69 0);
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
    }
`;
