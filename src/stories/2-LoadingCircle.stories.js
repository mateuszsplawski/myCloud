import React from "react";

import { LoadingCircle } from "components/LoadingCircle/LoadingCircle";

export default {
  title: "LoadingCircle",
  component: LoadingCircle,
};

export const withoutProp = () => <LoadingCircle />;
