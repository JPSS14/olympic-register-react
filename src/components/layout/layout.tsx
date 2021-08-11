import { themeDefault } from "./theme-default";
import { ThemeProvider } from "@material-ui/core";

import { Header } from "../header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <ThemeProvider theme={themeDefault}>
            <Header />
            <div>
                {children}
            </div>
        </ThemeProvider>
    );
}