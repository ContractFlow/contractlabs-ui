import * as React from 'react';
import { AppProvider as ToolpadAppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { Theme } from '@mui/material/styles';

interface MyAppProviderProps {
  navigation?: Navigation;
  theme?: Theme;
  window?: Window;
  children: React.ReactNode;
}

export function AppProvider({ navigation = [], theme, window, children }: MyAppProviderProps) {
  return (
    <ToolpadAppProvider navigation={navigation} theme={theme} window={window}>
      {children}
    </ToolpadAppProvider>
  );
}