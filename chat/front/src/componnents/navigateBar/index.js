import "./index.css"
import React from "react";
import { AppRegistration, ChatBubble, Home, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box, BottomNavigation, BottomNavigationAction, ToggleButtonGroup } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function SimpleBottomNavigation() {

    const [value, setValue] = React.useState(0);
    const [direction, setDirection] = React.useState('ltr')
    const match = useMediaQuery('(min-width:767px)')
    const navigate = useNavigate();
    return (
        <div>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                {/* <BottomNavigationAction label="left" onClick={() => { setDirection('ltr') }} /> */}
                {/* <BottomNavigationAction label="right" onClick={() => { setDirection('rtl') }} /> */}
            </BottomNavigation>
            <Box dir={direction} >
                <ToggleButtonGroup orientation={match ? 'vertical' : 'horizontal'}>
                    <BottomNavigationAction onClick={() => navigate('/home')} icon={<Home />}showLabel label="home" />
                    <BottomNavigationAction onClick={() => navigate('/chat')} icon={<ChatBubble />}showLabel label="chatBubble" />
                    <BottomNavigationAction onClick={() => navigate('/login')} icon={<Login />}showLabel label="sign in" />
                    <BottomNavigationAction onClick={() => navigate('/registration')} icon={<AppRegistration />}showLabel label="sign up" />
                </ToggleButtonGroup>
            </Box>
        </div>
    )
}
