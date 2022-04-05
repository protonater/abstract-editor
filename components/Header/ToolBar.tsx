import { useState, useEffect } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from '../MD/MDBox';

// // Material Dashboard 2 React base styles
// import breakpoints from "node_modules/material-dashboard-react/src/assets/theme/base/breakpoints";

// // Images
// import burceMars from "node_modules/material-dashboard-react/src/assets/images/bruce-mars.jpg";
// import backgroundImage from "node_modules/material-dashboard-react/src/assets/images/bg-profile.jpeg";

type Props = {
    children: ""
}
const ToolBar: FC = ({theme}) => {
    const [tabsOrientation, setTabsOrientation] = useState("horizontal");
    const [tabValue, setTabValue] = useState(0);

    useEffect(() => {
        // A function that sets the orientation state of the tabs.
        function handleTabsOrientation() {
            setTabsOrientation("horizontal");
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
        <MDBox position="relative" mb={5}>
            <Card
                sx={{
                    position: "relative",
                    mt: 25,
                    mx: -25,
                    py: 2,
                    px: 105,
                }}
            >
                <Grid container spacing={1} alignItems="center">
                    <Grid item xs={6} md={3} lg={12} sx={{ ml: "auto" }}>
                        <AppBar position="static">
                            <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                                <Tab label="Source"/>
                                <Tab label="RichTextEditor" />
                            </Tabs>
                        </AppBar>
                    </Grid>
                </Grid>
            </Card>
        </MDBox>
    );
}

export default ToolBar;
