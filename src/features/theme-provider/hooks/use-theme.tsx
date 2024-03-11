import {  useState, useEffect } from 'react';
import type { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
  });


export const useTheme = () => {
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

      return { theme, handleModeChange, mode , isLoading};
}