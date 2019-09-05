import styled from "styled-components/native";

const BaseStyles = `

  border-width: 1px;
  border-style: solid;
  width: 100%;
  padding: 10px 16px;
`;
const InputStyles = `
  ${BaseStyles}
  font-size: 16px;
`;

const StyledTextArea = styled.TextInput`
  ${InputStyles}
  flex: 1;
  background-color: transparent;
  border-radius: 0;
  padding-left: 0px;
  opacity: 0.7;
  border-width: 0;
  font-size: 20px;
  margin-bottom: 0;
  /* font-family: WorkSans-Regular; */
`;

export { StyledTextArea };
