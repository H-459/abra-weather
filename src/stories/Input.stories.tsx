import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputComponent from '../Common/Input';

export default {
  title: 'Common/Input',
  component: InputComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} as ComponentMeta<typeof InputComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputComponent> = (args) => <InputComponent {...args} />;

export const Input = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Input.args = {
    title: "default title",
    placeholder:"This is my place holder",



};

