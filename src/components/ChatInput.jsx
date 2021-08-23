import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { sendChatMessage } from '../helpers/webSocketHandlers';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    form: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    field: {
      backgroundColor: '#FFF'
    }
  }));

  
function ChatInput() {
  const classes = useStyles();
  const [mssg, setMssg] = useState('');
  
  const chatHandler = (e) => {
    e.preventDefault();
    sendChatMessage(mssg);
    setMssg('');
  }

  const handleOnChange = (e) => {
    setMssg(e.target.value);
  }

  return (
    <div>
      <form className={classes.form} noValidate autoComplete="off" onSubmit={chatHandler}>
        <TextField 
          className={classes.field} 
          id="filled-basic" 
          label="mssg goes here foo" 
          variant="filled"
          value={mssg}
          onChange={handleOnChange}
        />
      </form>
      <div className={classes.root}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={chatHandler}
        >
          Primary
        </Button>
      </div>
    </div>
  );
}

export default ChatInput;