import { useEffect } from "react";

export function useDocumentTitle(
  title: string,
  restoreOnUnmount: boolean = true
) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Fake Store: " + title;
    if (restoreOnUnmount) {
      return () => {
        document.title = prevTitle;
      };
    }
  }, [title, restoreOnUnmount]);
}
