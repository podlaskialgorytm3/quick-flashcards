'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import SwtichMode from '@/features/nav-bar/components/switch-mode';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const mode = 'dark';


export const theme = createTheme({
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
