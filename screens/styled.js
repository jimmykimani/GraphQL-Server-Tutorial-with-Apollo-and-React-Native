import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #fcfaf7;
`;

const NotesContainer = styled.View`
  flex: 1;
  background-color: #fcfaf7;
`;

const NotesWrapper = styled.View`
  padding: 20px;
`;

const PlaceholdeWrapper = styled.View`
  padding-top: 12px;
`;

const HeaderText = styled.Text`
  font-weight: 900;
  font-size: 36px;
  padding-bottom: 20px;
  color: #b89b72;
`;

export {
  Container,
  PlaceholdeWrapper,
  NotesContainer,
  NotesWrapper,
  HeaderText
};
