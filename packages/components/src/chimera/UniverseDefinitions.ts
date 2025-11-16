/**
 * CHIMERA Universe Definitions
 *
 * Defines the three narrative universes in which CHIMERA character instances exist:
 * 1. Post-Apocalyptic Earth - Jordan's universe
 * 2. Intergalactic Confederation - Nairo's universe
 * 3. Contemporary Urban - Mia's universe
 *
 * Each universe provides context for character instantiation,
 * determining how inherited properties manifest in specific settings.
 *
 * @see /sacred-container.json for universe configuration
 * @see /docs/SEASON_4_CHIMERA_INTEGRATION.md for narrative architecture
 *
 * @attribution
 * - Designer: William (universe narrative architecture)
 * - Implementation: Jerry (TypeScript definitions)
 * - Framework: Multi-universe character mirroring
 * - License: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)
 */

import { UniverseContext } from './CharacterInstance'
import { v5 as uuidv5 } from 'uuid'
import { SACRED_CONTAINER_NAMESPACE } from '../../../server/src/utils/ceremonialUUID'

/**
 * Generate deterministic UUID for universe
 */
function generateUniverseUUID(universeName: string): string {
    return uuidv5(`universe:${universeName}`, SACRED_CONTAINER_NAMESPACE)
}

/**
 * POST-APOCALYPTIC EARTH UNIVERSE
 *
 * Jordan's universe - Rebuilding sacred containers from fragments
 *
 * Setting:
 * - 150 years after ecological collapse
 * - Scattered survivor communities rebuilding
 * - Pre-collapse knowledge exists as fragments (books, digital archives, oral tradition)
 * - Ceremony becomes critical for community cohesion
 * - Technology scarce but valued for knowledge preservation
 *
 * Themes:
 * - Reconstruction from ruins
 * - Honoring what was lost while building what's needed
 * - Sacred responsibility to future generations
 * - Knowledge archaeology (excavating ancestral wisdom)
 */
export const POST_APOCALYPTIC_EARTH: UniverseContext = {
    universe_id: generateUniverseUUID('post-apocalyptic-earth'),
    name: 'Post-Apocalyptic Earth',
    theme: 'Rebuilding sacred containers from fragments',
    era: '2174 CE (150 years post-collapse)',
    primaryConflict: 'Balancing survival needs with ceremonial integrity and seven-generation responsibility',
    ceremonialPractices: [
        'Archive Excavation Ceremonies - Honoring recovered pre-collapse knowledge',
        'Reconstruction Rituals - Blessing new infrastructure with ancestral wisdom',
        'Memory Keeper Circles - Oral tradition preservation',
        'Gratitude Ceremonies - Acknowledging what remains',
        'Seven Generations Council - Decision-making for long-term survival'
    ]
}

/**
 * INTERGALACTIC CONFEDERATION UNIVERSE
 *
 * Nairo's universe - Translating ceremony across species
 *
 * Setting:
 * - Multi-species galactic civilization (40+ sentient species)
 * - Advanced technology enables interstellar travel and communication
 * - Cultural exchange is complex due to radically different biologies and worldviews
 * - Ceremony serves as universal language for building trust
 * - Indigenous Earth wisdom recognized as valuable contribution to galactic culture
 *
 * Themes:
 * - Cultural translation and adaptation
 * - Universal patterns in diverse expressions
 * - Technology in service of connection (not replacement)
 * - Healing historical extraction across species
 * - Ceremony as bridge across difference
 */
export const INTERGALACTIC_CONFEDERATION: UniverseContext = {
    universe_id: generateUniverseUUID('intergalactic-confederation'),
    name: 'Intergalactic Confederation',
    theme: 'Translating ceremony across species and worldviews',
    era: '2847 CE (Confederation Era Year 412)',
    primaryConflict: 'Honoring Indigenous Earth wisdom while adapting for non-human species without appropriation or dilution',
    ceremonialPractices: [
        'First Contact Ceremonies - Establishing respectful relationship with new species',
        'Universal Circle Protocols - Adapted talking circles for multi-species gatherings',
        'Biosphere Blessing - Acknowledging each species\' homeworld and sacred relationship',
        'Translation Rituals - Finding ceremonial equivalents across cultures',
        'Interspecies Mentorship - Cross-cultural wisdom transmission',
        'Galactic Seven Generations - Expanded to honor 40+ species\' timeframes'
    ]
}

