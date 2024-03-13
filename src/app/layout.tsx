import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContainer } from "@/features/theme-provider/components/theme-provider";
import { defaultFont } from "@/shared/config/fonts";

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
          <body className={defaultFont.className}>
            <ThemeContainer>
            <CssBaseline />
            {children}
            </ThemeContainer>
            </body>
      </AppRouterCacheProvider>
    </html>
  );
}
