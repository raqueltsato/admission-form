import { Meta, StoryFn } from "@storybook/react";
import Modal from "./index";
import { Props } from "./types";
import StylesProvider from "~/providers/StylesProvider";

export default {
  title: "Components/Modal",
  component: Modal,
  argTypes: {},
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <StylesProvider>
    <Modal {...args} />
  </StylesProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Cadastrar novo funcionário",
  description: "Deseja prosseguir com a ação?",
  isOpen: true,
};
