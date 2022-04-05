import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToolBar from '../components/Header/ToolBar';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MaterialUIControllerProvider } from "../context";
// Material Dashboard 2 React themes
import theme from "../assets/theme";

export default {
  title: 'Example/Toolbar',
  component: ToolBar
} as ComponentMeta<typeof ToolBar>;

const Template: ComponentStory<typeof ToolBar> = () => 
  <MaterialUIControllerProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToolBar />
    </ThemeProvider>
  </MaterialUIControllerProvider>;

  export const Toolbar = Template.bind({});