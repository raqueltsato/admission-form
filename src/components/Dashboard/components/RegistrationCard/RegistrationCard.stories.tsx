import { Meta, StoryFn } from "@storybook/react";
import RegistrationCard from "./index";
import { Props } from "./types";
import { registrationsMock } from "~/mocks";

import GlobalProvider from "~/providers";

export default {
  title: "Components/RegistrationCard",
  component: RegistrationCard,
  parameters: {},
} as Meta;

const Template: StoryFn<Props> = (args: Props) => (
  <GlobalProvider>
    <RegistrationCard {...args} />
  </GlobalProvider>
);
export const Default = Template.bind({});
Default.args = {
  registration: registrationsMock[0],
};
