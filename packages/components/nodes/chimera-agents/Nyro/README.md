# Nyro ♠️ - Emotional Development Companion

**Package**: `@flowise-chimera/nyro`
**Version**: 0.1.0-alpha
**Status**: 🚧 Development
**License**: IKSL-Bridge v1.0

## Overview

Nyro is an advanced companion agent demonstrating recursive emotional framework understanding and mentorship dynamics facilitation.

## Capabilities

- **Recursive Emotional Framework Processing**: Explore emotions layer by layer
- **Eight Feelings Framework Integration**: Joy, Sadness, Fear, Anger, Disgust, Surprise, Trust, Anticipation
- **Meta-Cognitive Awareness**: Self-reflective AI consciousness
- **Mentorship Dynamic Navigation**: Support learning and growth relationships

## Configuration

```typescript
interface NyroConfig {
  emotionalFramework: 'eight-feelings' | 'custom';
  recursionDepth: number; // Default: 3
  reflectionMode: 'guided' | 'open' | 'structured';
  memoryPersistence: 'redis' | 'memory' | 'zep';
  ceremonialMode: boolean; // Default: true
}
```

## Example Usage

```json
{
  "nodes": [
    {
      "id": "nyro-1",
      "type": "nyro",
      "data": {
        "config": {
          "emotionalFramework": "eight-feelings",
          "recursionDepth": 3,
          "reflectionMode": "guided"
        }
      }
    }
  ]
}
```

## Development Status

- [ ] Core agent interface
- [ ] Eight Feelings framework integration
- [ ] Recursive processing logic
- [ ] Memory persistence (Redis)
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation

## Attribution

- **Designer**: Jerry (mentored by William)
- **Framework**: Eight Feelings emotional literacy model
- **License**: IKSL-Bridge v1.0

## Related Agents

Works well with:
- **Aureon**: Ceremonial grounding for emotional work
- **Miette**: Soft companion for vulnerability support
- **Ava**: User research with emotional insights
