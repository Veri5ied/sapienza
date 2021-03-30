import React from "react"
import Input from "./Input";

export default {
    title: "Input Field",
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const InputTag = Template.bind({});