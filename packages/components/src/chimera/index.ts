/**
 * CHIMERA Character System - Main Export
 *
 * Central export point for all CHIMERA character model components:
 * - CharacterInstance class
 * - Universe definitions
 * - Character factory
 * - Utility functions
 *
 * @see /sacred-container.json for configuration
 * @see /docs/SEASON_4_CHIMERA_INTEGRATION.md for architecture
 */

// Character Instance class and interfaces
export { CharacterInstance } from './CharacterInstance'
export type { MentorshipLink, UniverseContext, MirrorMapping, ValidationResult, InheritableProperties, StoryBeat } from './CharacterInstance'

// Universe definitions
export {
    POST_APOCALYPTIC_EARTH,
    INTERGALACTIC_CONFEDERATION,
    CONTEMPORARY_URBAN,
    UNIVERSES,
    UNIVERSES_BY_NAME,
    UNIVERSE_IDS,
    CROSS_UNIVERSE_PATTERNS,
    getUniverseById,
    getUniverseByName,
    listAllUniverses,
    validateUniverseCompatibility
} from './UniverseDefinitions'

// Character factory
export { CharacterFactory, createJordan, createNairo, createMia, createAllCharacters, detectCrossUniverseMirrors, validateAllCharacters } from './CharacterFactory'

// Re-export ceremonial UUID enums for convenience
export { Direction, WoundType, CeremonialPhase, CoherenceLevel } from '../../../server/src/utils/ceremonialUUID'

/**
 * Quick start example usage:
 *
 * ```typescript
 * import { createAllCharacters, detectCrossUniverseMirrors, validateAllCharacters } from '@flowise/components/chimera'
 *
 * // Create all three primary characters
 * const { jordan, nairo, mia } = createAllCharacters()
 *
 * // Validate coherence
 * const validations = validateAllCharacters()
 * console.log('Jordan coherence:', validations.jordan.coherenceScore)
 *
 * // Detect cross-universe mirrors
 * const mirrors = detectCrossUniverseMirrors()
 * console.log('Jordan mirrors:', mirrors.jordan)
 * ```
 */
