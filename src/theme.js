
import { createTheme } from "@mui/material";






export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#00a9ff",
        },
        secondary: {
            main: "#89cff3",
        },
        background: {
            main: "#f2faff",
        },
        accent: {
            main: "#a0e9ff",
        },
        text: {
            main: "#001926"
        }
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#00a9ff",
        },
        secondary: {
            main: "#89cff3",
        },
        background: {
            main: "#001926",
        },
        accent: {
            main: "#a0e9ff",
        },
        text: {
            main: "#f2faff"
        }
    }
})

