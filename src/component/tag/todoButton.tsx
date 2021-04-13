import React from 'react';
import styled from 'styled-components';

import { TodoParagraph } from './todoParagraph';

interface ITodoButtonProps {
    string: string;
    bgColor?: string;
}

const TodoButtonStyled = styled.button`
    background: ${(props) => props.color};
    border: 1px solid lightgray;
    border-radius: 0.3rem;
    cursor: pointer;

    &:focus {
        outline: none;
        border: 1px solid rgb(65, 105, 225);
        box-shadow: 0 0 5px 0 rgb(65, 105, 225);
    }
`;

export const TodoButton: React.FC<ITodoButtonProps> = ({ string, bgColor }) => {
    const color = bgColor ? bgColor : 'rgb(255, 255, 250)';
    return (
        <TodoButtonStyled color={color}>
            <TodoParagraph string={string} />
        </TodoButtonStyled>
    );
};
