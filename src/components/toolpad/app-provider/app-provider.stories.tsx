import DashboardIcon from '@mui/icons-material/Dashboard';
import TimelineIcon from '@mui/icons-material/Timeline';
import { Box, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Meta, StoryObj } from '@storybook/react';
import { type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { AppProvider } from './index';
import { light } from '@mui/material/styles/createPalette';

const meta: Meta<typeof AppProvider> = {
  title: 'Components/ToolPad/AppProvider',
  component: AppProvider,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof AppProvider>;

const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Main items' },
  { segment: 'page', title: 'Page', icon: <DashboardIcon /> },
  {
    segment: 'page',
    title: 'Page',
    icon: <DashboardIcon />,
    children: [{ segment: 'page', title: 'Page', icon: <DashboardIcon /> }],
  },
  { segment: 'page-2', title: 'Page 2', icon: <TimelineIcon /> },
];

const CustomContent = () => (
  <Box sx={{ p: 4, textAlign: 'center' }}>
    <Typography variant="h6">This is inside MyAppProvider</Typography>
  </Box>
);

const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export const Default: Story = {
  render: () => (
    <AppProvider navigation={NAVIGATION} theme={lightTheme}>
      <DashboardLayout>
        <CustomContent />
      </DashboardLayout>
    </AppProvider>
  ),
};

export const WithDarkTheme: Story = {
  render: () => (
    <AppProvider navigation={NAVIGATION} theme={darkTheme}>
      <DashboardLayout>
        <CustomContent />
      </DashboardLayout>
    </AppProvider>
  ),
};
