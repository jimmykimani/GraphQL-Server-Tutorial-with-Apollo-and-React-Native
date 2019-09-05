import React from "react";
import {
  mediumGray
} from "../../constants/Colors";

import { StyledTextArea } from "./styled";

const TextArea = props => {
  const { ...rest } = props;
  return <StyledTextArea placeholderTextColor={mediumGray} {...rest} />;
};

export default TextArea;
