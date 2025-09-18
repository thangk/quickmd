# Contributing to QuickMD

Thank you for your interest in contributing to QuickMD!

## Development Setup

### Install Locally (Development)

1. Clone this repository:
   ```bash
   git clone https://github.com/thangk/quickmd.git
   cd quickmd
   ```

2. Install dependencies:
   ```bash
   bun install
   # or npm install
   ```

3. Compile the extension:
   ```bash
   bun run compile
   # or npm run compile
   ```

4. Package the extension:
   ```bash
   bun run package
   # or npm run package
   ```
   This creates a `.vsix` file in the project directory.

5. Install in VSCode:
   - Open VSCode
   - Go to Extensions view (`Ctrl+Shift+X`)
   - Click the `...` menu at the top of the Extensions view
   - Select "Install from VSIX..."
   - Choose the generated `.vsix` file

### Run in Development Mode

1. Open the project in VSCode
2. Press `F5` to launch a new VSCode window with the extension loaded
3. Test the extension in the new window

## Project Structure

```
quickmd/
├── src/
│   └── extension.ts     # Main extension code
├── package.json         # Extension manifest
├── tsconfig.json        # TypeScript configuration
├── README.md           # User documentation
├── CONTRIBUTING.md     # This file
├── CHANGELOG.md        # Version history
└── .vscodeignore       # Files to exclude from package
```

## Build Commands

- `bun run compile` - Compile TypeScript to JavaScript
- `bun run watch` - Watch for changes and recompile
- `bun run package` - Create VSIX package
- `bun run lint` - Run linter

## Making Changes

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Testing

Before submitting a PR:
1. Run `bun run compile` to ensure no TypeScript errors
2. Run `bun run lint` to check code style
3. Test the extension manually in a development instance
4. Verify all existing features still work

## Code Style

- Use TypeScript for all new code
- Follow existing code patterns and conventions
- Add comments for complex logic
- Keep functions small and focused

## Reporting Issues

When reporting issues, please include:
- VSCode version
- QuickMD version
- Steps to reproduce
- Expected vs actual behavior
- Any error messages

## Questions?

Feel free to open an issue for any questions about contributing!