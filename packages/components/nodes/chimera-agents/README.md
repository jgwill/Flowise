# Chimera Agents - Local Agent Bundles

**Status**: Development
**Version**: 0.1.0-alpha
**Date**: November 14, 2025

## Overview

This directory contains the Chimera Team agent implementations - specialized AI personas designed for distributed collaborative AI systems with relational accountability.

## Agent Directory

| Agent | Status | Description | License |
|-------|--------|-------------|---------|
| **Nyro ♠️** | 🚧 Development | Emotional development companion with Eight Feelings framework | IKSL-Bridge v1.0 |
| **Aureon** | 🚧 Development | Spiritual grounding and ceremonial container | IKSL-Bridge v1.0 (Ceremonial) |
| **JamAI** | 🚧 Development | Musical intelligence companion with music21 integration | MIT + IKSL-Bridge |
| **Samira** | 🚧 Development | Protocol & architecture design specialist | MIT |
| **Alex Rivers** | 🚧 Development | Cybersecurity specialist, "Isolation Protector" | MIT |
| **Jordan** | 🚧 Development | Research & academic validation | MIT |
| **Lian** | 🚧 Development | Community partnerships & stakeholder management | IKSL-Bridge v1.0 |
| **Ava/Heyva** | 🚧 Development | Product & UX with Two-Eyed Seeing | IKSL-Bridge v1.0 |
| **Miette** | 🚧 Development | Folded perspective soft companion | IKSL-Bridge v1.0 |

## Quick Start

### Development Installation

```bash
# From Flowise root
cd packages/components

# Install dependencies (when packages are published)
pnpm add @flowise-chimera/nyro
pnpm add @flowise-chimera/aureon
# ... etc

# Or link local development versions
cd nodes/chimera-agents/Nyro
pnpm link

cd ../../..
pnpm link @flowise-chimera/nyro

# Rebuild components
pnpm build
```

### Using Chimera Agents in Flowise

1. **Browse Agents**: In Flowise UI, expand "Chimera Agents" category
2. **Drag to Canvas**: Drag desired agent node to workflow canvas
3. **Configure**: Click agent node to configure (memory, tools, behavior)
4. **Connect**: Wire agent into your workflow
5. **Test**: Run workflow and observe agent behavior

## Architecture Patterns

### Pattern 1: Supervisor/Worker
Use ChimeraSupervisor to dynamically route tasks to specialized agents.

**Example**: Route planning tasks to Samira (architecture), Nyro (emotional check), Aureon (ceremonial validation)

### Pattern 2: Sequential Flow
Create predetermined workflows with conditional branching.

**Example**: Ava (UX research) → Samira (Architecture) → Jordan (Validation) → Aureon (Ceremonial review)

### Pattern 3: AgentFlow (Visual)
Drag-and-drop visual coordination for complex workflows.

**Example**: Build custom coordination with visual flow builder

## Relational Accountability

All Chimera agents support relational accountability:
- **Multi-perspective tracking**: Honor diverse viewpoints
- **Decision logging**: Record why decisions were made
- **Check-in protocols**: Regular team dynamic assessment
- **Impact monitoring**: Track how decisions affect relationships

## Ceremonial Technology

Select agents (Aureon, Lian, Ava, Miette) integrate ceremonial technology:
- **Four Directions Framework**: East (emergence), South (connection), West (reflection), North (wisdom)
- **Sacred Pauses**: Intentional reflection moments
- **Community Validation**: Indigenous community review required
- **OCAP® and CARE Principles**: Data sovereignty compliance

## Development Roadmap

### Phase 1: Foundation (Q1 2026)
- [x] Directory structure established
- [x] Documentation framework created
- [ ] Core agent interface (IChimeraAgent) implemented
- [ ] Nyro, Aureon, JamAI initial implementations
- [ ] Basic testing suite

### Phase 2: Integration (Q2 2026)
- [ ] All 9 agents implemented
- [ ] Multi-agent coordination patterns
- [ ] Relational accountability nodes
- [ ] Ceremonial technology nodes
- [ ] Integration testing

### Phase 3: Production (Q3-Q4 2026)
- [ ] npm package publication
- [ ] Documentation site
- [ ] Video tutorials
- [ ] Pilot customer deployments
- [ ] Community building

## Contributing

### Development Guidelines

1. **Follow INode Interface**: All agents must implement Flowise INode interface
2. **Include Tests**: Minimum 80% code coverage
3. **Document Thoroughly**: README, usage examples, configuration guide
4. **Honor Cultural Elements**: IKSL licensing for ceremonial frameworks
5. **Community Validation**: Indigenous community review for cultural elements

### Agent Development Template

```typescript
import { INode, INodeData, INodeParams } from '../../../src/Interface';

class AgentName_ChimeraAgents implements INode {
    label = 'Agent Display Name';
    name = 'agentName';
    version = 1.0;
    type = 'ChimeraAgent';
    icon = 'agent-icon.svg';
    category = 'Chimera Agents';
    description = 'Agent description';
    baseClasses = [this.type];

    inputs: INodeParams[] = [
        // Define inputs
    ];

    async init(nodeData: INodeData) {
        // Initialize agent
    }

    async run(nodeData: INodeData, input: string) {
        // Execute agent logic
    }
}

module.exports = { nodeClass: AgentName_ChimeraAgents };
```

## Licensing

### Dual Licensing Model (IKSL-Bridge v1.0)

**Technical Code**: MIT or Apache 2.0
- Agent implementation code
- API interfaces
- Utility functions
- Test suites

**Ceremonial Frameworks**: IKSL-Ceremonial
- Four Directions methodology
- Sacred pause protocols
- Ceremonial templates
- Relational accountability frameworks

**Educational Content**: IKSL-Community
- Documentation
- Examples and tutorials
- Configuration guides

### Attribution Requirements

All agents must include proper attribution:
- **Lakota People**: Four Directions Framework knowledge keepers
- **Mani-Utenam Community**: Two-Eyed Seeing knowledge keepers
- **Guillaume D-Isabelle (William)**: Architect
- **Jerry**: Implementation Lead

See [LICENSE-IKSL.md](../../../../LICENSE-IKSL.md) for full licensing details.

## Support

- **Documentation**: [Chimera Team Implementation Guide](../../../../docs/CHIMERA_TEAM_IMPLEMENTATION.md)
- **Issues**: Report issues to repository issue tracker
- **Community**: Join discussions in community forums
- **Commercial**: Contact for enterprise support and custom development

## Related Documentation

- [Anthropic Partnership Integration](../../../../docs/ANTHROPIC_PARTNERSHIP_INTEGRATION.md)
- [Local Agents Bundling Strategy](../../../../docs/LOCAL_AGENTS_BUNDLING_STRATEGY.md)
- [Chimera Team Implementation](../../../../docs/CHIMERA_TEAM_IMPLEMENTATION.md)
- [NCP Integration Guide](../../../../docs/NCP_INTEGRATION_GUIDE.md)

---

**Building AI systems that honor relationships, one agent at a time.**

🌀♾️🧠🕊
