# difftree-action-test

A scratch repository for testing
[`smorinlabs/difftree-action`](https://github.com/smorinlabs/difftree-action) on
real pull requests. It holds a small multi-directory project so that PRs produce
an interesting diff-tree, plus a workflow (`.github/workflows/difftree.yml`) that
runs the action and posts a sticky diff-tree comment.

## Layout

```
src/
  app.ts
  utils/
    math.ts
    strings.ts
docs/
  guide.md
tests/
  app.test.ts
```

## How to test difftree-action

1. Create a branch and change a few files across `src/`, `docs/`, and `tests/`.
2. Open a pull request.
3. The `PR Diff Tree` workflow runs `difftree-action`, which should post a single
   comment containing a fenced ASCII diff-tree of your changes.
4. Push another commit — the **same** comment should update in place (sticky).

The workflow pins the action to a branch/tag of `difftree-action` (see
`.github/workflows/difftree.yml`); bump that ref to test a different version.
