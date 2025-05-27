import { Send } from "@mui/icons-material";
import { FormControl, IconButton, TextField } from "@mui/material";
import React from "react";
import { postChatData } from "../../service/axios";
const HelloLogin = () => {
    const [valInputEmail, setValInputEmail] = React.useState('');
        const [valInputPassword, setValInputPassword] = React.useState('');
        const handleChangeEmail = (event) => {            
            setValInputEmail(event.target.value);
        };
        const handleChangePassword = (event) => {            
            setValInputPassword(event.target.value);
        };
    const send = () => {
        postChatData('/login', { valInputEmail, valInputPassword })
    }

    return (<>
        <div>
            <FormControl id="form">
                <TextField label="email" onChange={handleChangeEmail} value={valInputEmail} />
                <TextField label="password" onChange={handleChangePassword} value={valInputPassword}/>
                <IconButton id="send" onClick={() => send()} ><Send id="send" /></IconButton>
            </FormControl>
        </div>
    </>
    );
}
export { HelloLogin }