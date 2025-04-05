import { ButtonProps } from '@mui/material/Button';
import { Meta, StoryFn } from '@storybook/react';
import Button from '.';

export default {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    docs: {
      docsPage: true,
      description: {
        component:
          'The Button component allows users to trigger actions. Supports variants, sizes, and colors from MUI.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'radio',
      options: ['text', 'contained', 'outlined'],
      description: 'Defines the button style',
    },
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      description: 'Defines the button color',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Defines the button size',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    sx: {
      control: 'object',
      description: 'Custom styles using the sx prop',
      table: { type: { summary: 'object' } },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args: ButtonProps) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'contained',
  color: 'primary',
  children: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  color: 'secondary',
  children: 'Secondary Button',
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'contained',
  color: 'primary',
  disabled: true,
  children: 'Disabled Button',
};

export const Small = Template.bind({});
Small.args = {
  variant: 'contained',
  color: 'primary',
  size: 'small',
  children: 'Small Button',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'contained',
  color: 'primary',
  size: 'large',
  children: 'Large Button',
};

export const Purple = Template.bind({});
Purple.args = {
  variant: 'contained',
  children: 'Purple Button',
  sx: {
    'backgroundColor': (theme) => theme.palette.extendedColors?.purple?.[500] || '#6a1b9a',
    'color': '#fff',
    '&:hover': {
      backgroundColor: (theme) => theme.palette.extendedColors?.purple?.[600] || '#4a148c',
    },
  },
};
