import { Table } from "./Table";

export default {
  title: "Components/Table",
  component: Table,
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