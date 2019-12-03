import React, { Component } from "react";
import {
  ScrollView,
  FlatList,
  ActivityIndicator,
  View,
  Alert
} from "react-native";
import ActionSheet from "react-native-actionsheet";
//Import the Query component from react apollo that will responsible for retrieving data from your graphql server.
import { Query, Mutation } from "react-apollo";
//import gql from graphql-tag for making queries to our graphql server.
import gql from "graphql-tag";

import { Container, PlaceholdeWrapper, HeaderText } from "./styled";
import { Button, NoteCard, TextPlaceHolder } from "../components";

//Define your query variable which is the query responsible for retrieving data
//This will query all notes
const GET_NOTES = gql`
  query {
    notes {
      id
      text
    }
  }
`;

const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id) {
      id
      text
    }
  }
`;

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteId: null
    };
  }

  _addNewNote = () => {
    const { navigation } = this.props;
    navigation.navigate("NewNote", {});
  };

  _renderItem({ item }) {
    //Return the UI
    // It will return a list of alll notes
    return (
      <NoteCard
        noteText={item.text}
        onOptions={() => this._showEditDeleteOptions(item.id)}
      />
    );
  }

  _showEditDeleteOptions = async noteId => {
    await this.setState({ noteId });
    this.deleteActionSheet.show();
  };

  _deletePostPrompt = noteId => {
    Alert.alert("Delete Note ?", null, [
      {
        text: "Delete",
        onPress: () => {
          this._deleteNote({ noteId });
        }
      },
      {
        text: "Cancel",
        style: "cancel"
      }
    ]);
  };

  _deleteNote = noteId => {
    <Mutation
      mutation={DELETE_NOTE}
      update={store => {
        const storeNotes = store.readQuery({ query: GET_NOTES });
        const data = storeNotes.notes.filter(note => note.id !== noteId);
        console.log("======>>>", data);
        store.writeQuery({
          query: GET_NOTES,
          data: { notes: [...data] }
        });
      }}
    ></Mutation>;
  };

  render() {
    const { noteId } = this.state;
    return (
      <Container>
        <View>
          <ActionSheet
            ref={o => (this.deleteActionSheet = o)}
            options={["Delete", "Cancel"]}
            cancelButtonIndex={1}
            destructiveButtonIndex={0}
            onPress={index => {
              if (index === 0) this._deletePostPrompt(noteId);
            }}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <HeaderText>My Notes</HeaderText>
          <Query query={GET_NOTES}>
            {/* The props.children of the Query will be a callback with a response, and error parameter. */}
            {(response, error, loading) => {
              if (error) {
                return <Text style={styles.errorText}>{error}</Text>;
              }
              if (loading) {
                return <ActivityIndicator />;
              }
              //If the response is done, then will return the FlatList
              if (response) {
                //Return the FlatList if there is not an error.
                return (
                  <FlatList
                    data={response.data.notes}
                    inverted
                    renderItem={item => this._renderItem(item)}
                  />
                );
              }
            }}
          </Query>
        </ScrollView>
        <PlaceholdeWrapper>
          <TextPlaceHolder
            onHolderPress={() => this._addNewNote()}
            text={"Add a Note"}
          />
        </PlaceholdeWrapper>
      </Container>
    );
  }
}

export default HomeScreen;
