import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { ScrollView } from "react-native";

import { Container, PlaceholdeWrapper, HeaderText } from "./styled";
import { Button, NoteCard, TextPlaceHolder } from "../components";

class HomeScreen extends Component {
  _addNewNote = () => {
    const { navigation } = this.props;
    navigation.navigate("NewNote", {});
  };

  render() {
    return (
      <Container>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderText>My Notes</HeaderText>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </ScrollView>
        <PlaceholdeWrapper>
          <TextPlaceHolder
            onHolderPress={() => this._addNewNote()}
            text={"Add new note"}
          />
        </PlaceholdeWrapper>
      </Container>
    );
  }
}

export default HomeScreen;
