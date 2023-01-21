import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {SearchBar} from "./components/SearchBar";
import {Grid} from "@mui/material";
import {ResponsiveCardGrid} from "./components/smallCards/ResponsiveCardGrid";
import {Widget} from "react-chat-widget-2";
import 'react-chat-widget/lib/styles.css';

function App() {
    const [values, setValues] = useState([] as string[]);
    const handleNewUserMessage = (newMessage: String) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };
    const [minDistance, setMinDistance] = useState('10');
    const [isGodMother, setIsGodMother] = useState(false);

    return (
        <><Grid container direction={"column"} alignItems={"stretch"} justifyContent={"stretch"}
                sx={{minHeight: "100vh"}}>

            <Grid item sx={{flexGrow: 1}}>
                <Navbar isGodMother={isGodMother} setIsGodMother={setIsGodMother}/>
            </Grid>
            <Grid item sx={{
                flexGrow: 1,
                height: "85vh",
            }}>
                <Grid container xs={12} alignItems={"flex-start"} justifyContent={"center"} spacing={2}>
                    <Grid item xs={12}><SearchBar values={values} setValues={setValues} minDistance={minDistance}
                                                  setMinDistance={setMinDistance} isGodMother={isGodMother}
                                                  setIsGodMother={setIsGodMother}/></Grid>
                    <Grid item xs={12}><ResponsiveCardGrid values={values} setValues={setValues}
                                                           minDistance={minDistance} setMinDistance={setMinDistance}
                                                           isGodMother={isGodMother}
                                                           setIsGodMother={setIsGodMother}/></Grid>
                </Grid>

            </Grid>
            <Widget
                handleNewUserMessage={handleNewUserMessage}
            />

        </Grid>
        </>

    );
}

export default App;
