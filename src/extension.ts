import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    console.log('QuickMD extension is now active!');

    let disposable = vscode.commands.registerCommand('quickmd.createMarkdownFile', async () => {
        const config = vscode.workspace.getConfiguration('quickmd');
        const fileNamePattern = config.get<string>('fileNamePattern', 'YYYY-MM-DD_HHmm_ss');
        const fileExtension = config.get<string>('fileExtension', '.md');
        const defaultFolder = config.get<string>('defaultFolder', '');
        const initialContent = config.get<string>('initialContent', '');
        const openAfterCreate = config.get<boolean>('openAfterCreate', true);

        const fileName = generateFileName(fileNamePattern) + fileExtension;

        let targetFolder: string;

        if (vscode.workspace.workspaceFolders && vscode.workspace.workspaceFolders.length > 0) {
            const workspaceRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;

            if (defaultFolder) {
                if (path.isAbsolute(defaultFolder) && fs.existsSync(defaultFolder)) {
                    targetFolder = defaultFolder;
                } else {
                    targetFolder = path.join(workspaceRoot, defaultFolder);
                    if (!fs.existsSync(targetFolder)) {
                        fs.mkdirSync(targetFolder, { recursive: true });
                    }
                }
            } else {
                targetFolder = workspaceRoot;
            }
        } else {
            const folderUri = await vscode.window.showOpenDialog({
                canSelectFolders: true,
                canSelectFiles: false,
                canSelectMany: false,
                openLabel: 'Select folder for new markdown file'
            });

            if (!folderUri || folderUri.length === 0) {
                vscode.window.showInformationMessage('No folder selected. File creation cancelled.');
                return;
            }
            targetFolder = folderUri[0].fsPath;
        }

        const filePath = path.join(targetFolder, fileName);

        try {
            fs.writeFileSync(filePath, initialContent, 'utf8');
            vscode.window.showInformationMessage(`Created: ${fileName}`);

            if (openAfterCreate) {
                const document = await vscode.workspace.openTextDocument(filePath);
                await vscode.window.showTextDocument(document);

                const editor = vscode.window.activeTextEditor;
                if (editor) {
                    const lastLine = document.lineCount - 1;
                    const lastChar = document.lineAt(lastLine).text.length;
                    const position = new vscode.Position(lastLine, lastChar);
                    editor.selection = new vscode.Selection(position, position);
                }
            }
        } catch (error) {
            vscode.window.showErrorMessage(`Failed to create file: ${error}`);
        }
    });

    context.subscriptions.push(disposable);
}

function generateFileName(pattern: string): string {
    const now = new Date();

    const replacements: { [key: string]: string } = {
        'YYYY': now.getFullYear().toString(),
        'MM': String(now.getMonth() + 1).padStart(2, '0'),
        'DD': String(now.getDate()).padStart(2, '0'),
        'HH': String(now.getHours()).padStart(2, '0'),
        'hh': String(now.getHours() % 12 || 12).padStart(2, '0'),
        'mm': String(now.getMinutes()).padStart(2, '0'),
        'ss': String(now.getSeconds()).padStart(2, '0'),
        'SSS': String(now.getMilliseconds()).padStart(3, '0')
    };

    let fileName = pattern;
    for (const [key, value] of Object.entries(replacements)) {
        fileName = fileName.replace(new RegExp(key, 'g'), value);
    }

    return fileName;
}

export function deactivate() {}