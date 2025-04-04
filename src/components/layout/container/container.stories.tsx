import Typography from "@mui/material/Typography";
import { Meta, StoryObj } from "@storybook/react";
import Container from ".";

const meta: Meta<typeof Container> = {
  title: "Components/Layout/Container",
  component: Container,
  args: {
    maxWidth: "sm",
    color: '#000',
    hidden: false,

    onClick: () => {},
  },
};

export default meta;

export const Default: StoryObj<typeof Container> = {
  render: (args) => (
    <Container {...args}>
      <Typography variant="body1">This is a container with content.</Typography>
    </Container>
  ),
};

export const Fluid: StoryObj<typeof Container> = {
  args: {
    maxWidth: false,
  },
  render: (args) => (
    <Container {...args}>
      <Typography variant="body1">This is a fluid container.</Typography>
    </Container>
  ),
};

export const Fixed: StoryObj<typeof Container> = {
  args: {
    fixed: true,
  },
  render: (args) => (
    <Container {...args}>
      <Typography variant="body1">This is a fixed container.</Typography>
    </Container>
  ),
};
