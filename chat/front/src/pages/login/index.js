import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, FormControl, IconButton, Input, OutlinedInput, TextField } from "@mui/material";
import React from "react";
import './index.css'
import { postChatData } from "../../service/axios";
const HelloLogin = () => {
    const [valInputEmail, setValInputEmail] = React.useState('');
    const [valInputPassword, setValInputPassword] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleChangeEmail = (event) => {
        // console.log(valInputEmail," jjj");
        // console.log(event.target.value);
        
        setValInputEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        // console.log("aaa");
        
        setValInputPassword(event.target.value);
    };
    const send = () => {
        // console.log(valInputEmail," mmm");
        
        postChatData('/login', { valInputEmail, valInputPassword })
    }

    return (<>
        <div className="All">
            <h1 className="textSignIn">Sign In</h1>
            <FormControl>
                <h4 className="text">Email Address</h4>
                <OutlinedInput className="input" onChange={handleChangeEmail}>
                    <TextField value={valInputEmail} />
                    {/* <TextField onChange={handleChangeEmail} value={valInputEmail} /> */}
                </OutlinedInput>
                <h4 className="text">Password</h4>
                <OutlinedInput
                    className="input"
                    type={showPassword ? 'text' : 'password'}
                    value={valInputPassword}
                    onChange={handleChangePassword}
                    endAdornment={
                        <IconButton
                            onClick={handleClickShowPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff className="icon" /> : <Visibility className="icon" />}
                        </IconButton>
                    }
                />
                <Button className="send" variant="contained" onClick={() => send()}>sign in</Button>
            </FormControl >
            <h4 className="link">I'm a new user.  <a href="/registration">Sign Up</a></h4>
        </div>
    </>
    );
}
export { HelloLogin }