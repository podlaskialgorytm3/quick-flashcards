export type ThemeSettings = {
    typography: {
        fontFamily: string;
    };
    palette: {
        mode: string;
        text: {
            primary: string;
        };
    };
};

export interface Theme{
    theme: ThemeSettings;
    handleModeChange: () => void;
    mode: string;
    isLoading: boolean;
}