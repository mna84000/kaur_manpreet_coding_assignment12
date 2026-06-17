import { Card } from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = {
  args: {
    title: "Card Title",
    disabled: false,
  },
};

export const Disabled = {
  args: {
    title: "Disabled Card",
    disabled: true,
  },
};