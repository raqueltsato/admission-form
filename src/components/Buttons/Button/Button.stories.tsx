import { Meta, StoryFn } from "@storybook/react";
import Button from "./index";
import { Props } from "./types";
import GlobalProvider from "~/providers";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "REVIEW",
          "APPROVED",
          "REPROVED",
        ] as Props["variant"][],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
  },
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <GlobalProvider>
    <Button {...args} />
  </GlobalProvider>
);

export const Default = Template.bind({});
Default.args = {
  children: "Cadastrar",
};
