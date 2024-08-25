import { Meta, StoryFn } from "@storybook/react";
import Header from "./index";
import { Props } from "./types";
import GlobalProvider from "~/providers";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <GlobalProvider>
    <Header {...args} />
  </GlobalProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Caju Front Teste",
};
