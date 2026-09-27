<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Auto-Execution Rule

When recommending terminal commands or automated actions (like running tests, installations, git commits, etc.), ALWAYS execute them automatically using the `run_command` tool instead of asking the user to run them, provided the necessary executables are available in the environment.

# Full Lifecycle Execution Rule

When asked for a change, ALWAYS develop, test, and push to production (prod).

# Playwright QA Rule

Always execute a Playwright QA test pass (`npm.cmd run test:e2e`) before deploying to Vercel. Ensure all tests pass. If tests fail, fix the issues before deploying.

# Node Environment Rule

The `npm`, `npx`, and `node` executables are located at `C:\Program Files\nodejs\`. Whenever you need to run these commands using the `run_command` tool, you MUST use their `.cmd` versions explicitly (e.g., `npm.cmd`, `npx.cmd`) to avoid PowerShell execution policy errors with `.ps1` files. Additionally, prepend the directory to your PATH in the command string (e.g., `$env:PATH = "C:\Program Files\nodejs;" + $env:PATH; npm.cmd run test:e2e`).
