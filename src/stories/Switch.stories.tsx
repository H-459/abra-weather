import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SwitchComponent from "../Common/Switch";
import { IconFacebookLogo, IconMoonDark, IconSunDark } from "../Common/Icon";

export default {
  title: "Common/Switch",
  component: SwitchComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes:  {}
    // {onChange: { action: `clicked` },}
} as ComponentMeta<typeof SwitchComponent>;

let test = true;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchComponent> = (args) => (
  <SwitchComponent {...args} />

  );

export const Switch = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Switch.args = {
  id: "my-id",
  left: <IconMoonDark />,
  right: <IconSunDark />
};
