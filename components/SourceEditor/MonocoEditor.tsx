import React, { useState, useEffect } from "react";
import { Grid, AppBar, Tabs, Tab, Icon, Card } from '@mui/material';
import breakpoints from "../../assets/theme/base/breakpoints";
import MDTypography from "../MD/MDTypography";
import MDBox from "../MD/MDBox";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

type Props = {}

const ToolBar = (props: Props) => {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            return window.innerWidth < breakpoints.values.sm
                ? setTabsOrientation("vertical")
                : setTabsOrientation("horizontal");
        }

        /** 
         The event listener that's calling the handleTabsOrientation function when resizing the window.
        */
        window.addEventListener("resize", handleTabsOrientation);

        // Call the handleTabsOrientation function to set the state with the initial value.
        handleTabsOrientation();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleTabsOrientation);
    }, [tabsOrientation]);

    const handleSetTabValue = (event, newValue) => setTabValue(newValue);
    return (
        <Card>
            <MDBox
                mx={2}
                mt={-3}
                py={1}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="info"
            >
                <AppBar position="realtive" >
                    <Tabs orientation={tabsOrientation} value={tabValue}
                        onChange={handleSetTabValue}
                        sx={{ position: "inherit", width: "200px" }}>
                        <Tab label="Source" />
                        <Tab label="Rich Text" />
                    </Tabs>
                </AppBar>
            </MDBox>
            <MDBox pl={3} sx={{ maxWidth: "8.7in", height: "11in" }}>
                <Editor
                    height="100%"
                    width="100%"
                    defaultLanguage="javascript"
                    defaultValue="// some comment"
                />
            </MDBox>
        </Card>
    )
}

export default ToolBar