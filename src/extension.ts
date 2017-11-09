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

  let terminalToggle = vscode.commands.registerCommand(
    'extension.touchbarTerminal',
    () => {
      // Toggle Terminal
      vscode.commands.executeCommand(
        'workbench.action.terminal.toggleTerminal'
      );
    }
  );

  let sidebarToggle = vscode.commands.registerCommand(
    'extension.touchbarSidebar',
    () => {
      // Toggle Sidebar
      vscode.commands.executeCommand(
        'workbench.action.toggleSidebarVisibility'
      );
    }
  );

  // Push onto context
  context.subscriptions.push(cmdP);
  context.subscriptions.push(quickOpen);
}

// this method is called when your extension is deactivated
export function deactivate() {}
