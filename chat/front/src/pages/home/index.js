import { AppRegistration, ChatBubble, Login } from "@mui/icons-material";
import { BottomNavigationAction } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HelloHome = () => {
    const navigate = useNavigate();
    return (<>
        {/* <h1>Home</h1> */}
        <BottomNavigationAction onClick={() => navigate('/chat')} icon={<ChatBubble />} showLabel label="chatBubble" />
        <BottomNavigationAction onClick={() => navigate('/login')} icon={<Login />} showLabel label="sign in" />
        <BottomNavigationAction onClick={() => navigate('/registration')} icon={<AppRegistration />} showLabel label="sign up" />
    </>
    );
}
export { HelloHome }