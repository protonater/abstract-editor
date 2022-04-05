import type { NextPage } from 'next'
import Layout from '../layout/PixLayout';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MaterialUIControllerProvider } from "../context";
// Material Dashboard 2 React themes
import theme from "../assets/theme";

const PixEditor: NextPage = () => {
    return (
        <MaterialUIControllerProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Layout />
            </ThemeProvider>
        </MaterialUIControllerProvider>
    )
}

export default PixEditor
