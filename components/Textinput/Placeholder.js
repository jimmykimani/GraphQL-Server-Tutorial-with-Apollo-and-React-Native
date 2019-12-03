import React from "react";
import styled from "styled-components/native";

const RowContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 12;
  flex-direction: row;
  background-color: #0165ff;
  border-radius: 18px;
  width: 30%;
  margin-bottom: 20px;
  padding: 8px 16px;
  align-items: center;
`;

const StyledTextInput = styled.Text`
  /* font-family: WorkSans-Regular; */
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
  font-weight: 700;
  align-items: center;
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
