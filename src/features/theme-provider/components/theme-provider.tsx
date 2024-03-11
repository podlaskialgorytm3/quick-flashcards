'use client';

import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import SwtichMode from './switch-mode';
import { useTheme } from '../hooks/use-theme';
import { Theme } from '../types/theme';
import { Loading }  from './loading';

export const ThemeContainer = ({ children }: Readonly<{children: React.ReactNode}>) => {
    const { theme, handleModeChange, mode, isLoading }  = useTheme() as Theme;

    return (
        isLoading ? <Loading /> : (
            <ThemeProvider theme={theme}>
            <Suspense fallback="loading">
                <SwtichMode onClick={handleModeChange} defaultChecked={mode == 'light' ? true : false}/>
            </Suspense>
            {children}
        </ThemeProvider>
        )
    );
}