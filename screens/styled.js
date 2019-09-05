import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  padding: 20px;
`;

const NotesContainer = styled.View`
  flex: 1;
`;

const NotesWrapper = styled.View`
  padding: 20px;
`;

const PlaceholdeWrapper = styled.View`
  padding-top: 10px;
`;

const HeaderText = styled.Text`
  font-weight: 900;
  font-size: 36px;
  padding-bottom: 20px;
  color: #595a5a;
`;

export {
  Container,
  PlaceholdeWrapper,
  NotesContainer,
  NotesWrapper,
  HeaderText
};
