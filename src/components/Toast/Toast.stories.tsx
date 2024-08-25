import { Meta, StoryFn } from "@storybook/react";
import Toast, { showToast } from "./index";
import { Props, Variant } from "./types";
import StylesProvider from "~/providers/StylesProvider";
import { useEffect } from "react";

export default {
  title: "Components/Toast",
  component: Toast,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["success", "error"] as Variant[],
      },
    },
  },
} as Meta<Props>;

const Template: StoryFn<Props> = (args: Props) => {
  useEffect(() => {
    showToast({
      variant: args.variant,
      message: args.message,
    });
  }, [args.variant, args.message]);

  return (
    <StylesProvider>
      <Toast />
    </StylesProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "error",
  message: "Erro ao listar registros.",
};
