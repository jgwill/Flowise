# CHIMERA Character System

**Package**: `@flowise/components/chimera`
**Version**: 1.0.0 (Phase 1)
**Status**: ✅ Implemented
**License**: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)

## Overview

The CHIMERA Character System implements character-as-code with inheritance, mentorship lineage, and narrative coherence validation. It's the foundation for Season 4 & Chimera integration with Flowise multi-agent platform.

## Core Concepts

### 1. Character Instances

Characters are object-oriented instances with:
- **Parent Class Archetype**: e.g., "Catalyst of Change"
- **Inheritable Properties**: Wounds, soul powers, values, behaviors
- **Mentorship Lineage**: Connection to ancestral wisdom (Jimmy K → Bob → Bill W → William → Jerry)
- **Universe Context**: Specific narrative setting
- **Coherence Validation**: NCP-based behavioral consistency checking

### 2. Three Primary Characters

#### Jordan (Post-Apocalyptic Earth)
- **Wound**: Autonomy - Questions permission to exist
- **Soul Power**: Reconstructing Sacred Containers from Fragments
- **Role**: Archive Excavator & Community Rebuilder
- **Ceremonial Affinities**: West (Reflection), North (Wisdom), Center (Balance)

#### Nairo (Intergalactic Confederation)
- **Wound**: Belonging - Feels alien everywhere
- **Soul Power**: Translating Ceremony Across Species
- **Role**: Cultural Translator & Ceremonial Diplomat
- **Ceremonial Affinities**: South (Connection), East (Emergence), Center (Balance)

#### Mia (Contemporary Urban)
- **Wound**: Identity - Navigates identity crisis
- **Soul Power**: Reclaiming Authentic Connection Through Technology
- **Role**: Identity Reclaimer & Technology Ceremonialist
- **Ceremonial Affinities**: East (Emergence), South (Connection), West (Reflection)

### 3. Cross-Universe Mirrors

All three characters share:
- Same parent class ("Catalyst of Change")
- Same mentorship lineage (ancestral wisdom)
- Similar behavioral patterns (adapted to universe)
- Mirrored narrative arcs across universes

## Quick Start

### Create Characters

```typescript
import { createAllCharacters } from '@flowise/components/chimera'

const { jordan, nairo, mia } = createAllCharacters()

console.log(jordan.name) // "Jordan"
console.log(jordan.universe_context?.name) // "Post-Apocalyptic Earth"
console.log(jordan.wound_type) // "autonomy"
```

### Validate Coherence

```typescript
import { createJordan } from '@flowise/components/chimera'

const jordan = createJordan()
const validation = jordan.validateCoherence()

console.log(validation.coherenceScore) // 0.0 - 1.0
console.log(validation.coherenceLevel) // "high" | "medium" | "low"
console.log(validation.violations) // Array of violations
console.log(validation.recommendations) // Array of recommendations
```

### Detect Mirrors

```typescript
import { createAllCharacters } from '@flowise/components/chimera'

const { jordan, nairo, mia } = createAllCharacters()

const mirrors = jordan.findMirrors([nairo, mia])

mirrors.forEach(mirror => {
  console.log(`Mirror: ${mirror.mirroredCharacterName}`)
  console.log(`Strength: ${mirror.mirrorStrength}`)
  console.log(`Shared patterns:`, mirror.sharedPatterns)
  console.log(`Mentorship overlap:`, mirror.mentorshipOverlap)
})
```

### Trace Lineage

```typescript
import { createJordan } from '@flowise/components/chimera'

const jordan = createJordan()
const lineage = jordan.traceLineage()

console.log(lineage)
// ["Jerry", "William", "Bill W", "Bob", "Jimmy K"]
```

### Update Story Beat

```typescript
import { createMia } from '@flowise/components/chimera'

const mia = createMia()

const newBeat = {
  beat_id: 'beat-001',
  description: 'Mia discovers ceremonial technology framework',
  quad_cycle: {
    situation: 'Disconnected from heritage in urban digital space',
    action: 'Explores combining technology with ceremony',
    justification: 'Technology can serve connection, not extraction',
    opinion: 'Authentic identity emerges through intentional practice'
  },
  emotional_state: 'Hopeful curiosity tinged with uncertainty'
}

const validation = mia.updateStoryBeat(newBeat)
console.log(`Coherence after beat: ${validation.coherenceScore}`)
```

## API Reference

### CharacterInstance Class

#### Properties

```typescript
character_id: string          // UUID (deterministic)
name: string                  // Character name
parent_class: string          // Archetype (e.g., "Catalyst of Change")
universe_id: string           // UUID of universe
universe_context: UniverseContext
inheritable_properties: InheritableProperties
mentorship_lineage: MentorshipLink[]
wound_type: WoundType         // autonomy | belonging | identity
soul_power: string
current_story_beat?: StoryBeat
coherence_score: number       // 0.0 to 1.0
```

#### Methods

```typescript
validateCoherence(): ValidationResult
findMirrors(otherCharacters: CharacterInstance[]): MirrorMapping[]
traceLineage(): string[]
getPrimaryCeremonialDirection(): Direction | null
updateStoryBeat(newBeat: StoryBeat): ValidationResult
getValidationHistory(): ValidationResult[]
getDiscoveredMirrors(): MirrorMapping[]
toDatabase(): any
static fromDatabase(record: any): CharacterInstance
```

### CharacterFactory Class

```typescript
static createJordan(): CharacterInstance
static createNairo(): CharacterInstance
static createMia(): CharacterInstance
static createAllCharacters(): { jordan, nairo, mia }
static detectCrossUniverseMirrors(): { jordan, nairo, mia }
static validateAllCharacters(): { jordan, nairo, mia }
static getCharacterByName(name: string): CharacterInstance | undefined
static createFromArchetype(
  archetype: string,
  name: string,
  universe: UniverseContext,
  overrides: Partial<InheritableProperties>
): CharacterInstance
```

