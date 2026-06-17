import { Text } from "./Text";

export default {
  title: "Components/Text",
  component: Text,
};

export const Default = {
  args: {
    text: "Sample Text",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Text",
    disabled: true,
  },
};