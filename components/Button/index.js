import React from "react";
import { ifIphoneX } from "react-native-iphone-x-helper";

import { StyledButtonText, StyledButton } from "./styled";

const Button = props => {
  const { title, ...rest } = props;
  return (
    <StyledButton
      activeOpacity={0.7}
      color={"#0165ff"}
      underlayColor={"#0165ff"}
      {...rest}
    >
      <StyledButtonText
        style={{
          ...ifIphoneX(
            {
              paddingTop: 27,
              paddingBottom: 50
            },
            {
              paddingTop: 27,
              paddingBottom: 26
            }
          )
        }}
      >
        {title.toUpperCase()}
      </StyledButtonText>
    </StyledButton>
  );
};

export default Button;
