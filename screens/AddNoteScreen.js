import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { ScrollView } from "react-native";

import { NotesContainer, NotesWrapper } from "./styled";
import {
  Button,
  TextArea,
  KeyboardWrapper
} from "../components";

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
