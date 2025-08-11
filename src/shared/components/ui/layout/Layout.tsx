import ExamplePopover from "@app/components/ExamplePopover";
import { Input } from "@base-ui-components/react";
import React, { PropsWithChildren } from "react";
import { Header } from "@app/layout/header";

const MasterLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="z-10 py-4 flex sticky ml-4 mr-4 top-0 bg-background items-center justify-between">
          <Header />
        </header>
        <main className="flex-1 p-5">{children}</main>
        <footer className="py-4 flex sticky bottom-0 bg-background">
          <ExamplePopover />
          <Input
            placeholder="Name"
            className="z-10 h-10 w-full max-w-64 rounded-md border border-border bg-muted pl-3.5 text-base focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
          />
        </footer>
      </div>
    </>
  );
};

export default MasterLayout;

// TODO: Переделать ThemeContext на Redux или MobX, но пока на глобальный контекст
// и включить в него isAuthenticated, currentThemem, token, userId и т.д.
