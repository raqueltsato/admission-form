import { Meta, StoryFn } from "@storybook/react";
import IconButton from "./index";
import { Props } from "./types";
import GlobalProvider from "~/providers";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    iconName: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <GlobalProvider>
    <IconButton {...args} />
  </GlobalProvider>
);

export const Default = Template.bind({});
Default.args = {
  iconName: HiOutlineArrowLeft,
  size: 24,
};
