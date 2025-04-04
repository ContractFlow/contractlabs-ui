import { BoxProps } from '@mui/material/Box';
import { Meta, StoryFn } from '@storybook/react';
import Box from '.';

export default {
  title: 'Components/Layout/Box',
  component: Box,
  parameters: {
    docs: {
      docsPage: true, 
      description: {
        component:
          'The Box component is a generic, theme-aware container with access to CSS utilities from MUI System. It acts as a <div> with additional styling capabilities.',
      },
    },
  },
  argTypes: {
    sx: { control: 'object', description: 'Style object following MUI System' },
    children: { control: 'text', description: 'Content inside the Box' },
    component: { control: 'text', description: 'Element type for the Box' },
  },
} as Meta<typeof Box>;


const Template: StoryFn<typeof Box> = (args: BoxProps) => <Box {...args} />;

export const BasicUsage = Template.bind({});
BasicUsage.args = {
  sx: { p: 2, border: '1px solid black' },
  children: 'This is a Box',
};

export const CustomComponent = Template.bind({});
CustomComponent.args = {
  component: 'section',
  sx: { p: 2, border: '1px dashed grey' },
  children: 'This Box renders as an HTML section element.',
};

export const WithSxProp = Template.bind({});
WithSxProp.args = {
  sx: {
    width: 100,
    height: 100,
    borderRadius: 1,
    bgcolor: 'primary.main',
    '&:hover': {
      bgcolor: 'primary.dark',
    },
  },
};


