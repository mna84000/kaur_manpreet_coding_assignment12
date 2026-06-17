import { Dropdown } from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
};

export const Default = {
  args: {
    disabled: false,
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};