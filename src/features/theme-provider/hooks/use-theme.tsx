import {  useState, useEffect } from 'react';
import type { PaletteMode } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { defaultFont } from '@/shared/config/fonts';


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
          fontFamily: defaultFont.style.fontFamily,
          },
          palette: {
              mode: mode,
              text: {
                  primary: mode === 'dark' ? '#fff' : '#000000',
              },
          },
      });

      const handleModeChange = () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            localStorage.setItem('mode', mode === 'light' ? 'dark' : 'light');
      }

      return { theme, handleModeChange, mode , isLoading};
}