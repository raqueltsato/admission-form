import { Meta, StoryFn } from "@storybook/react";
import TextField from "./index";
import { Props } from "./types";
import StylesProvider from "~/providers/StylesProvider";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <StylesProvider>
    <TextField {...args} />
  </StylesProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Nome",
  label: "Nome",
  error: "Nome deve ter sobrenome",
};
