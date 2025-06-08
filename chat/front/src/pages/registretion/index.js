import "./index.css"
import { Button, FormControl, IconButton, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import { postChatData } from "../../service/axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const HelloRegistration = () => {
    const [valInputName, setValInputName] = React.useState('');
    const [valInputEmail, setValInputEmail] = React.useState('');
    const [valInputPassword, setValInputPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const handleChangeName = (event) => {
        setValInputName(event.target.value);
    };
    const handleChangeEmail = (event) => {
        setValInputEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        setValInputPassword(event.target.value);
    };
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const send = () => {
        postChatData('/', { valInputName, valInputEmail, valInputPassword })
    }
    return (<>
        <h1 className="textSignUp">Sign Up</h1>
        <FormControl>
            <h4 className="text">Name</h4>
            <TextField className="input" onChange={handleChangeName} value={valInputName} />
            <h4 className="text">Email</h4>
            <TextField className="input" onChange={handleChangeEmail} value={valInputEmail} />
            <h4 className="text">Password</h4>
            <OutlinedInput
                className="input"
                type={showPassword ? 'text' : 'password'}
                value={valInputPassword}
                onChange={handleChangePassword}
                endAdornment={
                    <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff className="icon" /> : <Visibility className="icon" />}
                    </IconButton>
                }
            />
            <Button className="send" variant="contained" onClick={() => send()}>sign up</Button>
        </FormControl>
    </>
    );
}
export { HelloRegistration }