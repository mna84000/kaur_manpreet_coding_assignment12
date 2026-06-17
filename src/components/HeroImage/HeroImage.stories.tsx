import { HeroImage } from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
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