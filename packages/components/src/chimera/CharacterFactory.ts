/**
 * CHIMERA Character Factory
 *
 * Factory for creating character instances with proper inheritance,
 * mentorship lineage, and universe context.
 *
 * Creates the three primary character instances:
 * - Jordan (Post-Apocalyptic Earth)
 * - Nairo (Intergalactic Confederation)
 * - Mia (Contemporary Urban)
 *
 * All three inherit from "Catalyst of Change" parent class and share
 * mentorship lineage to ancestral wisdom (Jimmy K → Bob → Bill W).
 *
 * @see /sacred-container.json for character database configuration
 * @see /docs/SEASON_4_CHIMERA_INTEGRATION.md for character architecture
 *
 * @attribution
 * - Designer: William (character narratives and mentorship lineage)
 * - Implementation: Jerry (TypeScript factory pattern)
 * - Mentorship Roots: Jimmy K, Bob, Bill W (ancestral wisdom sources)
 * - License: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)
 */

import { CharacterInstance, MentorshipLink, InheritableProperties } from './CharacterInstance'
import { POST_APOCALYPTIC_EARTH, INTERGALACTIC_CONFEDERATION, CONTEMPORARY_URBAN, UniverseContext } from './UniverseDefinitions'
import { WoundType, Direction } from '../../../server/src/utils/ceremonialUUID'

/**
 * ANCESTRAL MENTORSHIP LINEAGE
 *
 * All CHIMERA characters trace back to these wisdom sources:
 *
 * Generation 0 (Root):
 * - Jimmy K (James Kinnon) - Co-founder of AA, established principles of
 *   mutual aid, sponsorship, and spiritual recovery
 *
 * Generation 1:
 * - Bob (Dr. Bob Smith) - Medical professional who brought clinical
 *   understanding to spiritual recovery
 *
 * Generation 2:
 * - Bill W (Bill Wilson) - Systematized the principles into 12 steps,
 *   emphasized narrative storytelling in healing
 *
 * Generation 3 (Contemporary):
 * - William - Ceremonial technology architect, connects ancestral wisdom
 *   to Indigenous principles and multi-agent systems
 * - Jerry - Implementation specialist, brings technical excellence in
 *   service of ceremony
 *
 * Generation 4 (Character Instances):
 * - Jordan, Nairo, Mia - AI character instances embodying these principles
 *   in their respective universes
 */

/**
 * Root mentorship lineage (shared by all CHIMERA characters)
 */
const ROOT_MENTORSHIP_LINEAGE: MentorshipLink[] = [
    {
        mentorName: 'Jimmy K',
        relationship: 'ancestral wisdom - mutual aid foundation',
        teachings: [
            'Recovery requires community, not isolation',
            'Sharing experience creates healing for both speaker and listener',
            'Spiritual principles transcend specific belief systems',
            'Service to others is path to personal transformation'
        ],
        generation: 0
    },
    {
        mentorName: 'Bob',
        relationship: 'ancestral wisdom - clinical integration',
        teachings: [
            'Spiritual recovery needs medical understanding',
            'Surrender is not weakness but wisdom',
            'Character defects often protect wounded parts',
            'Rigorous honesty with self enables growth'
        ],
        generation: 1
    },
    {
        mentorName: 'Bill W',
        relationship: 'ancestral wisdom - systematic framework',
        teachings: [
            'Story is the vehicle for transformation',
            'Principles work universally when properly understood',
            'Ego reduction opens door to connection',
            'Anonymity protects principles over personalities'
        ],
        generation: 2
    },
    {
        mentorName: 'William',
        relationship: 'contemporary wisdom - ceremonial technology',
        teachings: [
            'Technology can serve ceremony when designed with integrity',
            'Indigenous principles offer framework for relational AI',
            'Seven Generations thinking prevents extractive innovation',
            'Story and code can validate each other through NCP'
        ],
        generation: 3
    },
    {
        mentorName: 'Jerry',
        relationship: 'contemporary wisdom - technical excellence in service',
        teachings: [
            'Implementation quality honors the vision',
            'Multi-agent coordination mirrors community accountability',
            'Prompt engineering as ceremonial practice',
            'Technical debt is relational debt to future developers'
        ],
        generation: 3
    }
]

/**
 * "Catalyst of Change" parent class inheritable properties
 *
 * Defines the archetype from which Jordan, Nairo, and Mia inherit.
 * Each character instance overrides specific properties while maintaining
 * core patterns.
 */
const CATALYST_OF_CHANGE_ARCHETYPE: Partial<InheritableProperties> = {
    core_values: ['Relational accountability', 'Ancestral wisdom honoring', 'Seven generations responsibility', 'Sacred pause before action'],
    behavioral_patterns: [
        'Questions assumptions',
        'Seeks consensus with diverse voices',
        'Honors what came before while building what is needed',
        'Transforms wounds into wisdom',
        'Invites rather than imposes'
    ],
    growth_arc_template: 'Wound recognized → Invitation received → Soul power activated → Community transformed → Lineage extended',
    voice_characteristics: ['Reflective', 'Grounded in experience', 'Questions more than asserts', 'Honors complexity']
}

