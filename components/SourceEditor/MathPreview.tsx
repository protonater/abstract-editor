import React from 'react'
import MDBox from '../MD/MDBox';
import MDTypography from '../MD/MDTypography';
import { Grid, Card, AppBar, Tabs, Tab } from '@mui/material';

type Props = {}

const MathPreview = (props: Props) => {
    return (
        <Card>
            <MDBox
                mx={2}
                mt={-3}
                py={3.6}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="info"
            >
            </MDBox>
            <MDBox pl={3} sx={{ maxWidth: "8.7in", height: "11in" }}>
                <h1>Welcome to Editor</h1>
            </MDBox>
        </Card>
    )
}

export default MathPreview