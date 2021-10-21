import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import FormArea from './components/FormArea';
import { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note){
    setNotes(preNotes => {
      return [...preNotes, note]
    });
  }
  function delNote(id){
    setNotes(preNotes => {
      return preNotes.filter((note, index)=>{
        return index !== id
      })
    })
  }
  return (
    <div >
      <Header />
      <FormArea addNote={addNote} />
      {notes.map((note, index) => (
        <Note 
        id={index} 
        delNote={delNote} 
        title={note.title}
        content={note.content}
        />
      ))}
      
      <Footer />
        
    </div>
  );
}

export default App;
