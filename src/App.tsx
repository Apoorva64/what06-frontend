import React, {useState} from 'react';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {SearchBar} from "./components/SearchBar";
import {Grid} from "@mui/material";
import {ResponsiveCardGrid} from "./components/smallCards/ResponsiveCardGrid";
import {Widget} from "react-chat-widget-2";
import 'react-chat-widget/lib/styles.css';
import {Route, Routes} from "react-router-dom";

class QueryPage extends React.Component<{ values: string[], values1: (value: (((prevState: string[]) => string[]) | string[])) => void, minDistance: string, minDistance1: (value: (((prevState: string) => string) | string)) => void, godMother: boolean, isGodMother: (value: (((prevState: boolean) => boolean) | boolean)) => void }> {
    render() {
        return <Grid container xs={12} alignItems={"flex-start"} justifyContent={"center"} spacing={2}>
            <Grid item xs={12}><SearchBar values={this.props.values} setValues={this.props.values1}
                                          minDistance={this.props.minDistance}
                                          setMinDistance={this.props.minDistance1} isGodMother={this.props.godMother}
                                          setIsGodMother={this.props.isGodMother}/></Grid>
            <Grid item xs={12}><ResponsiveCardGrid values={this.props.values} setValues={this.props.values1}
                                                   minDistance={this.props.minDistance}
                                                   setMinDistance={this.props.minDistance1}
                                                   isGodMother={this.props.godMother}
                                                   setIsGodMother={this.props.isGodMother}/></Grid>
        </Grid>;
    }
}

function App() {
    const [values, setValues] = useState([] as string[]);
    const handleNewUserMessage = (newMessage: String) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
    };
    const [minDistance, setMinDistance] = useState('10');
    const [isGodMother, setIsGodMother] = useState(false);

    return (
        <>
            <Grid container direction={"column"} alignItems={"stretch"} justifyContent={"stretch"}
                  sx={{minHeight: "100vh"}}>

                <Grid item sx={{flexGrow: 1}}>
                    <Navbar/>
                </Grid>
                <Grid item sx={{
                    flexGrow: 1,
                    height: "85vh",
                }}>
                    <Routes>
                        {/*<Route path="/login" element={<LoginPage/>}/>*/}
                        {/*<Route path="/signup" element={<SignUp/>}/>*/}
                        {/*<Route path="/logout" element={<Logout/>}/>*/}
                        <Route path="/filleules" element={<QueryPage values={values} values1={setValues} minDistance={minDistance}
                                                                  minDistance1={setMinDistance} godMother={false} isGodMother={setIsGodMother}/>}/>
                        <Route path="/marraines" element={<QueryPage values={values} values1={setValues} minDistance={minDistance}
                                                                    minDistance1={setMinDistance} godMother={true} isGodMother={setIsGodMother}/>}/>

                        {/*<Route path="/home" element={<Home/>}/>*/}
                        {/*<Route path="/" element={<Home/>}/>*/}
                        <Route path="*" element={<div>404</div>}/>
                    </Routes>


                </Grid>
                <Widget
                    handleNewUserMessage={handleNewUserMessage}
                />

            </Grid>
        </>

    );
}

export default App;
