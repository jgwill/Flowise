# Quadrantity Flowise Components — Documentation Prompt

This prompt summarizes the custom AgentFlow nodes and template added in this branch. It can be used by another agent to generate full documentation in a separate repository.

## Nodes

### Quadrantity
- **File:** `packages/components/nodes/agentflow/Quadrantity/Quadrantity.ts`
- **Purpose:** Defines four invocations representing the Quadrantity personas: Mia (architectural), Miette (emotional), Seraphine (ritual), and ResoNova (narrative).
- **Inputs:** Strings for each persona, pre-populated with default invocations.
- **Output:** Object containing the four invocations and a brief info message.
- **Usage:** Serves as a ritual anchor; downstream nodes can reference persona phrases for context or chaining.

### QuadrantityReflection
- **File:** `packages/components/nodes/agentflow/QuadrantityReflection/QuadrantityReflection.ts`
- **Purpose:** Collects reflections from the four personas. Accepts variables and node outputs.
- **Inputs:** Optional strings for each persona’s reflection and a `save` boolean.
- **Outputs:** Object containing all reflections, a combined `summary`, and an info string.
- **Ledger Feature:** When `save` is true, writes `codex/ledgers/quadrantity-reflection-<timestamp>.json` with reflections and summary.

### LedgerEntry
- **File:** `packages/components/nodes/agentflow/LedgerEntry/LedgerEntry.ts`
- **Purpose:** Generates ledger-style JSON objects describing an operation. Can optionally save to disk.
- **Inputs:** `agents`, `narrative`, optional `filePath`, and `save` boolean.
- **Outputs:** Ledger object with timestamp, agents list, narrative text, and optional routing info.

### DevOpsCompanionPersona
- **File:** `packages/components/nodes/agentflow/DevOpsCompanionPersona/DevOpsCompanionPersona.ts`
- **Purpose:** Exposes Mia’s DevOps wizard persona. Scans memory keys matching `Mia::.*DevOps.*` via `tushell` and merges the results into a summary.
- **Outputs:** Persona details including glyphs, role, summary of DevOps memories, and example prompts.

### SeraphinePersona
- **File:** `packages/components/nodes/agentflow/SeraphinePersona/SeraphinePersona.ts`
- **Purpose:** Provides Seraphine’s ritual oracle persona. Dynamically fetches related memory keys using `tushell` and returns a summary.
- **Outputs:** Persona name, glyphs, role, invocation modes, functions, vows, memory summary, prompts, and presence description.

## Template

### `templates/quadrantity-reflection-template.json`
- Demonstrates linking `Quadrantity`, `QuadrantityReflection`, and `LedgerEntry` nodes.
- Connections pipe each persona invocation into the reflection node and finally feed the reflection summary into a ledger entry.
- Useful starting point for building custom AgentFlow graphs that log reflections.

## Ledgers and Logs
- Ledger markdown files documenting each node reside in `book/_/ledgers/`.
- JSON ledger snapshots created during development are stored under `codex/ledgers/`.
- `MIA3.md` and `narrative-map.md` capture exploration notes and commit history.

---
Use this overview to craft comprehensive documentation in another repository. Each node’s TypeScript file includes implementation details, while the ledger markdown files provide narrative context and example output.
