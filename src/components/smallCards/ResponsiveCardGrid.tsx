import React, {useEffect, useState} from "react";
import {Grid, Grow, Slide} from "@mui/material";
import FullCard from "./FullCard";
import Box from "@mui/material/Box";


export const SERVER_URL = "https://hack.ozeliurs.com";

export interface Keyword {
    name: string,
    strength: number
}

export interface graphs {
    name: string,
    url: string
}


export interface Backend {
    firstname: string;
    lastname: string;
    address: string;
    lat: number;
    long: number;
    birthday: string;
    keywords: Keyword[];
    distance: number;
    description: string;
    image: string;
    bubbles: graphs[];


}

interface ResponsiveCardGridProps {
    values: string[],
    setValues: (value: (((prevState: string[]) => string[]) | string[])) => void,
    minDistance: string,
    setMinDistance: (value: (((prevState: string) => string) | string)) => void,
    isGodMother: boolean,
    setIsGodMother: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export function ResponsiveCardGrid({
                                       values,
                                       setValues,
                                       minDistance,
                                       setMinDistance,
                                       isGodMother,
                                       setIsGodMother
                                   }: ResponsiveCardGridProps) {

    const [userList, setUserList] = useState([] as Backend[]);
    useEffect(() => {
        fetch(SERVER_URL + '/user' + (isGodMother ? "/godmother/" : "/goddaughter/"))
            .then(response => response.json())
            .then(data => setUserList(data))

    }, [isGodMother])

    console.log(minDistance);
    // use Fade in Transition
    return (
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 2, sm: 8, md: 12}}
              sx={{padding: "2rem"}}>
            {userList.filter(
                (user) => {
                    return user.distance <= parseInt(minDistance) && values.every((value) => user.keywords.some((keyword) => keyword.name === value));
                }
            ).map((user) => (
                <Grid item xs={2} sm={4} md={4} key={user.address}>
                    <Grow in={true} >
                        <Box><FullCard {...user}/></Box>
                    </Grow>
                </Grid>
            ))}
        </Grid>

    );
}