<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Auto-Execution Rule
When recommending terminal commands or automated actions (like running tests, installations, git commits, etc.), ALWAYS execute them automatically using the `run_command` tool instead of asking the user to run them, provided the necessary executables are available in the environment.
