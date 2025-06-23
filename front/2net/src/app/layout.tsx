import type { Metadata } from "next";
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { SideBar } from '@/components/sideBar';

export const metadata: Metadata = {
  title: "2Net",
  description: "Aplicação 2Net",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <div className="flex">
            <SideBar />
            <main className="flex-1 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
