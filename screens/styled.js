import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #02030d;
`;

const NotesContainer = styled.View`
  flex: 1;
  background-color: #02030d;
`;

const NotesWrapper = styled.View`
  padding: 20px;
`;

const PlaceholdeWrapper = styled.View`
  padding-top: 12px;
  align-items: center;
  background: transparent;
`;

const HeaderText = styled.Text`
  font-weight: 900;
  font-size: 36px;
  padding-bottom: 20px;
  color: #edf0f6;
`;

export {
  Container,
  PlaceholdeWrapper,
  NotesContainer,
  NotesWrapper,
  HeaderText
};
