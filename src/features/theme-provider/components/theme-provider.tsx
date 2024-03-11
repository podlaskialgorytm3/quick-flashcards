'use client';

import { Suspense, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';
import { use, useState } from 'react';
import type { PaletteMode } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import SwtichMode from './switch-mode';
import { Loading  } from './loading';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });

export const ThemeContainer = ({ children }: Readonly<{children: React.ReactNode}>) => {
    const [mode, setMode] = useState<PaletteMode>('dark');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        if (savedMode) {
            setMode(savedMode as PaletteMode);
        }
        setTimeout(() => { 
            setIsLoading(false);
        }, 2000)
    }, [mode])

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
            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
      }

      if(isLoading) return <Loading />;


    return (
        <ThemeProvider theme={theme}>
            <Suspense fallback="loading">
                <SwtichMode onClick={handleModeChange} defaultChecked={mode == 'light' ? true : false}/>
            </Suspense>
            {children}
        </ThemeProvider>
    );
}