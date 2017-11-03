'use strict';

import * as vscode from 'vscode';

// this method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
  let cmdP = vscode.commands.registerCommand(
    'extension.touchbarCommandPalette',
    () => {
      // Open Command Pallete
      vscode.commands.executeCommand('workbench.action.showCommands');
    }
  );

  let quickOpen = vscode.commands.registerCommand(
    'extension.touchbarQuickOpen',
    () => {
      // Open Quick Open
      vscode.commands.executeCommand('workbench.action.quickOpen');
    }
  );

  let terminal = vscode.commands.registerCommand(
    'extension.touchbarTerminal',
    () => {
      // Open Quick Open
      vscode.commands.executeCommand('workbench.action.terminal.toggleTerminal');
    }
  );

  // extension.touchbarComment
  let comment = vscode.commands.registerCommand(
    'extension.touchbarComment',
    () => {
      // Open Quick Open
      vscode.commands.executeCommand('editor.action.commentLine');
    }
  );

  // Push onto context
  context.subscriptions.push(cmdP);
  context.subscriptions.push(quickOpen);
  context.subscriptions.push(terminal);
  context.subscriptions.push(comment);
}

// this method is called when your extension is deactivated
export function deactivate() {}