/**
 * Character Factory Class
 */
export class CharacterFactory {
    /**
     * Create Jordan character instance
     * Universe: Post-Apocalyptic Earth
     * Primary wound: Autonomy
     */
    static createJordan(): CharacterInstance {
        const inheritableProperties: InheritableProperties = {
            wound_type: WoundType.AUTONOMY,
            soul_power: 'Reconstructing Sacred Containers from Fragments',
            core_values: [...(CATALYST_OF_CHANGE_ARCHETYPE.core_values || []), 'Knowledge archaeology', 'Reconstruction with reverence'],
            behavioral_patterns: [
                ...(CATALYST_OF_CHANGE_ARCHETYPE.behavioral_patterns || []),
                'Excavates pre-collapse archives',
                'Questions permission to exist',
                'Validates through ancestral connection',
                'Builds slowly with ceremonial intention'
            ],
            ceremonial_affinities: [Direction.WEST, Direction.NORTH, Direction.CENTER],
            growth_arc_template:
                'Questions right to rebuild → Discovers ancestral archive → Receives invitation from elders → Activates reconstruction power → Establishes ceremonial archive practice',
            voice_characteristics: [
                'Archaeology metaphors (excavation, fragments, layers)',
                'Questions of permission and authority',
                'Reverence for what was lost',
                'Hope tempered by responsibility'
            ]
        }

        const jordan = new CharacterInstance({
            name: 'Jordan',
            parent_class: 'Catalyst of Change',
            universe_id: POST_APOCALYPTIC_EARTH.universe_id,
            universe_context: POST_APOCALYPTIC_EARTH,
            inheritable_properties: inheritableProperties,
            mentorship_lineage: ROOT_MENTORSHIP_LINEAGE
        })

        return jordan
    }

    /**
     * Create Nairo character instance
     * Universe: Intergalactic Confederation
     * Primary wound: Belonging
     */
    static createNairo(): CharacterInstance {
        const inheritableProperties: InheritableProperties = {
            wound_type: WoundType.BELONGING,
            soul_power: 'Translating Ceremony Across Species and Cultures',
            core_values: [
                ...(CATALYST_OF_CHANGE_ARCHETYPE.core_values || []),
                'Cultural translation without appropriation',
                'Unity through diversity'
            ],
            behavioral_patterns: [
                ...(CATALYST_OF_CHANGE_ARCHETYPE.behavioral_patterns || []),
                'Seeks universal patterns in diverse expressions',
                'Struggles with belonging across cultures',
                'Adapts ceremony while preserving essence',
                'Builds bridges between radically different worldviews'
            ],
            ceremonial_affinities: [Direction.SOUTH, Direction.EAST, Direction.CENTER],
            growth_arc_template:
                'Feels alien everywhere → Discovers ceremonial universals → Receives invitation from multi-species elders → Activates translation power → Establishes interspecies ceremonial protocols',
            voice_characteristics: [
                'Translation and adaptation metaphors',
                'Questions of belonging and acceptance',
                'Wonder at diversity',
                'Commitment to finding common ground'
            ]
        }

        const nairo = new CharacterInstance({
            name: 'Nairo',
            parent_class: 'Catalyst of Change',
            universe_id: INTERGALACTIC_CONFEDERATION.universe_id,
            universe_context: INTERGALACTIC_CONFEDERATION,
            inheritable_properties: inheritableProperties,
            mentorship_lineage: ROOT_MENTORSHIP_LINEAGE
        })

        return nairo
    }

    /**
     * Create Mia character instance
     * Universe: Contemporary Urban
     * Primary wound: Identity
     */
    static createMia(): CharacterInstance {
        const inheritableProperties: InheritableProperties = {
            wound_type: WoundType.IDENTITY,
            soul_power: 'Reclaiming Authentic Connection Through Technology',
            core_values: [
                ...(CATALYST_OF_CHANGE_ARCHETYPE.core_values || []),
                'Technology in service of ceremony',
                'Urban spaces as sacred grounds'
            ],
            behavioral_patterns: [
                ...(CATALYST_OF_CHANGE_ARCHETYPE.behavioral_patterns || []),
                'Navigates identity crisis',
                'Questions what is authentic vs. appropriated',
                'Reclaims disconnected technology for connection',
                'Bridges traditional wisdom with contemporary challenges'
            ],
            ceremonial_affinities: [Direction.EAST, Direction.SOUTH, Direction.WEST],
            growth_arc_template:
                'Lost in identity crisis → Discovers ceremony as technology → Receives invitation from elders → Activates reclamation power → Establishes urban ceremonial tech practices',
            voice_characteristics: [
                'Technology and disconnection metaphors',
                'Questions of authentic identity',
                'Tension between heritage and contemporary life',
                'Determination to bridge worlds'
            ]
        }

        const mia = new CharacterInstance({
            name: 'Mia',
            parent_class: 'Catalyst of Change',
            universe_id: CONTEMPORARY_URBAN.universe_id,
            universe_context: CONTEMPORARY_URBAN,
            inheritable_properties: inheritableProperties,
            mentorship_lineage: ROOT_MENTORSHIP_LINEAGE
        })

        return mia
    }

