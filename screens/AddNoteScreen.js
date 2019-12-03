import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
import { ScrollView } from "react-native";
//import Mutation component for performing queries.
import { Mutation } from "react-apollo";
// import gql from graphql-tag to define your graphql schema
import gql from "graphql-tag";

import { NotesContainer, NotesWrapper } from "./styled";
import { Button, TextArea, KeyboardWrapper } from "../components";

const CREATE_NOTE = gql`
  mutation CreateNote($text: String!) {
    createNewNote(text: $text) {
      id
      text
    }
  }
`;

const GET_NOTES = gql`
  query {
    notes {
      id
      text
    }
  }
`;

class AddNoteScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ""
    };
  }

  _addNote = postAction => {
    const { note } = this.state;
    const { navigation } = this.props;
    return (
      <Button
        onPress={() =>
          postAction({
            variables: { text: note }
          }).then(navigation.goBack())
        }
        title={"Add new note"}
      />
    );
  };

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
                //onChangeText is basically a simplified version of onChange,
                //so you can easily use it, without the hassle of going through event.target.value to get changed value.
                onChangeText={text => this.setState({ note: text })}
              />
            </NotesWrapper>
          </ScrollView>
          <Mutation
            mutation={CREATE_NOTE}
            update={(store, { data: { createNewNote } }) => {
              const data = store.readQuery({ query: GET_NOTES });
              store.writeQuery({
                query: GET_NOTES,
                data: { notes: data.notes.concat([createNewNote]) }
              });
            }}
          >
            {(postAction, { loading, error }) => {
              return this._addNote(postAction);
            }}
          </Mutation>
        </NotesContainer>
      </KeyboardWrapper>
    );
  }
}

export default AddNoteScreen;
