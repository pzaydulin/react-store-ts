import "@app/App.css";
import ExamplePopover from "@app/components/ExamplePopover";

import { ThemeProvider } from "@app/components/ThemeContext";
import { ThemeToggle } from "@app/components/ThemeToggle";
import { Input } from "@base-ui-components/react";

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <div className="p-4 items-center flex flex-col gap-4">
        <ExamplePopover />
        <Input
          placeholder="Name"
          className="h-10 w-full max-w-64 rounded-md border border-border bg-muted pl-3.5 text-base focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-primary"
        />
      </div>
    </ThemeProvider>
  );
}
