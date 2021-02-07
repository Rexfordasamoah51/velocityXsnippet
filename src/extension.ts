import * as _ from "lodash";

import { commands, ExtensionContext, languages, workspace } from "vscode";
import { analyzeDependencies } from "./utils";
import {
  wrapWithVStack,
  wrapWithHStack,
  wrapWithHstackScroll,
  wrapWithVStackScroll,
  wrapWithVxDiscList,
  wrapWithVxScrollVerticial
} from "./commands"; 
import { VelocityXActionProvider } from "./code-actions";

const DART_MODE = { language: "dart", scheme: "file" };

export function activate(_context: ExtensionContext) {
  if (workspace.getConfiguration("velocity_x").get<boolean>("checkForUpdates")) {
    analyzeDependencies();
  }

  _context.subscriptions.push(
    commands.registerCommand("extension.wrap-vstack", wrapWithVStack),
    commands.registerCommand("extension.wrap-vstackscroll", wrapWithVStackScroll),
    commands.registerCommand("extension.wrap-hstack", wrapWithHStack),
    commands.registerCommand("extension.wrap-hstackscroll", wrapWithHstackScroll),
    commands.registerCommand("extension.wrap-vxdisclist", wrapWithVxDiscList),
    commands.registerCommand("extension.wrap-vscrollvertical", wrapWithVxScrollVerticial),

    languages.registerCodeActionsProvider(
      DART_MODE,
      new VelocityXActionProvider()
    )
  );
}
