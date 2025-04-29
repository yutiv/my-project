import React from "react";
import "./index.css";
import { FormControl, TextField, IconButton, Avatar } from "@mui/material";
import { Send } from "@mui/icons-material"
const HelloChat = () => {
    const [messageall, setMessageall] = React.useState([
        { key: 'message2', value: 'ddd' },
        { key: 'message2', value: 'ddd' },
        { key: 'message1', value: 'jjj' },
        { key: 'message1', value: 'lll' },
        { key: 'message2', value: 'ddd' },
        { key: 'message1', value: 'hjj' },
        { key: 'message2', value: 'sss' },
        { key: 'message2', value: 'eee' },
    ]);
    const [valInput, setValInput] = React.useState('');
    const handleChange = (event) => {
        setValInput(event.target.value);
    };

    const user = () => {
        if (!valInput) return
        setMessageall(prevArray => [...prevArray, { key: "message1", value: valInput }]);
        setValInput('')
    }
    let lastMes = null
    return (<>
        <div id="container">
            <div className="messages">
                <div>
                    {messageall.map((m, index) => {
                        const showavatar = lastMes !== m.key;
                        lastMes = m.key;
                        return (
                            <div key={index}>
                                {m.key === 'message1' ?
                                    <div className="avmsg">
                                        <p className={`message1${!showavatar ? ' msg-ml' : ''}`}>{m.value}</p>
                                        {showavatar && <Avatar sx={'border-radius:8.33px'}>{m.key.slice(7, 8)}</Avatar>}
                                    </div>
                                    :
                                    <div className="avmsg">
                                        {showavatar && <Avatar sx={'border-radius:8.33px'} className="avatar">{m.key.slice(7, 8)}</Avatar>}
                                        <p className={`message2${!showavatar ? ' msg-mr' : ''}`}> {m.value}</p>
                                    </div>
                                }
                            </div>
                        )
                    }
                    )}
                    <div id="textField" >
                        <FormControl id="formControl">
                            <TextField label="Type a message" onChange={handleChange} value={valInput}
                                InputProps={{
                                    endAdornment: (
                                        <IconButton onClick={() => user()}><Send id="send" /></IconButton>
                                    )
                                }}
                            >
                            </ TextField>
                        </FormControl>
                    </div>
                </div >
            </div >
        </div >
    </>
    );
};
export { HelloChat }