import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/shared/themes/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { NavBar } from "@/features/nav-bar/components/nav-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Quick Flashcards",
    default: "Quick Flashcards"
  },
  description: "A simple app, which helps you to learn faster and more effectively.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AppRouterCacheProvider options={{key: 'css'}}>
          <body className={inter.className}>
            <ThemeProvider theme={theme}>
            <NavBar />
            <CssBaseline />
            {children}
            </ThemeProvider>
            </body>
      </AppRouterCacheProvider>
    </html>
  );
}
