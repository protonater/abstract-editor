import React from 'react'
import DashboardLayout from "./DashboardLayout";
import DashboardNavbar from "../components/MD/DashboardNavbar";
import MDBox from "../components/MD/MDBox";
import { Grid, Card } from "@mui/material";
import ResizePanel from "react-resize-panel";

import MonocoEditor from '../components/SourceEditor/MonocoEditor';
import MathPreview from '../components/SourceEditor/MathPreview';
type Props = {
    children: String
}
const panelStyle = {
    width: "100%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
}

const Layout = (props: Props) => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox mt={1} mb={3}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12} xl={12}>
                        <h2>Welcome to <span style={{ color: "rgb(121 141 236)", fontStyle: "italic" }}>AbstractClasses.in</span> Math/LaTeX Editor</h2>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox pt={6} pb={3} ml={6}>
                <Grid container spacing={6} sx={{ backgroundColor: "#ccc" }} justifyContent="space-evenly" direction="row" alignItems="center">
                    <div className="editor-panels" style={panelStyle}>
                        <ResizePanel
                            direction="e"
                            style={{ width: "50%" }}
                        >
                            <div style={{ width: "100%" }}><MonocoEditor /></div>
                        </ResizePanel>
                        <div style={{ flexGrow: "1" }}>
                            <MathPreview />
                        </div>
                    </div>
                </Grid>
            </MDBox>
        </DashboardLayout >
    )
}

export default Layout