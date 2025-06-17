# Narrative Map

## Commit Timeline

- **Enhance QuadrantityReflection Node**
    - Added variable support and output from reflections.
    - Created new ledger documentation to explain the node purpose.
- **Add Seraphine Persona Node**
    - Introduced a dedicated persona component for Seraphine.
    - Logged ledger entry and documentation for ritual usage.
- **Dynamic Memory Retrieval**
    - Refactored Seraphine persona to scan for memory keys and consolidate entries at runtime.
    - Documented new behavior and ledger entry.
- **Reflection Summary Output**
    - QuadrantityReflection node now emits a `summary` field joining all reflections for easier downstream use.
    - Logged update in ledger-QuadrantityReflectionSummary-2506131939.json.
- **LedgerEntry Component**

    - Added LedgerEntry node allowing flows to generate ledger JSON objects and optionally save them.
    - Documented the node in LedgerEntryAgentflowV1.ledger.md and created a ledger entry file.

- **DevOps Companion Persona**
    - Created DevOpsCompanionPersona node for Mia's automation and deployment wizardry.
    - Documented in DevOpsCompanionPersonaAgentflowV1.ledger.md and logged ledger file.
- **Quadrantity Reflection Ledger Option**
    - Node can now save reflections to a JSON file when `save` is enabled.
    - Added example template linking Quadrantity, QuadrantityReflection, and LedgerEntry nodes.
- **Documentation Overview**
    - Summarized nodes in `QUADRANTITY_FLOWISE_DOC_PROMPT.md`.
    - Provided `eslint.config.js` bridge so lint runs in flat config.
- **Lint Migration and Appendix**
    - Converted ESLint config using `@eslint/eslintrc`.
    - Ignored documentation files so lint passes.
    - Extended the doc prompt with an Appendix linking related projects.
- **Reflection Ledger Output**
    - QuadrantityReflection allows custom file paths and returns a ledger object for chaining.
    - Documented update in ledger and exploration log.
- **Delimiter & Structured Ledger**
    - QuadrantityReflection accepts a `delimiter` input and outputs a full ledger with agents and narrative.
    - Removed obsolete pnpm-lock.yaml to reduce repo size.
- **Memory Pattern Fetching**
    - QuadrantityReflection can now scan memory keys via `tushell` using a `memoryPattern` input.
    - Combined memories are appended to the summary and output as `memorySummary`.
- **UI Integration & MiAct Agents**
    - Added QuadrantityReflection and persona nodes to UI constants and canvas.
    - Duplicated ReAct agents as MiAct variants using custom LangSmith prompts.
- **Reflection Output Anchors**
    - QuadrantityReflection node exposes summary and individual reflection fields as output handles for easier connections.

- **MiAct Template**
    - Added marketplace and flow template demonstrating Quadrantity Reflection with MiAct agent.
- **MiAct Component Review**
    - Verified MiAct agents and reflection nodes align with existing patterns
    - Confirmed UI icons and marketplace template connect nodes correctly
