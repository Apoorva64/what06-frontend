import {
    Autocomplete,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    TextFieldProps
} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Search} from "@mui/icons-material";



interface SearchBarProps {
    values: string[],
    setValues: (value: (((prevState: string[]) => string[]) | string[])) => void,
    minDistance: string,
    setMinDistance: (value: (((prevState: string) => string) | string)) => void,
    isGodMother: boolean,
    setIsGodMother: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

export function SearchBar({ values, setValues, minDistance, setMinDistance, isGodMother, setIsGodMother }: SearchBarProps) {
    const [options, setOptions] = useState([] as string[]);

    useEffect(() => {
        fetch("https://hack.ozeliurs.com/keywords/")
            .then(response => response.json())
            .then(data => setOptions(data))
    }, [])

    function getRenderInput(params: (JSX.IntrinsicAttributes & TextFieldProps) | undefined) {
        return (
            <TextField
                {...params}
                label="Rechercher par mots clés"
                margin="none"
                variant="outlined"

            />
        );
    }

    return (
        <Grid container alignItems="center" justifyContent={"center"} spacing={4}>
            <Grid item  xs={8}  md={4} sm={6}>
                <Autocomplete
                    fullWidth
                    disableClearable
                    options={options}
                    multiple
                    value={values}
                    onChange={(event, newValue) => {
                        setValues(newValue);

                    }
                    }
                    renderInput={getRenderInput}

                />
            </Grid>
            <Grid item xs={8}  md={2} sm={3}>
                <FormControl
                    fullWidth
                >
                    <InputLabel>Distance</InputLabel>
                    <Select
                        fullWidth
                        value={minDistance}
                        label="Distance"
                        onChange={(event: SelectChangeEvent) => {
                            setMinDistance(event.target.value);
                        }}
                    >
                        <MenuItem value={5}>5km</MenuItem>
                        <MenuItem value={10}>10km</MenuItem>
                        <MenuItem value={50}>50km</MenuItem>
                        <MenuItem value={500}>500km</MenuItem>
                        <MenuItem value={5000}>5000km</MenuItem>
                    </Select>

                </FormControl>
            </Grid>
            {/*<Grid item xs={3}>*/}
            {/*    <Button*/}
            {/*        variant="contained"*/}
            {/*        sx={{height: "100%"}}*/}
            {/*        endIcon={<Search/>}*/}
            {/*    >*/}
            {/*        Search*/}

            {/*    </Button>*/}


            {/*</Grid>*/}

        </Grid>
    );
}