import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

export const themeOptions = {
    palette: {
        type: 'light',
        primary: {
            main: '#8181fd',
            dark: '#aaaabd',
            light: '#4e57b7',
        },
        secondary: {
            main: '#f1b325',
        },
    },
};

const theme = createTheme(themeOptions);
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: "*",
        element:
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
