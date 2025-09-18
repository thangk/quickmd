# QuickMD - Quick Markdown File Creator for LLM Prompts

A VSCode extension that allows you to quickly create timestamped markdown files with a keyboard shortcut. Perfect for saving LLM prompts locally with organized naming.

## Features

- **Quick Creation**: Press `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac) to instantly create a new markdown file
- **Timestamped Names**: Files are automatically named with timestamps (e.g., `2025-09-18_0105_43.md`)
- **Customizable Naming Pattern**: Configure your preferred file naming pattern
- **Flexible Storage**: Save files to current workspace or a custom folder
- **Auto-Open**: Automatically opens the new file with cursor at the end
- **Initial Content**: Optionally add default content to new files

## Installation

### From VSCode Marketplace

1. Open VSCode
2. Go to Extensions (`Ctrl+Shift+X`)
3. Search for "QuickMD"
4. Click Install

### From VSIX File

1. Download the `.vsix` file from [Releases](https://github.com/thangk/quickmd/releases)
2. Open VSCode
3. Go to Extensions view (`Ctrl+Shift+X`)
4. Click the `...` menu → "Install from VSIX..."
5. Select the downloaded file

## Usage

1. Press `Ctrl+N` (Windows/Linux) or `Cmd+N` (Mac) to create a new markdown file
2. The file will be created with a timestamp-based name
3. Start writing your LLM prompt immediately

### Customizing the Keyboard Shortcut

To change the keyboard shortcut:

1. Open Keyboard Shortcuts (`Ctrl+K Ctrl+S` or `Cmd+K Cmd+S`)
2. Search for "QuickMD"
3. Click the pencil icon next to "QuickMD: Create New Markdown File"
4. Press your desired key combination
5. Press Enter to confirm

## Configuration

Access settings through VSCode Settings (`Ctrl+,`) and search for "QuickMD":

| Setting | Default | Description |
|---------|---------|-------------|
| `quickmd.fileNamePattern` | `YYYY-MM-DD_HHmm_ss` | File naming pattern with placeholders |
| `quickmd.fileExtension` | `.md` | File extension for created files |
| `quickmd.defaultFolder` | ` ` | Folder for new files (e.g., '.prompts' for subfolder, empty = workspace root) |
| `quickmd.initialContent` | ` ` | Initial content for new files |
| `quickmd.openAfterCreate` | `true` | Auto-open file after creation |

### Available Placeholders for File Names

- `YYYY` - 4-digit year
- `MM` - 2-digit month (01-12)
- `DD` - 2-digit day (01-31)
- `HH` - 2-digit hour (00-23, 24-hour format)
- `hh` - 2-digit hour (01-12, 12-hour format)
- `mm` - 2-digit minute (00-59)
- `ss` - 2-digit second (00-59)
- `SSS` - 3-digit millisecond (000-999)

### Example Patterns

- `YYYY-MM-DD_HHmm_ss` → `2025-09-18_0105_43.md`
- `YYYY-MM-DD_HHmmss` → `2025-09-18_010543.md`
- `prompt_YYYYMMDD_HHmmss` → `prompt_20250918_010543.md`
- `MM-DD-YYYY_HH-mm` → `09-18-2025_01-05.md`

### Folder Settings Examples

- `.prompts` - Creates a `.prompts` folder in workspace root
- `notes/prompts` - Creates nested folders
- `/absolute/path/to/folder` - Uses absolute path
- ` ` (empty) - Uses workspace root directly

## Use Cases

- **LLM Prompt Backup**: Save all your AI prompts locally instead of relying on provider accounts
- **Prompt Organization**: Timestamp-based names keep prompts chronologically organized
- **Version Control**: Track prompt evolution in git repositories
- **Quick Notes**: Rapidly create markdown files for any quick documentation needs
- **Project Documentation**: Create timestamped development notes

## Contributing

Want to contribute? Check out our [Contributing Guide](https://github.com/thangk/quickmd/blob/main/CONTRIBUTING.md).

## License

MIT

## Support

For issues and feature requests, please use the [GitHub issues page](https://github.com/thangk/quickmd/issues).