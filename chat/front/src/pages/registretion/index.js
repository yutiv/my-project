import "./index.css"
import { Send } from "@mui/icons-material";
import { FormControl, IconButton, TextField } from "@mui/material";
import React from "react";
import { postChatData } from "../../service/axios";

const HelloRegistration = () => {
const [valInputName, setValInputName] = React.useState('');
const [valInputEmail, setValInputEmail] = React.useState('');
const [valInputPassword, setValInputPassword] = React.useState('');
    const handleChangeName = (event) => {
        setValInputName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setValInputEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setValInputPassword(event.target.value);
    };
    const send = () => {
        postChatData('/',{valInputName,valInputEmail,valInputPassword})
    }
    return (<>
        <div>
            <FormControl id="form">
                <TextField label="name"  onChange={handleChangeName} value={valInputName}/>
                <TextField label="email" onChange={handleChangeEmail} value={valInputEmail}/>
                <TextField label="password"  onChange={handleChangePassword} value={valInputPassword}/>
                <IconButton id="send" onClick={() => send()}><Send /></IconButton>
            </FormControl>
        </div>
    </>
    );
}
export { HelloRegistration }