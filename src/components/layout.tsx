import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex h-screen w-screen flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto py-8">
          <div className="container flex flex-col gap-8">{props.children}</div>
        </main>
      </div>
    </ThemeProvider>
  );
};
