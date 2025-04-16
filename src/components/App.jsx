import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note 
        key={1} 
        title="Note title" 
        content="Note content" 
      />
      <Footer />
    </div>
  );
}

export default App;


/**
 * Step 1: Add Note Functionality
    -Create state in CreateArea.jsx to hold both the title and content (as one object).

    -Use controlled components: tie input and textarea value to the state and update using onChange.

    -Write a handleChange function to update the right field in state using the event’s name and value.

    -Create a submitNote function to trigger when the Add button is clicked.

    -Prevent the default form refresh with event.preventDefault().

    -Pass the note object up to App.jsx using a prop function (e.g. onAdd()).

    -In App.jsx, store all notes in an array using useState.

    -Use setNotes() to add the new note to the notes array.

    -Map over the notes array to render a Note component for each one.

    -Pass the right props (title, content) into each Note from the mapped array.
* Step 2: Delete Note Functionality
    - Create a deleteNote() function in App.jsx.

    - Pass that function into each Note component using a prop (e.g. onDelete).

    - In the Note component, call props.onDelete() when the Delete button is clicked.

    - Pass the id (index) of the note back to App.jsx.

    - In App.jsx, use filter() to remove the note with the matching index from the notes array.
 */
