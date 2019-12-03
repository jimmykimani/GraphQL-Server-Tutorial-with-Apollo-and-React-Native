import React from "react";
import { mediumGray } from "../../constants/Colors";

import { StyledTextArea } from "./styled";

const TextArea = props => {
  const { ...rest } = props;
  return (
    <StyledTextArea
      keyboardAppearance="dark"
      placeholderTextColor={"#4a4a4a"}
      {...rest}
    />
  );
};

export default TextArea;
