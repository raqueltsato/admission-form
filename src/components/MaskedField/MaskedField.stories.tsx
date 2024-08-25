import { Meta, StoryFn } from "@storybook/react";
import MaskedField from "./index";

import { Props } from "./types";
import StylesProvider from "~/providers/StylesProvider";

export default {
  title: "Components/MaskedField",
  component: MaskedField,
  argTypes: {},
} as Meta<Props>;

const Template: StoryFn = (args: Props) => (
  <StylesProvider>
    <MaskedField {...args} />
  </StylesProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: "12345678910",
  label: "Digite o CPF",
};
