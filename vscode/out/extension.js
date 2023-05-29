"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // 追踪当前webview面板
    let currentPanel = undefined;
    context.subscriptions.push(vscode.commands.registerTextEditorCommand("leah.start", async (editor, edit) => {
        // 创建面板
        currentPanel = vscode.window.createWebviewPanel("LEAH", "leah-cli", 
        // 创建到第二栏
        vscode.ViewColumn.Two, {
            enableScripts: true,
        });
        // 加载html
        currentPanel.webview.html = getWebviewContent(context, currentPanel.webview);
        // 当前面板被关闭后重置
        // 必须要加 否则就一直不释放内存 导致卡 和vscode死机
        currentPanel.onDidDispose(() => {
            currentPanel = undefined;
        }, null, context.subscriptions);
    }));
}
exports.activate = activate;
function getWebviewContent(context, webview) {
    const cssPath = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "index.css"));
    const jsReactPath = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "build/static/js/main.js"));
    const cssReactPath = webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, "media", "build/static/css/main.css"));
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cat Coding</title>
						<link href="${cssPath}" rel="stylesheet">
						<link href="${cssReactPath}" rel="stylesheet">
        </head>
        <body>
						<div id="send_message" class="display_none">webview向vscode发送信息</div>
						<div id="vscode_webview" class="display_none">vscode向webview发送信息</div>
    				<div id="root"></div>
						<script src="${jsReactPath}"></script>
        </body>
        </html>
    `;
}
//# sourceMappingURL=extension.js.map