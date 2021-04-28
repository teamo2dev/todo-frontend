import { Meta } from '@storybook/react/types-6-0';

import { TodoButton } from './todoButton';

export default {
    title: 'Component/tag/TodoButton',
    component: TodoButton,
} as Meta;

export const Default = () => <TodoButton string="Default Btn" />;

export const WithBackgroundProps = () => (
    <TodoButton string="Custom Red Btn" bgColor="red" />
);
