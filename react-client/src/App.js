import React, { useState, useEffect, useReducer } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import { List, Input, Button } from 'antd';
import { listNotes } from './graphql/queries';
import { createNote as CreateNote } from './graphql/mutations';
import { v4 as uuid } from 'uuid';
import '@aws-amplify/ui-react/styles.css';
import 'antd/dist/antd.min.css';
import './App.css';

const CLIENT_ID = uuid();

const styles = {
  container: { padding: 20 },
  input: { marginBotton: 10 },
  item: { textAlign: 'left' },
  p: { color: '#1890ff' },
};

const initialState = {
  notes: [],
  loading: true,
  error: false,
  form: { name: '', description: '' },
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_NOTES':
      return { ...state, notes: action.notes, loading: false };
    case 'ERROR':
      return { ...state, loading: false, error: true };
    case 'ADD_NOTE':
      return { ...state, notes: [action.note, ...state.notes] };
    case 'RESET_FORM':
      return { ...state, form: initialState.form };
    case 'SET_INPUT':
      return {
        ...state,
        form: { ...state.form, [action.name]: action.value },
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [featuredCityInfo, updateFeaturedCityInfo] = useState([]);
  async function fetchFeaturedCityInfo() {
    const data = await API.get('studiocityapi', '/featuredcity/info');
    updateFeaturedCityInfo(data.info);
  }

  async function fetchNotes() {
    try {
      const notesData = await API.graphql({
        query: listNotes,
      });
      dispatch({
        type: 'SET_NOTES',
        notes: notesData.data.listNotes.items,
      });
    } catch (err) {
      console.log('error: ', err);
      dispatch({ type: 'ERROR' });
    }
  }

  async function createNote() {
    // optimistic response
    const { form } = state;
    console.log(form);
    if (!form.name || !form.description) {
      return alert('please enter a name and description');
    }
    const note = {
      ...form,
      clientId: CLIENT_ID,
      completed: false,
      id: uuid(),
    };
    console.log(note);
    dispatch({ type: 'ADD_NOTE', note });
    dispatch({ type: 'RESET_FORM' });
    try {
      await API.graphql({
        query: CreateNote,
        variables: { input: note },
      });
      console.log('successfully created note!');
    } catch (err) {
      console.log('error: ', err);
    }
  }

  function onChange(e) {
    dispatch({
      type: 'SET_INPUT',
      name: e.target.name,
      value: e.target.value,
    });
  }

  useEffect(() => {
    //  fetchFeaturedCityInfo();
    fetchNotes();
  }, []);

  function renderItem(item) {
    return (
      <List.Item style={styles.item}>
        <List.Item.Meta title={item.name} description={item.description} />
      </List.Item>
    );
  }

  return (
    <Authenticator
      initialState="signUp"
      loginMechanisms={['username', 'email']}
    >
      {({ signOut, user }) => (
        <div>
          <h1>Hello from AWS Amplify {user.username}</h1>
          <Input
            onChange={onChange}
            value={state.form.name}
            placeholder="Note Name"
            name="name"
            style={styles.input}
          ></Input>
          <Input
            onChange={onChange}
            value={state.form.description}
            placeholder="Note description"
            name="description"
            style={styles.input}
          ></Input>
          <Button onClick={createNote} type="primary">
            Create Note
          </Button>
          <div style={styles.container}>
            <List
              loading={state.loading}
              dataSource={state.notes}
              renderItem={renderItem}
            />
          </div>

          {/* {featuredCityInfo.map((city, index) => (
            <div key={index}>
              <h2>
                {city.name} - {city.symbol}
              </h2>
            </div>
          ))} */}
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
