/**
 * Ceremonial UUID Generation Utilities
 *
 * UUID v5 namespace generation for Season 4 & Chimera trace lineage system.
 * Implements SHA-1 based deterministic UUID generation for immutable record tracking.
 *
 * @attribution
 * - Architects: William, Jerry
 * - Framework: Four Directions Ceremonial Methodology
 * - License: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)
 *
 * @see /sacred-container.json for namespace configuration
 */

import { v5 as uuidv5, v4 as uuidv4 } from 'uuid'
import { createHash } from 'crypto'

/**
 * Sacred Container UUID Namespace
 * Defined in /sacred-container.json
 *
 * This namespace is the root of all trace lineage UUIDs in the platform,
 * ensuring consistent and deterministic ID generation across all components.
 */
export const SACRED_CONTAINER_NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'

/**
 * Four Directions enum for ceremonial state tracking
 */
export enum Direction {
    EAST = 'East',
    SOUTH = 'South',
    WEST = 'West',
    NORTH = 'North',
    CENTER = 'Center'
}

/**
 * Wound types from CHIMERA character model
 */
export enum WoundType {
    AUTONOMY = 'autonomy',
    BELONGING = 'belonging',
    IDENTITY = 'identity'
}

/**
 * Ceremonial phase tracking
 */
export enum CeremonialPhase {
    OPENING = 'opening',
    ACTIVE = 'active',
    CLOSING = 'closing',
    INTEGRATION = 'integration'
}

/**
 * Coherence level for NCP validation
 */
export enum CoherenceLevel {
    HIGH = 'high',
    MEDIUM = 'medium',
    LOW = 'low'
}

/**
 * Generate UUID v5 for trace lineage records
 *
 * @param name - Unique identifier for this trace (e.g., "decision:add-feature-x")
 * @param namespace - Optional custom namespace (defaults to SACRED_CONTAINER_NAMESPACE)
 * @returns Deterministic UUID v5 string
 *
 * @example
 * const traceId = generateTraceUUID('decision:implement-chimera-agents')
 * // => "a3bb189e-8bf9-3888-9912-ace4e6543002"
 */
export function generateTraceUUID(name: string, namespace: string = SACRED_CONTAINER_NAMESPACE): string {
    if (!name || typeof name !== 'string') {
        throw new Error('Name must be a non-empty string for UUID generation')
    }
    return uuidv5(name, namespace)
}

/**
 * Generate UUID for character instance
 *
 * @param characterName - Character name (e.g., "Jordan", "Nairo", "Mia")
 * @param universeId - Universe identifier (e.g., "post-apocalyptic-earth")
 * @returns Deterministic UUID for this character in this universe
 *
 * @example
 * const jordanId = generateCharacterUUID('Jordan', 'post-apocalyptic-earth')
 * // => "6f4a5c2b-8d9e-3f1a-9b2c-4d5e6f7a8b9c"
 */
export function generateCharacterUUID(characterName: string, universeId: string): string {
    const name = `character:${characterName}:${universeId}`
    return generateTraceUUID(name)
}

/**
 * Generate UUID for ceremonial sprint cycle
 *
 * @param cycleName - Sprint cycle name
 * @param startDate - Start date of sprint (YYYY-MM-DD)
 * @returns Deterministic UUID for this ceremonial sprint
 *
 * @example
 * const sprintId = generateSprintUUID('Chimera Team Launch', '2026-01-15')
 * // => "8a1b2c3d-4e5f-3a1b-9c2d-3e4f5a6b7c8d"
 */
export function generateSprintUUID(cycleName: string, startDate: string): string {
    const name = `ceremonial-sprint:${cycleName}:${startDate}`
    return generateTraceUUID(name)
}

/**
 * Generate UUID for story beat (NCP validation)
 *
 * @param beatDescription - Story beat description
 * @param characterId - Character UUID who experiences this beat
 * @param timestamp - ISO timestamp when beat occurs
 * @returns Deterministic UUID for this story beat
 *
 * @example
 * const beatId = generateStoryBeatUUID(
 *   'Jordan discovers archive fragment',
 *   jordanCharacterId,
 *   '2026-01-15T10:30:00Z'
 * )
 */
export function generateStoryBeatUUID(beatDescription: string, characterId: string, timestamp: string): string {
    const name = `story-beat:${beatDescription}:${characterId}:${timestamp}`
    return generateTraceUUID(name)
}

/**
 * Generate UUID for Chimera Team agent instance
 *
 * @param agentName - Agent name (e.g., "Nyro", "Aureon", "JamAI")
 * @param instanceContext - Optional context for multiple instances
 * @returns Deterministic UUID for this agent
 *
 * @example
 * const nyroId = generateAgentUUID('Nyro')
 * // => "1a2b3c4d-5e6f-3a1b-9c2d-3e4f5a6b7c8d"
 */
export function generateAgentUUID(agentName: string, instanceContext?: string): string {
    const name = instanceContext ? `agent:${agentName}:${instanceContext}` : `agent:${agentName}`
    return generateTraceUUID(name)
}

/**
 * Generate immutable hash chain for trace lineage
 *
 * Combines current record with parent trace hash to create tamper-evident chain.
 * Uses SHA-256 for cryptographic strength.
 *
 * @param currentRecord - Current trace record data (will be JSON stringified)
 * @param parentHash - Previous hash in chain (null for genesis record)
 * @returns SHA-256 hash hex string
 *
 * @example
 * const genesisHash = generateImmutableHash({ decision: 'Launch Chimera Team' }, null)
 * const nextHash = generateImmutableHash({ decision: 'Implement NCP' }, genesisHash)
 */
