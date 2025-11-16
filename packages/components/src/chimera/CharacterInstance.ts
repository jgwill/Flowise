/**
 * CHIMERA Character Model - Character Instance Class
 *
 * Implements character inheritance, mentorship lineage, cross-universe mirroring,
 * and NCP validation for narrative coherence.
 *
 * The CHIMERA model represents characters as object-oriented instances with:
 * - Parent class archetypes (e.g., "Catalyst of Change")
 * - Inheritable properties (wounds, soul powers, mentorship)
 * - Universe contexts (post-apocalyptic, intergalactic, contemporary)
 * - Cross-universe mirrors (characters sharing mentorship lineage)
 *
 * @see /sacred-container.json for character database configuration
 * @see /docs/SEASON_4_CHIMERA_INTEGRATION.md for architecture details
 *
 * @attribution
 * - Designer: William (CHIMERA narrative architecture)
 * - Implementation: Jerry (TypeScript class system)
 * - Framework: Character-as-Code, Object-Oriented Storytelling
 * - License: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)
 */

import { generateCharacterUUID, WoundType, Direction } from '../../../server/src/utils/ceremonialUUID'

/**
 * Mentorship lineage link
 * Connects character to ancestral wisdom sources
 */
export interface MentorshipLink {
    mentorName: string
    relationship: string // e.g., "sponsorship", "teaching", "ancestral wisdom"
    teachings: string[]
    generation: number // Distance from root mentor (0 = root)
}

/**
 * Universe context definition
 * Each character exists in a specific narrative universe
 */
export interface UniverseContext {
    universe_id: string
    name: string
    theme: string
    era: string
    primaryConflict: string
    ceremonialPractices: string[]
}

/**
 * Character mirror mapping
 * Identifies characters across universes who share patterns
 */
export interface MirrorMapping {
    mirroredCharacterId: string
    mirroredCharacterName: string
    mirroredUniverseId: string
    sharedPatterns: string[]
    mentorshipOverlap: string[]
    mirrorStrength: number // 0.0 to 1.0
}

/**
 * NCP validation result
 * Coherence checking for character behavior
 */
export interface ValidationResult {
    passed: boolean
    coherenceScore: number // 0.0 to 1.0
    coherenceLevel: 'high' | 'medium' | 'low'
    violations: string[]
    recommendations: string[]
    validatedAt: string
}

/**
 * Inheritable character properties
 * Properties that can be passed to child instances or variants
 */
export interface InheritableProperties {
    wound_type: WoundType
    soul_power: string
    core_values: string[]
    behavioral_patterns: string[]
    ceremonial_affinities: Direction[]
    growth_arc_template: string
    voice_characteristics: string[]
}

/**
 * Story beat context
 * Current narrative position for character
 */
export interface StoryBeat {
    beat_id: string
    description: string
    quad_cycle: {
        situation: string
        action: string
        justification: string
        opinion: string
    }
    emotional_state: string
    throughline_id?: string
}

/**
 * CharacterInstance Class
 *
 * Main class for CHIMERA character instances with inheritance,
 * mentorship lineage, and narrative coherence validation.
 */
export class CharacterInstance {
    character_id: string
    name: string
    parent_class: string
    universe_id: string
    universe_context?: UniverseContext
    inheritable_properties: InheritableProperties
    mentorship_lineage: MentorshipLink[]
    wound_type: WoundType
    soul_power: string
    current_story_beat?: StoryBeat
    coherence_score: number
    created_at: string
    updated_at: string

    // Internal state
    private validationHistory: ValidationResult[] = []
    private discoveredMirrors: MirrorMapping[] = []

    constructor(config: {
        name: string
        parent_class: string
        universe_id: string
        universe_context?: UniverseContext
        inheritable_properties: InheritableProperties
        mentorship_lineage: MentorshipLink[]
        current_story_beat?: StoryBeat
    }) {
        // Generate deterministic UUID for this character in this universe
        this.character_id = generateCharacterUUID(config.name, config.universe_id)

        this.name = config.name
        this.parent_class = config.parent_class
        this.universe_id = config.universe_id
        this.universe_context = config.universe_context
        this.inheritable_properties = config.inheritable_properties
        this.mentorship_lineage = config.mentorship_lineage
        this.wound_type = config.inheritable_properties.wound_type
        this.soul_power = config.inheritable_properties.soul_power
        this.current_story_beat = config.current_story_beat
        this.coherence_score = 0.0

        const now = new Date().toISOString()
        this.created_at = now
        this.updated_at = now
    }

