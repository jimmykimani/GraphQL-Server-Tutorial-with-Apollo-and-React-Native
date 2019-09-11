import React from "react";
import styled from "styled-components/native";

const chGray = "#E6E4E3";

const RowContainer = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  background-color: ${chGray};
  border-radius: 30px;
  width: 100%;
  margin-bottom: 24px;
  padding: 8px 16px;
`;

const StyledTextInput = styled.Text`
  /* font-family: WorkSans-Regular; */
  color: #4a4a4a;
  opacity: 0.8;
  font-size: 14px;
  line-height: 22px;
`;

const TextPlaceHolder = props => {
  const { text, onHolderPress } = props;
  return (
    <RowContainer activeOpacity={1} onPress={onHolderPress}>
      <StyledTextInput>{text}</StyledTextInput>
    </RowContainer>
  );
};

export default TextPlaceHolder;
