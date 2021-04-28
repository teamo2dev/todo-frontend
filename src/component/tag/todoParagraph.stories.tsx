import { Meta } from '@storybook/react/types-6-0';

import { TodoParagraph } from './todoParagraph';

export default {
    title: 'Component/tag/TodoParagraph',
    component: TodoParagraph,
} as Meta;

export const Default = () => (
    <TodoParagraph string="Default TodoParagraph String" />
);

export const DefaultKorean = () => (
    <TodoParagraph string="기본 TodoParagraph 문구" />
);
