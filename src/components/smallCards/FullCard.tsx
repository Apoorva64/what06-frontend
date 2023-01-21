import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import SmallCard from "./SmallCard";
import {Backend, SERVER_URL} from "./ResponsiveCardGrid";
import {Divider, Grid} from "@mui/material";
import Carousel from "./Carousel";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function FullCard(props: Backend) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    console.log(props);


    return (
        <div>
            <SmallCard firstName={props.firstname} lastName={props.lastname} interests={props.keywords}
                       distance={props.distance}
                       image={props.image} onclick={handleClickOpen}/>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{position: 'relative'}}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ml: 2, flex: 1}} variant="h6" component="div">
                            Details
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={5}
                      padding={4}>
                    <Grid item xs={2}>
                        <img src={SERVER_URL + props.image} alt="green iguana" height={200} width={200}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h5" component="div">
                            {props.lastname} {props.firstname}
                        </Typography>
                        <Typography variant="body2">
                            {props.distance} km
                        </Typography>
                        <Typography sx={{mb: 1.5}} color="text.secondary">
                            {props.keywords.map((interest) => {
                                    return interest.name + " ";
                                }
                            )}
                        </Typography>
                        <Typography
                            sx={{mb: 1.5}}
                            color="text.secondary"
                        >
                            {props.address}
                        </Typography>

                        <Typography variant="body2">
                            {props.description}
                        </Typography>

                    </Grid>
                </Grid>
                <Grid container sx={{paddingX: 4}}><Divider sx={{width: "100%",}}/></Grid>
                <Grid container direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={5}>
                    <Grid item><Carousel images={props.bubbles}/></Grid>
                </Grid>
            </Dialog>
        </div>
    );
}