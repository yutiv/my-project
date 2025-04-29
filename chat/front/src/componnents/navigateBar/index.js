import "./index.css"
import React from "react";
import { ChatBubble, Home } from "@mui/icons-material";
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
                    <BottomNavigationAction onClick={() => navigate('/home')} icon={<Home />} label="home" />
                    <BottomNavigationAction onClick={() => navigate('/chat')} icon={<ChatBubble />} label="chatBubble" />
                </ToggleButtonGroup>
            </Box>
        </div>
    )
}
