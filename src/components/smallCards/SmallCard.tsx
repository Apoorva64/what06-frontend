import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardMedia, Grid} from "@mui/material";
import {Keyword, SERVER_URL} from "./ResponsiveCardGrid";

const bull = (
    <Box
        component="span"
        sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
    >
        •
    </Box>
);
interface Props {
    onclick: () => void;
    lastName: string;
    firstName: string;
    interests: Keyword[];
    distance: number;
    image: string;
}


const CustomCard = (props:Props) => {
    return (
        <Card sx={{display: 'flex'}}>
            <CardActionArea onClick={props.onclick}>
                <Grid container>
                    <Grid item xs={12} sm={4} md={4}>
                        <CardMedia
                            component="img"
                            image={SERVER_URL + props.image}
                            alt="green iguana"
                            height={200}
                            width={200}

                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={8}>
                        <Grid container>
                            <Grid item>
                                <CardContent>
                                    <Grid container direction={"column"} alignItems={"stretch"}
                                          justifyContent={"stretch"}>
                                        <Grid item>
                                            <Typography variant="h5" component="div">
                                                {props.lastName} {props.firstName}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography sx={{mb: 1.5}} color="text.secondary">
                                                {props.interests.map((interest) => {
                                                        return interest.name + " . ";
                                                    }
                                                )}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="body2">
                                                {props.distance} km
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}

export default function SmallCard(props:Props) {
    return (
        <Box sx={{minWidth: 275}}>
            <CustomCard {...props}/>
        </Box>
    );
}