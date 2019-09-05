import React from "react";
import styled from "styled-components/native";

const chGray = "#F5F5F5";
const strokeGray = "#E6E6E6";

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
  color: #a2a2a2;
  opacity: 0.8;
  font-size: 16px;
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
