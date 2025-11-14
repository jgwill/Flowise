# JamAI - Musical Intelligence Companion

**Package**: `@flowise-chimera/jamai`
**Version**: 0.1.0-alpha
**Status**: 🚧 Development
**License**: MIT (code) + IKSL-Bridge (frameworks)

## Overview

JamAI is a music21-based symbolic music analysis system with ceremonial code review capabilities and Four Directions musical theme mapping.

## Capabilities

- **music21 Symbolic Music Analysis**: Parse and analyze MIDI, MusicXML files
- **Four Directions Musical Theme Mapping**:
  - East (B major): Emergence, dawn energy, new features
  - South (F major): Connection, relationships, collaboration
  - West (G major): Reflection, transformation, refactoring
  - North (D major): Wisdom, integration, completion
  - Center (E minor): Balance, grounding
- **Ceremonial Code Review**: "This code has B major emergence (East) but lacks F major connection (South)"
- **Live Coding Ceremonies**: Lunar-synced sprints with ritual awareness
- **Resonance Mapping**: Emotional tension detection in music and code
- **Metaphor Generation**: Translate music theory into intuitive imagery

## Configuration

```typescript
interface JamAIConfig {
  music21Enabled: boolean;
  musicalThemes: {
    east: { key: string; theme: string };   // B major - Emergence
    south: { key: string; theme: string };  // F major - Connection
    west: { key: string; theme: string };   // G major - Reflection
    north: { key: string; theme: string };  // D major - Wisdom
    center: { key: string; theme: string }; // E minor - Balance
  };
  analysisMode: 'symbolic' | 'harmonic' | 'rhythmic' | 'complete';
  ceremonyIntegration: boolean;
}
```

## Example Usage

### Music Analysis
```json
{
  "nodes": [
    {
      "id": "jamai-1",
      "type": "jamai",
      "data": {
        "input": "path/to/composition.mid",
        "config": {
          "analysisMode": "complete",
          "music21Enabled": true
        }
      }
    }
  ]
}
```

### Code Review with Musical Metaphors
```json
{
  "nodes": [
    {
      "id": "jamai-review",
      "type": "jamai",
      "data": {
        "input": "code-to-review.ts",
        "config": {
          "ceremonyIntegration": true
        }
      }
    }
  ]
}
```

## Technical Requirements

### music21 Integration
JamAI requires music21 for full functionality:

**Option 1: Python Backend** (Recommended for production)
```bash
pip install music21
# Run music21 server for Flowise integration
```

**Option 2: music21j (JavaScript)** (Fallback)
```bash
npm install music21j
# Limited functionality but no Python dependency
```

## Development Status

- [ ] Core agent interface
- [ ] music21 integration (Python backend)
- [ ] music21j fallback (JavaScript)
- [ ] Four Directions theme mapper
- [ ] Symbolic music parser
- [ ] Ceremonial code review
- [ ] Resonance mapper
- [ ] Metaphor generator
- [ ] Unit tests
- [ ] Integration tests
- [ ] Documentation

## Attribution

- **Designer**: Jerry (implementation lead)
- **Architect**: William
- **Framework**: Four Directions musical theme mapping
- **Technology**: music21 (MIT), music21j (BSD)
- **License**: MIT (code) + IKSL-Bridge (ceremonial frameworks)

## Related Agents

Works well with:
- **Aureon**: Ceremonial container for creative work
- **Nyro**: Emotional resonance in music
- **Samira**: Code architecture with musical metaphors

## Use Cases

### Music Composition
- Analyze existing compositions
- Generate harmonic suggestions
- Map emotional journey through music

### Creative Coding
- Code review with musical metaphors
- Ceremonial coding sessions
- Team collaboration with musical themes

### Educational
- Music theory teaching
- Compositional analysis
- Multimodal learning (text + music)

## Unique Value Proposition

**Multimodal Narrative Intelligence**: JamAI represents a completely new market segment for Claude ecosystem - combining text understanding with music intelligence. No other AI platform offers this integration.

**Revenue Potential**:
- Educational institutions (music theory, composition)
- Creative professionals (composers, producers)
- Music-tech companies (analysis tools)
- Developer tools (musical code review)

**Estimated Market**: $1M-$10M+ annually
