import { window, Command, CodeActionProvider } from "vscode";
import { getSelectedText } from "../utils";

export class VelocityXActionProvider implements CodeActionProvider {
  public provideCodeActions(): Command[] {
    const editor = window.activeTextEditor;
    if (!editor) return [];
    const selectedText = editor.document.getText(getSelectedText(editor));
    if (selectedText === "") return [];
    return [
      {
        "command": "extension.wrap-vstack",
        "title": "Wrap New Vstack",
      },
      {
        "command": "extension.wrap-vstackscroll",
        "title": "Wrap New Vstack Scroll",
      },
      {
        "command": "extension.wrap-hstack",
        "title": "Wrap New Hstack",
      },
      {
        "command": "extension.wrap-hstackscroll",
        "title": "Wrap New Hstack Scroll",
      },
      {
        "command": "extension.wrap-vxdisclist",
        "title": "Wrap New Disc List",
      },
      {
        "command": "extension.wrap-vscrollvertical",
        "title": "Wrap vertical scroll",
      }
    ];
  }
}