/**
 * CONTEMPORARY URBAN UNIVERSE
 *
 * Mia's universe - Reclaiming identity through technology
 *
 * Setting:
 * - Present day (2024-2026)
 * - Urban centers, digital-first culture
 * - Disconnection from land, community, and tradition
 * - Technology dominant but often extractive
 * - Growing hunger for authentic connection and meaning
 * - Indigenous resurgence and cultural reclamation movements
 *
 * Themes:
 * - Identity crisis and belonging
 * - Technology as tool for reclamation (not extraction)
 * - Urban spaces as potential ceremonial grounds
 * - Intergenerational healing
 * - Bridging traditional wisdom with contemporary challenges
 */
export const CONTEMPORARY_URBAN: UniverseContext = {
    universe_id: generateUniverseUUID('contemporary-urban'),
    name: 'Contemporary Urban',
    theme: 'Reclaiming identity and connection through technology that serves ceremony',
    era: '2024-2026 CE',
    primaryConflict: 'Navigating authentic cultural reclamation vs. appropriation in digital spaces disconnected from land and elders',
    ceremonialPractices: [
        'Digital Talking Circles - Online ceremonial gatherings with intentionality',
        'Urban Land Acknowledgment - Honoring Indigenous lands even in concrete cities',
        'Technology Blessing - Dedicating digital tools to relational accountability',
        'Intergenerational Healing Circles - Bridging elders and youth',
        'Ceremony as Resistance - Reclaiming sacred pause in extractive culture',
        'Two-Eyed Seeing Practices - Integrating Indigenous and Western knowledge'
    ]
}

/**
 * Universe registry
 * All defined universes mapped by ID
 */
export const UNIVERSES: Record<string, UniverseContext> = {
    [POST_APOCALYPTIC_EARTH.universe_id]: POST_APOCALYPTIC_EARTH,
    [INTERGALACTIC_CONFEDERATION.universe_id]: INTERGALACTIC_CONFEDERATION,
    [CONTEMPORARY_URBAN.universe_id]: CONTEMPORARY_URBAN
}

/**
 * Universe lookup by name
 */
export const UNIVERSES_BY_NAME: Record<string, UniverseContext> = {
    'post-apocalyptic-earth': POST_APOCALYPTIC_EARTH,
    'intergalactic-confederation': INTERGALACTIC_CONFEDERATION,
    'contemporary-urban': CONTEMPORARY_URBAN
}

/**
 * Get universe by ID
 *
 * @param universeId - UUID of universe
 * @returns UniverseContext or undefined
 */
export function getUniverseById(universeId: string): UniverseContext | undefined {
    return UNIVERSES[universeId]
}

/**
 * Get universe by name
 *
 * @param universeName - Name slug (e.g., "post-apocalyptic-earth")
 * @returns UniverseContext or undefined
 */
export function getUniverseByName(universeName: string): UniverseContext | undefined {
    return UNIVERSES_BY_NAME[universeName]
}

/**
 * List all universes
 *
 * @returns Array of all defined universe contexts
 */
export function listAllUniverses(): UniverseContext[] {
    return Object.values(UNIVERSES)
}

/**
 * Cross-universe correspondence patterns
 *
 * Defines how character archetypes manifest differently across universes
 */