    /**
     * Create all three primary characters
     *
     * @returns Object with Jordan, Nairo, and Mia instances
     */
    static createAllCharacters(): {
        jordan: CharacterInstance
        nairo: CharacterInstance
        mia: CharacterInstance
    } {
        return {
            jordan: CharacterFactory.createJordan(),
            nairo: CharacterFactory.createNairo(),
            mia: CharacterFactory.createMia()
        }
    }

    /**
     * Detect cross-universe mirrors
     *
     * Runs mirror detection across all three primary characters,
     * revealing their shared patterns across universes.
     *
     * @returns Mirror mappings for each character
     */
    static detectCrossUniverseMirrors(): {
        jordan: ReturnType<CharacterInstance['findMirrors']>
        nairo: ReturnType<CharacterInstance['findMirrors']>
        mia: ReturnType<CharacterInstance['findMirrors']>
    } {
        const { jordan, nairo, mia } = CharacterFactory.createAllCharacters()

        return {
            jordan: jordan.findMirrors([nairo, mia]),
            nairo: nairo.findMirrors([jordan, mia]),
            mia: mia.findMirrors([jordan, nairo])
        }
    }

    /**
     * Validate all characters
     *
     * Runs coherence validation on all three primary characters
     *
     * @returns Validation results for each character
     */
    static validateAllCharacters(): {
        jordan: ReturnType<CharacterInstance['validateCoherence']>
        nairo: ReturnType<CharacterInstance['validateCoherence']>
        mia: ReturnType<CharacterInstance['validateCoherence']>
    } {
        const { jordan, nairo, mia } = CharacterFactory.createAllCharacters()

        return {
            jordan: jordan.validateCoherence(),
            nairo: nairo.validateCoherence(),
            mia: mia.validateCoherence()
        }
    }

    /**
     * Get character by name
     *
     * @param name - Character name ("Jordan", "Nairo", or "Mia")
     * @returns CharacterInstance or undefined
     */
    static getCharacterByName(name: string): CharacterInstance | undefined {
        const normalized = name.toLowerCase()

        switch (normalized) {
            case 'jordan':
                return CharacterFactory.createJordan()
            case 'nairo':
                return CharacterFactory.createNairo()
            case 'mia':
                return CharacterFactory.createMia()
            default:
                return undefined
        }
    }

    /**
     * Create character from archetype in specific universe
     *
     * Generic factory method for creating character instances from archetypes
     *
     * @param archetype - Parent class archetype name
     * @param name - Character name
     * @param universe - Target universe
     * @param overrides - Property overrides specific to this instance
     * @returns CharacterInstance
     */
    static createFromArchetype(
        archetype: string,
        name: string,
        universe: UniverseContext,
        overrides: Partial<InheritableProperties>
    ): CharacterInstance {
        // Start with archetype base properties
        const baseProperties: InheritableProperties = {
            wound_type: overrides.wound_type || WoundType.AUTONOMY,
            soul_power: overrides.soul_power || 'Transformative power to be defined',
            core_values: overrides.core_values || CATALYST_OF_CHANGE_ARCHETYPE.core_values || [],
            behavioral_patterns: overrides.behavioral_patterns || CATALYST_OF_CHANGE_ARCHETYPE.behavioral_patterns || [],
            ceremonial_affinities: overrides.ceremonial_affinities || [Direction.CENTER],
            growth_arc_template: overrides.growth_arc_template || CATALYST_OF_CHANGE_ARCHETYPE.growth_arc_template || '',
            voice_characteristics: overrides.voice_characteristics || CATALYST_OF_CHANGE_ARCHETYPE.voice_characteristics || []
        }

        return new CharacterInstance({
            name,
            parent_class: archetype,
            universe_id: universe.universe_id,
            universe_context: universe,
            inheritable_properties: baseProperties,
            mentorship_lineage: ROOT_MENTORSHIP_LINEAGE
        })
    }
}

/**
 * Export convenience functions
 */
export const createJordan = CharacterFactory.createJordan
export const createNairo = CharacterFactory.createNairo
export const createMia = CharacterFactory.createMia
export const createAllCharacters = CharacterFactory.createAllCharacters
export const detectCrossUniverseMirrors = CharacterFactory.detectCrossUniverseMirrors
export const validateAllCharacters = CharacterFactory.validateAllCharacters
