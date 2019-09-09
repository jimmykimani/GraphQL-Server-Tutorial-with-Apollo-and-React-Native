import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { ScrollView } from "react-native";
import gql from "graphql-tag";

import { NotesContainer, NotesWrapper } from "./styled";
import { Button, TextArea, KeyboardWrapper } from "../components";

const createPlayerMutation = gql`
  mutation {
    createNewNote(
      text: "To us, family means putting your arms around each other and being there"
    ) {
      id
      text
    }
  }
`;

class AddNoteScreen extends Component {
  constructor(props) {
    super(props);
    const { note, note: { photos = [] } = {} } = props.navigation.state.params;
    this.state = {
      note: (note && note.note) || ""
    };
  }

  render() {
    const { note } = this.state;
    return (
      <KeyboardWrapper>
        <NotesContainer>
          <ScrollView>
            <NotesWrapper>
              <TextArea
                autoFocus
                value={note}
                returnKeyType="next"
                placeholder={"Jot Something"}
                onChangeText={this._setnote}
              />
            </NotesWrapper>
          </ScrollView>
          <Button onHolderPress={() => this._posts()} title={"Add new note"} />
        </NotesContainer>
      </KeyboardWrapper>
    );
  }
}

export default AddNoteScreen;
