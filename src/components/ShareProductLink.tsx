import { useState } from "react";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";

export function ShareProductLink({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Error copy to clipboard:", err);
    }
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className="rounded-lg px-3 mr-2 py-2 text-secondary-foreground shadow-sm hover:bg-secondary/80 transition"
      >
        <ContentCopyOutlinedIcon />
      </button>
      <span className="text-base text-muted-foreground">
        {copied ? "Link copied to clipboard" : "Click to copy product link"}
      </span>
    </>
  );
}
