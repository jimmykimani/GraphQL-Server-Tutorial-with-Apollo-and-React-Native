import styled from "styled-components/native";
const white = "#FFFFFF";

const baseButtonStyles = `
  letter-spacing: 0.5px;
  font-size: 12px;
  color: ${white}
`;

const ButtonStyle = `
  ${baseButtonStyles}
  background-color:#4A4A4A;
    color: ${white}
`;

const StyledButton = styled.TouchableOpacity`
  ${ButtonStyle}
  align-items: center;
`;

const StyledButtonText = styled.Text`
  color: ${white};
  line-height: 19px;
`;

const ButtonText = styled.Text`
  font-family: WorkSans-SemiBold;
  color: ${white};
  line-height: 19px;
  justify-content: center;
  align-items: center;
`;

export { ButtonText, StyledButtonText, StyledButton };
