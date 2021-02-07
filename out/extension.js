"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const utils_1 = require("./utils");
const commands_1 = require("./commands");
const code_actions_1 = require("./code-actions");
const DART_MODE = { language: "dart", scheme: "file" };
function activate(_context) {
    if (vscode_1.workspace.getConfiguration("bloc").get("checkForUpdates")) {
        utils_1.analyzeDependencies();
    }
    _context.subscriptions.push(vscode_1.commands.registerCommand("extension.wrap-vstack", commands_1.wrapWithVStack), vscode_1.commands.registerCommand("extension.wrap-vstackscroll", commands_1.wrapWithVStackScroll), vscode_1.commands.registerCommand("extension.wrap-hstack", commands_1.wrapWithHStack), vscode_1.commands.registerCommand("extension.wrap-hstackscroll", commands_1.wrapWithHstackScroll), vscode_1.commands.registerCommand("extension.wrap-vxdisclist", commands_1.wrapWithVxDiscList), vscode_1.commands.registerCommand("extension.wrap-vscrollvertical", commands_1.wrapWithVxScrollVerticial), vscode_1.languages.registerCodeActionsProvider(DART_MODE, new code_actions_1.VelocityXActionProvider()));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map