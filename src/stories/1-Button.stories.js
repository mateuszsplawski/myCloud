import React from "react";

import { Button } from "components/Button/Button";

export default {
  title: "Button",
  component: Button,
};

export const withoutProp = () => <Button />;
export const withTextProp = () => <Button text={"Default button"} />;
export const withHandleClickFn = () => (
  <Button handleClick={() => alert("It's working")} />
);