export function generateImmutableHash(currentRecord: any, parentHash: string | null): string {
    const recordString = JSON.stringify(currentRecord, Object.keys(currentRecord).sort())
    const chainInput = parentHash ? `${parentHash}:${recordString}` : recordString

    return createHash('sha256').update(chainInput).digest('hex')
}

/**
 * Validate immutable hash chain
 *
 * Verifies that a trace record's hash was correctly computed from its content and parent.
 *
 * @param record - Trace record with hash and parent_hash fields
 * @param recordData - The data that was hashed (excluding hash and parent_hash)
 * @returns True if hash is valid, false otherwise
 */
export function validateImmutableHash(
    record: { hash: string; parent_hash: string | null },
    recordData: any
): boolean {
    const recomputedHash = generateImmutableHash(recordData, record.parent_hash)
    return recomputedHash === record.hash
}

/**
 * Create trace lineage record structure
 *
 * Generates complete trace lineage record with UUID, hash chain, and metadata.
 *
 * @param artifact - Artifact being traced (e.g., decision, code, story beat)
 * @param parentTraceId - UUID of parent trace (null for root)
 * @param ceremonialOrigin - Four Directions origin context
 * @param metadata - Additional ceremonial metadata
 * @returns Complete trace lineage record ready for database insertion
 */
export interface TraceLineageRecord {
    trace_id: string
    artifact_id: string
    artifact_type: string
    parent_trace_id: string | null
    ceremonial_origin: {
        direction: Direction
        theme: string
        timestamp: string
    }
    decision_breadcrumb: {
        vision: string
        current_reality: string
        creative_tension: string
        resolution_path?: string
    }
    six_rs_validation?: {
        respect: boolean
        relationship: boolean
        representation: boolean
        relevance: boolean
        reciprocity: boolean
        responsibility: boolean
    }
    seven_generations_impact?: {
        ancestors: string
        current_generation: string
        seven_generations_future: string
    }
    hash: string
    immutable: boolean
    timestamp: string
}

export function createTraceLineageRecord(
    artifact: { id: string; type: string; data: any },
    parentTraceId: string | null,
    ceremonialOrigin: {
        direction: Direction
        theme: string
    },
    metadata: {
        decisionBreadcrumb: TraceLineageRecord['decision_breadcrumb']
        sixRsValidation?: TraceLineageRecord['six_rs_validation']
        sevenGenerationsImpact?: TraceLineageRecord['seven_generations_impact']
    },
    parentHash: string | null = null
): TraceLineageRecord {
    const timestamp = new Date().toISOString()
    const traceId = generateTraceUUID(`${artifact.type}:${artifact.id}:${timestamp}`)

    const recordData = {
        artifact_id: artifact.id,
        artifact_type: artifact.type,
        artifact_data: artifact.data,
        parent_trace_id: parentTraceId,
        ceremonial_origin: {
            ...ceremonialOrigin,
            timestamp
        },
        decision_breadcrumb: metadata.decisionBreadcrumb,
        six_rs_validation: metadata.sixRsValidation,
        seven_generations_impact: metadata.sevenGenerationsImpact
    }

    const hash = generateImmutableHash(recordData, parentHash)

    return {
        trace_id: traceId,
        artifact_id: artifact.id,
        artifact_type: artifact.type,
        parent_trace_id: parentTraceId,
        ceremonial_origin: {
            ...ceremonialOrigin,
            timestamp
        },
        decision_breadcrumb: metadata.decisionBreadcrumb,
        six_rs_validation: metadata.sixRsValidation,
        seven_generations_impact: metadata.sevenGenerationsImpact,
        hash,
        immutable: true,
        timestamp
    }
}

/**
 * Direction theme mapper
 * Maps Four Directions to their ceremonial themes
 */
export const DIRECTION_THEMES: Record<Direction, string> = {
    [Direction.EAST]: 'Emergence',
    [Direction.SOUTH]: 'Connection',
    [Direction.WEST]: 'Reflection',
    [Direction.NORTH]: 'Wisdom',
    [Direction.CENTER]: 'Balance'
}

/**
 * Musical key mapper for JamAI integration
 * Maps Four Directions to musical keys
 */
export const DIRECTION_MUSICAL_KEYS: Record<Direction, string> = {
    [Direction.EAST]: 'B major',
    [Direction.SOUTH]: 'F major',
    [Direction.WEST]: 'G major',
    [Direction.NORTH]: 'D major',
    [Direction.CENTER]: 'E minor'
}

/**
 * Generate UUID for decision record with ceremonial context
 *
 * @param decisionSummary - Brief decision description
 * @param direction - Four Directions context
 * @param timestamp - ISO timestamp
 * @returns Deterministic UUID with ceremonial context
 */
export function generateDecisionUUID(decisionSummary: string, direction: Direction, timestamp: string): string {
    const name = `decision:${direction}:${decisionSummary}:${timestamp}`
    return generateTraceUUID(name)
}

/**
 * Sacred pause UUID generator
 * Generates UUID for sacred pause moments with ceremonial tracking
 *
 * @param trigger - What triggered the pause
 * @param timestamp - When the pause occurred
 * @returns UUID for this sacred pause moment
 */
export function generateSacredPauseUUID(trigger: string, timestamp: string): string {
    const name = `sacred-pause:${trigger}:${timestamp}`
    return generateTraceUUID(name)
}

/**
 * Relational accountability check-in UUID
 *
 * @param teamMembers - Array of team member names
 * @param checkInDate - Date of check-in
 * @returns UUID for this relational accountability moment
 */
export function generateRelationalCheckInUUID(teamMembers: string[], checkInDate: string): string {
    const sortedTeam = teamMembers.sort().join(',')
    const name = `relational-check-in:${sortedTeam}:${checkInDate}`
    return generateTraceUUID(name)
}