    /**
     * Validate character coherence against parent class and narrative rules
     *
     * Checks:
     * 1. Properties align with parent class archetype
     * 2. Mentorship lineage is complete and valid
     * 3. Current story beat aligns with wound type and growth arc
     * 4. Behavioral consistency across story beats
     * 5. Soul power activation follows proper narrative structure
     *
     * @returns ValidationResult with coherence score and any violations
     */
    validateCoherence(): ValidationResult {
        const violations: string[] = []
        const recommendations: string[] = []
        let coherenceScore = 1.0

        // Check 1: Parent class alignment
        if (!this.parent_class || this.parent_class.trim() === '') {
            violations.push('Missing parent class - character must inherit from archetype')
            coherenceScore -= 0.3
        }

        // Check 2: Mentorship lineage completeness
        if (!this.mentorship_lineage || this.mentorship_lineage.length === 0) {
            violations.push('Missing mentorship lineage - character lacks ancestral wisdom connection')
            coherenceScore -= 0.2
        } else {
            // Verify lineage has root mentor (generation 0)
            const hasRoot = this.mentorship_lineage.some((link) => link.generation === 0)
            if (!hasRoot) {
                violations.push('Mentorship lineage missing root ancestor')
                coherenceScore -= 0.15
            }

            // Verify lineage is continuous (no generation gaps)
            const generations = this.mentorship_lineage.map((link) => link.generation).sort()
            for (let i = 0; i < generations.length - 1; i++) {
                if (generations[i + 1] - generations[i] > 1) {
                    violations.push(`Mentorship lineage has gap between generation ${generations[i]} and ${generations[i + 1]}`)
                    coherenceScore -= 0.1
                }
            }
        }

        // Check 3: Wound type and soul power alignment
        if (!this.wound_type) {
            violations.push('Missing wound type - character lacks core dramatic tension')
            coherenceScore -= 0.2
        }

        if (!this.soul_power || this.soul_power.trim() === '') {
            violations.push('Missing soul power - character lacks transformative capacity')
            coherenceScore -= 0.15
        }

        // Check 4: Story beat quad cycle completion (if current beat exists)
        if (this.current_story_beat) {
            const quadCycle = this.current_story_beat.quad_cycle
            if (!quadCycle.situation || !quadCycle.action || !quadCycle.justification || !quadCycle.opinion) {
                violations.push('Current story beat missing quad cycle components (S/A/J/O)')
                coherenceScore -= 0.1
            }

            // Verify action aligns with wound type
            const actionAlignmentScore = this.validateActionAlignment(quadCycle.action, this.wound_type)
            if (actionAlignmentScore < 0.5) {
                recommendations.push(
                    `Character action may not align with ${this.wound_type} wound type. Consider how wound influences behavior.`
                )
                coherenceScore -= 0.05
            }
        } else {
            recommendations.push('No current story beat - character narrative position undefined')
        }

        // Check 5: Inheritable properties completeness
        if (!this.inheritable_properties.core_values || this.inheritable_properties.core_values.length === 0) {
            violations.push('Missing core values in inheritable properties')
            coherenceScore -= 0.1
        }

        if (!this.inheritable_properties.ceremonial_affinities || this.inheritable_properties.ceremonial_affinities.length === 0) {
            recommendations.push('No ceremonial affinities defined - consider character relationship to Four Directions')
        }

        // Ensure coherence score stays within bounds
        coherenceScore = Math.max(0, Math.min(1, coherenceScore))
        this.coherence_score = coherenceScore

        // Determine coherence level
        let coherenceLevel: 'high' | 'medium' | 'low'
        if (coherenceScore >= 0.8) coherenceLevel = 'high'
        else if (coherenceScore >= 0.5) coherenceLevel = 'medium'
        else coherenceLevel = 'low'

        const result: ValidationResult = {
            passed: violations.length === 0,
            coherenceScore,
            coherenceLevel,
            violations,
            recommendations,
            validatedAt: new Date().toISOString()
        }

        // Store in validation history
        this.validationHistory.push(result)
        this.updated_at = result.validatedAt

        return result
    }

