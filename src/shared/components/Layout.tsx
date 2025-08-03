import ExamplePopover from "@app/components/ExamplePopover";
import { LogOut } from "@app/components/LogOut";
import { ThemeProvider } from "@app/components/ThemeContext";
import { ThemeToggle } from "@app/components/ThemeToggle";
import { Input } from "@base-ui-components/react";
import React, { PropsWithChildren } from "react";

const MasterLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="absolute flex gap-2 right-0 top-0 p-4">
        <LogOut />
        <ThemeToggle />
      </div>
      {children}
      <div className="p-4 items-center flex flex-col gap-4 absolute bottom-0 left-0 right-0">
        <ExamplePopover />
        <Input
          placeholder="Name"
          className="h-10 w-full max-w-64 rounded-md border border-border bg-muted pl-3.5 text-base focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
        />
      </div>
    </ThemeProvider>
  );
};

export default MasterLayout;

// TODO: Переделать ThemeContext на Redux или MobX, но пока на глобальный контекст
// и включить в него isAuthenticated, currentThemem, token, userId и т.д.
