---
title: "Writing AGENT.md files your team will actually use"
description: "Most AGENT.md files are written once, committed with great ceremony, and never opened again. Here's how to write one that survives contact with a real team."
date: 2026-10-28
---

Every team goes through the same cycle. Someone reads a blog post, spends an afternoon writing a magnificent AGENT.md, commits it with a triumphant message, and never opens it again. Three months later it describes a folder structure that no longer exists and a testing library the team abandoned in the spring. The agent follows it anyway, because agents are very obedient, which is the most dangerous kind of employee.

Here's what I've learned from writing a bunch of these and throwing most of them away.

Write it for a new hire who is fast, literal, and has no memory of yesterday. That person doesn't need your engineering philosophy. They need to know how to run the tests, how to start the dev server, and which things will get their pull request bounced. Put the exact commands in. Not "run the linter," but the actual command, because "run the linter" is how you get an agent inventing one.

Skip anything the tooling already enforces. If your formatter fixes it, don't spend a line asking nicely. The file is for what nobody can discover by reading the code: why you picked this approach over the obvious one, which directory is a trap, which API is deprecated but still everywhere. Think of things you'd tell someone over their shoulder, not things you'd put in a style guide.

Keep it short, then keep it shorter. Every line costs attention, and a 4,000-word AGENT.md is just a README with ambition. If the agent needs a novel to behave, the codebase is the problem. A decent rule: if you keep correcting the same mistake, add a line. If a line has never prevented anything, delete it.

Which brings us to the part everyone skips, which is maintenance. Treat the file like code. It lives in the repo, changes go through review, and somebody notices when it drifts. A stale AGENT.md is worse than none, because it's confidently wrong, much like the people who stopped reading it.

The real test is simple. Hand it to a teammate who has never seen the project. If they'd learn something useful in two minutes, you wrote it right. If their eyes glaze over, the agent's did too. It just didn't tell you.