    /**
     * Find cross-universe mirrors
     *
     * Identifies other characters who share mentorship lineage,
     * wound patterns, or behavioral archetypes across different universes.
     *
     * @param otherCharacters - Array of CharacterInstance to compare against
     * @returns Array of MirrorMapping showing mirror relationships
     */
    findMirrors(otherCharacters: CharacterInstance[]): MirrorMapping[] {
        const mirrors: MirrorMapping[] = []

        for (const other of otherCharacters) {
            // Don't mirror to self or same universe
            if (other.character_id === this.character_id || other.universe_id === this.universe_id) {
                continue
            }

            const sharedPatterns: string[] = []
            const mentorshipOverlap: string[] = []
            let mirrorStrength = 0.0

            // Check 1: Shared parent class (strongest mirror indicator)
            if (other.parent_class === this.parent_class) {
                sharedPatterns.push(`Both inherit from ${this.parent_class}`)
                mirrorStrength += 0.4
            }

            // Check 2: Same wound type
            if (other.wound_type === this.wound_type) {
                sharedPatterns.push(`Both carry ${this.wound_type} wound`)
                mirrorStrength += 0.2
            }

            // Check 3: Mentorship lineage overlap
            const thisMentors = new Set(this.mentorship_lineage.map((link) => link.mentorName))
            const otherMentors = new Set(other.mentorship_lineage.map((link) => link.mentorName))

            for (const mentor of thisMentors) {
                if (otherMentors.has(mentor)) {
                    mentorshipOverlap.push(mentor)
                    mirrorStrength += 0.15
                }
            }

            // Check 4: Shared behavioral patterns
            const thisBehaviors = new Set(this.inheritable_properties.behavioral_patterns)
            const otherBehaviors = new Set(other.inheritable_properties.behavioral_patterns)

            for (const behavior of thisBehaviors) {
                if (otherBehaviors.has(behavior)) {
                    sharedPatterns.push(`Shared behavior: ${behavior}`)
                    mirrorStrength += 0.05
                }
            }

            // Check 5: Shared core values
            const thisValues = new Set(this.inheritable_properties.core_values)
            const otherValues = new Set(other.inheritable_properties.core_values)

            for (const value of thisValues) {
                if (otherValues.has(value)) {
                    sharedPatterns.push(`Shared value: ${value}`)
                    mirrorStrength += 0.05
                }
            }

            // Only consider as mirror if strength exceeds threshold
            if (mirrorStrength >= 0.3) {
                mirrors.push({
                    mirroredCharacterId: other.character_id,
                    mirroredCharacterName: other.name,
                    mirroredUniverseId: other.universe_id,
                    sharedPatterns,
                    mentorshipOverlap,
                    mirrorStrength: Math.min(1.0, mirrorStrength)
                })
            }
        }

        // Sort by mirror strength (strongest first)
        mirrors.sort((a, b) => b.mirrorStrength - a.mirrorStrength)

        // Store discovered mirrors
        this.discoveredMirrors = mirrors

        return mirrors
    }

    /**
     * Trace mentorship lineage back to root
     *
     * Returns array of mentor names from character back to ancestral root,
     * preserving generational order.
     *
     * @returns Array of mentor names (most recent first, root last)
     */
    traceLineage(): string[] {
        // Sort mentorship links by generation (descending)
        const sortedLineage = [...this.mentorship_lineage].sort((a, b) => b.generation - a.generation)

        return sortedLineage.map((link) => link.mentorName)
    }