export const CROSS_UNIVERSE_PATTERNS = {
    /**
     * "Catalyst of Change" archetype manifestations
     */
    CATALYST_OF_CHANGE: {
        'post-apocalyptic-earth': {
            manifestation: 'Archive Excavator & Community Rebuilder',
            primaryAction: 'Recovering and recontextualizing ancestral knowledge for survival',
            woundExpression: 'Questioning permission to exist in world that collapsed from previous generation failures',
            soulPowerActivation: 'Invitation to reconstruct sacred containers from fragments'
        },
        'intergalactic-confederation': {
            manifestation: 'Cultural Translator & Ceremonial Diplomat',
            primaryAction: 'Adapting Earth wisdom for multi-species understanding',
            woundExpression: 'Struggling with belonging across radically different cultures',
            soulPowerActivation: 'Invitation to bridge ceremony across species divides'
        },
        'contemporary-urban': {
            manifestation: 'Identity Reclaimer & Technology Ceremonialist',
            primaryAction: 'Reclaiming authentic connection in digital disconnection',
            woundExpression: 'Identity crisis - torn between heritage and contemporary life',
            soulPowerActivation: 'Invitation to make technology serve ceremony'
        }
    },

    /**
     * Shared ceremonial elements across all universes
     */
    UNIVERSAL_CEREMONIAL_ELEMENTS: [
        'Four Directions framework (adapted to context)',
        'Talking circles (or equivalent consensus-building)',
        'Sacred pause before major decisions',
        'Seven generations thinking (timeframe adapted)',
        'Mentorship lineage honoring',
        'Relational accountability'
    ],

    /**
     * Technology-ceremony relationship by universe
     */
    TECHNOLOGY_CEREMONY_RELATIONSHIP: {
        'post-apocalyptic-earth': 'Technology scarce - Ceremony fills the void for meaning-making and community cohesion',
        'intergalactic-confederation': 'Technology abundant - Ceremony prevents it from becoming extractive or alienating',
        'contemporary-urban': 'Technology pervasive - Ceremony reclaims it for authentic connection'
    }
}

/**
 * Validate universe compatibility for character instance
 *
 * Checks if a character's inheritable properties are compatible
 * with the target universe's context.
 *
 * @param characterArchetype - Parent class archetype (e.g., "Catalyst of Change")
 * @param targetUniverse - Universe to instantiate in
 * @returns Compatibility assessment
 */
export function validateUniverseCompatibility(
    characterArchetype: string,
    targetUniverse: UniverseContext
): {
    compatible: boolean
    manifestation?: string
    recommendations: string[]
} {
    // Check if archetype has defined patterns for this universe
    const archetypeKey = characterArchetype.toUpperCase().replace(/ /g, '_')
    const patterns = CROSS_UNIVERSE_PATTERNS[archetypeKey as keyof typeof CROSS_UNIVERSE_PATTERNS]

    if (!patterns) {
        return {
            compatible: false,
            recommendations: [
                `Archetype "${characterArchetype}" not yet defined for multi-universe instantiation`,
                'Define cross-universe patterns before creating character instances'
            ]
        }
    }

    const universeName = Object.keys(UNIVERSES_BY_NAME).find((name) => UNIVERSES_BY_NAME[name].universe_id === targetUniverse.universe_id)

    if (!universeName) {
        return {
            compatible: false,
            recommendations: ['Target universe not found in registry']
        }
    }

    const manifestationData = (patterns as any)[universeName]

    if (!manifestationData) {
        return {
            compatible: false,
            recommendations: [`Archetype "${characterArchetype}" not defined for ${targetUniverse.name} universe`, 'Define manifestation pattern']
        }
    }

    return {
        compatible: true,
        manifestation: manifestationData.manifestation,
        recommendations: [
            `Primary Action: ${manifestationData.primaryAction}`,
            `Wound Expression: ${manifestationData.woundExpression}`,
            `Soul Power Activation: ${manifestationData.soulPowerActivation}`
        ]
    }
}

/**
 * Export universe UUIDs for convenience
 */
export const UNIVERSE_IDS = {
    POST_APOCALYPTIC_EARTH: POST_APOCALYPTIC_EARTH.universe_id,
    INTERGALACTIC_CONFEDERATION: INTERGALACTIC_CONFEDERATION.universe_id,
    CONTEMPORARY_URBAN: CONTEMPORARY_URBAN.universe_id
}
