import React from 'react';
import styled from 'styled-components';

interface ITodoParagraphProps {
    string: string;
}

const TodoParagraphStyled = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200&family=Poor+Story&display=swap');
    font-family: 'Nunito', 'Poor Story', sans-serif;
`;

export const TodoParagraph: React.FC<ITodoParagraphProps> = ({ string }) => {
    return <TodoParagraphStyled>{string}</TodoParagraphStyled>;
};
