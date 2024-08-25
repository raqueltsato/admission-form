import { Meta, StoryFn } from "@storybook/react";
import Loading from "./index";
import GlobalProvider from "~/providers";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {},
} as Meta;

const Template: StoryFn = () => (
  <GlobalProvider>
    <Loading />
  </GlobalProvider>
);

export const Default = Template.bind({});
Default.args = {};