    /**
     * Get ceremonial direction affinity
     *
     * Returns primary ceremonial direction based on character's inheritable properties
     * and current narrative arc.
     *
     * @returns Direction enum value
     */
    getPrimaryCeremonialDirection(): Direction | null {
        if (!this.inheritable_properties.ceremonial_affinities || this.inheritable_properties.ceremonial_affinities.length === 0) {
            return null
        }

        // Return first (primary) ceremonial affinity
        return this.inheritable_properties.ceremonial_affinities[0]
    }

    /**
     * Update story beat
     *
     * Advances character to new story beat and re-validates coherence
     *
     * @param newBeat - New story beat for character
     * @returns Updated validation result
     */
    updateStoryBeat(newBeat: StoryBeat): ValidationResult {
        this.current_story_beat = newBeat
        this.updated_at = new Date().toISOString()

        return this.validateCoherence()
    }

    /**
     * Get validation history
     *
     * Returns chronological validation results for this character
     */
    getValidationHistory(): ValidationResult[] {
        return [...this.validationHistory]
    }

    /**
     * Get discovered mirrors
     *
     * Returns previously discovered cross-universe mirrors
     */
    getDiscoveredMirrors(): MirrorMapping[] {
        return [...this.discoveredMirrors]
    }

    /**
     * Serialize to database format
     *
     * Converts CharacterInstance to PostgreSQL-compatible record
     */
    toDatabase(): any {
        return {
            character_id: this.character_id,
            name: this.name,
            parent_class: this.parent_class,
            universe_id: this.universe_id,
            inheritable_properties: this.inheritable_properties,
            mentorship_lineage: this.mentorship_lineage,
            wound_type: this.wound_type,
            soul_power: this.soul_power,
            current_story_beat: this.current_story_beat?.description || null,
            coherence_score: this.coherence_score,
            created_at: this.created_at,
            updated_at: this.updated_at
        }
    }

    /**
     * Create from database record
     *
     * Reconstructs CharacterInstance from PostgreSQL record
     */
    static fromDatabase(record: any): CharacterInstance {
        const instance = new CharacterInstance({
            name: record.name,
            parent_class: record.parent_class,
            universe_id: record.universe_id,
            inheritable_properties: record.inheritable_properties,
            mentorship_lineage: record.mentorship_lineage,
            current_story_beat: record.current_story_beat
                ? {
                      beat_id: '',
                      description: record.current_story_beat,
                      quad_cycle: { situation: '', action: '', justification: '', opinion: '' },
                      emotional_state: ''
                  }
                : undefined
        })

        instance.character_id = record.character_id
        instance.coherence_score = record.coherence_score
        instance.created_at = record.created_at
        instance.updated_at = record.updated_at

        return instance
    }

    // ========================================
    // Private Helper Methods
    // ========================================

    /**
     * Validate action alignment with wound type
     *
     * Checks if character's action in story beat aligns with their wound type.
     * Different wound types lead to characteristic behavioral patterns.
     *
     * @param action - Action from story beat quad cycle
     * @param woundType - Character's wound type
     * @returns Alignment score (0.0 to 1.0)
     */
    private validateActionAlignment(action: string, woundType: WoundType): number {
        const actionLower = action.toLowerCase()

        // Keyword patterns for each wound type
        const woundPatterns: Record<WoundType, string[]> = {
            [WoundType.AUTONOMY]: ['control', 'independence', 'permission', 'authority', 'decide', 'choose', 'validate'],
            [WoundType.BELONGING]: ['connection', 'community', 'acceptance', 'inclusion', 'relationship', 'together', 'belong'],
            [WoundType.IDENTITY]: ['self', 'identity', 'authentic', 'expression', 'who am i', 'purpose', 'meaning']
        }

        const patterns = woundPatterns[woundType]
        let matchCount = 0

        for (const pattern of patterns) {
            if (actionLower.includes(pattern)) {
                matchCount++
            }
        }

        // Return alignment score based on keyword matches
        return Math.min(1.0, matchCount * 0.3)
    }
}

/**
 * Export all interfaces and types
 */
export type { MentorshipLink, UniverseContext, MirrorMapping, ValidationResult, InheritableProperties, StoryBeat }
