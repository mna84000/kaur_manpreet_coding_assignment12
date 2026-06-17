import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    text: "Click Me",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    text: "Disabled Button",
    disabled: true,
  },
};