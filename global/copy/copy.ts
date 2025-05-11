export default function copyToClipboard(text: string): void {
    const textArea = document.createElement("textarea");
  
    textArea.value = text;
  
    document.body.appendChild(textArea);
  
    textArea.select();
    textArea.setSelectionRange(0, 99999);
  
    document.execCommand("copy");
  
    document.body.removeChild(textArea);
  
    console.log("Text copied to clipboard: ", text);
  }
  