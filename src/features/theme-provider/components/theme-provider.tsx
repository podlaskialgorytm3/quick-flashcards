'use client';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { useState } from 'react';
import type { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import SwtichMode from './switch-mode';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

export const ThemeContainer = ({ children }: Readonly<{children: React.ReactNode}>) => {
    const [mode, setMode] = useState<PaletteMode>('dark');

    const theme = createTheme({
        typography: {
          fontFamily: roboto.style.fontFamily,
          },
          palette: {
              mode: mode,
              text: {
                  primary: mode === 'dark' ? '#fff' : '#001e3c',
              },
          },
      });

      const handleModeChange = () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      }

    return (
        <ThemeProvider theme={theme}>
            <SwtichMode onClick={handleModeChange}/>
            {children}
        </ThemeProvider>
    );
}