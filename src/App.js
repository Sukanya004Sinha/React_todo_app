import React, { useState, useEffect, onSnapshot } from 'react';
import Todo from './Todo'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './App.css';
import db from './Firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // when the app loads , we need to listen to the databasse and fetch new todos as they
  //get added/ remove


  useEffect(() => {       //it is a hook it runs when apps upload 
    // here we write this code because of  ----------fires when the app.js loads
    db.collection('todos').onSnapshot(snapshot => {
      console.log("suknya");
      //console.log(snapshot.docs.map(doc=>doc.data().todo));  // whatever i was written inside console it returns array of object
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, []);

  //console.log('sukanya',input);
  const addTodo = (event) => {
    // this will fire on click button
    event.preventDefault();  //   ye mere refresh ko stop kr dega
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log(`its working`);
    //setTodos([...todos, input]);
    setInput('');// aftr adding something todo it blanks the box
  }           // basically it clear up the input after hitting submit
  //const sum= 1+1; through this we can also add a sum  in our code it gives 2 
  // inside div h1 tag we write it like this like {1+1}
  // so that we run dynamic javascript with jsx
  //jsx = javascript+Html
  return (
    <div className="App">
      <h1>My Todo List 📖📚</h1>
      <form>
        <FormControl>
          <InputLabel><b>Write a todo 📚🎙️</b></InputLabel>
          <input value={input} onChange={event =>
            setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>

      </form>
      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
