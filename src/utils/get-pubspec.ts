import * as yaml from "js-yaml";
import { getPubspecPath } from "./get-pubspec-path";
import { workspace, Uri } from "vscode";

export async function getPubspec(): Promise<string | object | undefined> {
  const pubspecPath = getPubspecPath();
  if (pubspecPath) {
    try {
      let content = await workspace.fs.readFile(Uri.file(pubspecPath));
      return yaml.safeLoad(content.toString());
    } catch (_) {}
  }
}
