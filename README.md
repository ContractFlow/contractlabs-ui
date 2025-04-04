# ContractLabs UI

ContractLabs UI is a component library built on top of [MUI](https://mui.com/) to provide a consistent and customizable UI experience for ContractLabs products, such as **ContractFlow**.

## Features
- **MUI-Based Components**: Extends MUI with custom styling and behavior.
- **Theming Support**: Easily configurable to match ContractLabs' design language.
- **Reusable & Composable**: Built for modularity and maintainability.
- **TypeScript Support**: Ensures type safety for better developer experience.
- **Tested with Vitest**: Reliable and robust component testing.

## Installation

To install ContractLabs UI, run:

```sh
npm install @contractlabs/ui

or using yarn:

yarn add @contractlabs/ui
```

## Usage

Wrap your application with the ContractLabsThemeProvider to ensure proper theming:

```typescript
import { ContractLabsThemeProvider, Button } from "@contractlabs/ui";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ContractLabsThemeProvider>
      <CssBaseline />
      <Button variant="primary">Click Me</Button>
    </ContractLabsThemeProvider>
  );
}

export default App;
```

## Development

### VsCode | VsCodium

If you are using VSCode or VSCodium, go to "File > Open Workspace from file", and then select the "contract-flow-app-frontend.code-workspace" file.
Once the workspace is open, install all recommended extensions.

### Dependencies

To run this app locally in development mode, you’ll need to install the following software:

- [Git](https://git-scm.com/)
- [Node 18.15+](https://nodejs.org/en)

After installing the software, navigate to the base folder of the project and switch the Git branch to ‘develop’:

```bash
git fetch
git checkout develop
```

### Running Tests

```sh
npm run test
```

## Storybook

To view components in an isolated environment, run:

```sh
npm run storybook
```