### Universe Definitions

```typescript
// Pre-defined universes
POST_APOCALYPTIC_EARTH: UniverseContext
INTERGALACTIC_CONFEDERATION: UniverseContext
CONTEMPORARY_URBAN: UniverseContext

// Lookup functions
getUniverseById(universeId: string): UniverseContext | undefined
getUniverseByName(universeName: string): UniverseContext | undefined
listAllUniverses(): UniverseContext[]
validateUniverseCompatibility(archetype: string, universe: UniverseContext)
```

## Interfaces

### InheritableProperties

```typescript
interface InheritableProperties {
  wound_type: WoundType
  soul_power: string
  core_values: string[]
  behavioral_patterns: string[]
  ceremonial_affinities: Direction[]
  growth_arc_template: string
  voice_characteristics: string[]
}
```

### MentorshipLink

```typescript
interface MentorshipLink {
  mentorName: string
  relationship: string
  teachings: string[]
  generation: number  // 0 = root
}
```

### MirrorMapping

```typescript
interface MirrorMapping {
  mirroredCharacterId: string
  mirroredCharacterName: string
  mirroredUniverseId: string
  sharedPatterns: string[]
  mentorshipOverlap: string[]
  mirrorStrength: number  // 0.0 to 1.0
}
```

### ValidationResult

```typescript
interface ValidationResult {
  passed: boolean
  coherenceScore: number  // 0.0 to 1.0
  coherenceLevel: 'high' | 'medium' | 'low'
  violations: string[]
  recommendations: string[]
  validatedAt: string
}
```

## Database Integration

### Storing Characters

```typescript
import { createJordan } from '@flowise/components/chimera'
import { db } from '@flowise/server/database'

const jordan = createJordan()
const dbRecord = jordan.toDatabase()

await db.query(
  `INSERT INTO character_instances
   (character_id, name, parent_class, universe_id, inheritable_properties,
    mentorship_lineage, wound_type, soul_power, coherence_score, created_at, updated_at)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
  [
    dbRecord.character_id,
    dbRecord.name,
    dbRecord.parent_class,
    dbRecord.universe_id,
    JSON.stringify(dbRecord.inheritable_properties),
    JSON.stringify(dbRecord.mentorship_lineage),
    dbRecord.wound_type,
    dbRecord.soul_power,
    dbRecord.coherence_score,
    dbRecord.created_at,
    dbRecord.updated_at
  ]
)
```

### Loading Characters

```typescript
import { CharacterInstance } from '@flowise/components/chimera'

const result = await db.query(
  `SELECT * FROM character_instances WHERE name = $1`,
  ['Jordan']
)

const jordan = CharacterInstance.fromDatabase(result.rows[0])
```

## Mentorship Lineage

All CHIMERA characters trace back to ancestral wisdom:

```
Generation 0 (Root):
└─ Jimmy K (James Kinnon) - Mutual aid foundation

Generation 1:
└─ Bob (Dr. Bob Smith) - Clinical integration

Generation 2:
└─ Bill W (Bill Wilson) - Systematic framework

Generation 3 (Contemporary):
├─ William - Ceremonial technology architect
└─ Jerry - Implementation specialist

Generation 4 (Character Instances):
├─ Jordan (Post-Apocalyptic Earth)
├─ Nairo (Intergalactic Confederation)
└─ Mia (Contemporary Urban)
```

## Coherence Validation

Characters are validated against:

1. **Parent class alignment** - Properties match archetype
2. **Mentorship lineage completeness** - Has root ancestor, no gaps
3. **Wound type definition** - Core dramatic tension present
4. **Soul power definition** - Transformative capacity defined
5. **Story beat quad cycle** - Situation/Action/Justification/Opinion complete
6. **Action alignment** - Character actions align with wound type
7. **Inheritable properties** - Core values and patterns defined

Coherence score ranges:
- **0.8 - 1.0**: High coherence (character well-defined, narrative consistent)
- **0.5 - 0.79**: Medium coherence (minor issues, recommendations provided)
- **0.0 - 0.49**: Low coherence (significant violations, needs revision)

## Cross-Universe Mirroring

Mirror detection checks:
- **Same parent class** (+0.4 strength)
- **Same wound type** (+0.2 strength)
- **Shared mentorship** (+0.15 per shared mentor)
- **Behavioral patterns overlap** (+0.05 per shared pattern)
- **Core values overlap** (+0.05 per shared value)

Threshold for mirror recognition: 0.3 strength minimum

## Attribution

- **Designer**: William (CHIMERA narrative architecture, mentorship lineage)
- **Implementation**: Jerry (TypeScript class system, factory pattern)
- **Mentorship Roots**: Jimmy K, Bob, Bill W (ancestral wisdom sources)
- **Framework**: Character-as-Code, Object-Oriented Storytelling
- **License**: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)

## Related Components

- **NCP Validator** (`/nodes/ncp/`) - Story beat validation
- **Ceremonial Nodes** (`/nodes/ceremonial/`) - Four Directions integration
- **Trace Lineage** (`ceremonialUUID.ts`) - Decision genealogy
- **Chimera Team Agents** (`/nodes/chimera-agents/`) - AI agent implementations

## Next Steps (Phase 2)

- [ ] NCP Validator integration with character coherence
- [ ] Story beat quad cycle validation
- [ ] Throughline tracking across beats
- [ ] Authorial attribution for multi-agent contributions
- [ ] Seven Generations impact assessment prompts

---

**This is ceremony becoming infrastructure** 🌀♾️🧠🕊
