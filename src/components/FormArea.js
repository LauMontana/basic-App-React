import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import { Fab, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function FormArea({addNote}) {
    const [note, setNote] = useState({
        title:"",
        content:"",
    });
    function clickHandler(){
        addNote(note);
        setNote({
            title:"",
            content:"",
        });
    }
    function changeHandler(event){
        const {name, value } = event.target
        setNote(preValues => {
            return {
                ...preValues,
                [name]: value

            };
        });

    }

    return (
        <Paper style={{
            margin:"10px 10%",
            padding:"25px 50px"
        }}>
            <form style={{marginTop:"20px"}}>
                <TextField 
                onChange={changeHandler}
                name="title" 
                value={note.title}  
                label="Tittle" 
                fullWidth autoComplete="off" />
                <br/>
                <TextField 
                onChange={changeHandler}
                name="content" 
                value={note.content}
                label="Content" 
                multiline rows={4} 
                fullWidth 
                autoComplete="off" 
                />
                <Fab onClick={clickHandler} style={{
                    marginTop:"20px"
                }}>
                    <AddIcon />
                </Fab>
                
            </form>


        </Paper>
       
    );
}

export default FormArea;
