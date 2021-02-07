"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VelocityXActionProvider = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("../utils");
class VelocityXActionProvider {
    provideCodeActions() {
        const editor = vscode_1.window.activeTextEditor;
        if (!editor)
            return [];
        const selectedText = editor.document.getText(utils_1.getSelectedText(editor));
        if (selectedText === "")
            return [];
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
exports.VelocityXActionProvider = VelocityXActionProvider;
//# sourceMappingURL=velocityX-action-provider.js.map