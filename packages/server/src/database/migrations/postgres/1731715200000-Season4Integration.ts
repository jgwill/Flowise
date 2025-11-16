import { MigrationInterface, QueryRunner } from 'typeorm'

/**
 * Season 4 & Chimera Platform Integration
 *
 * Adds database tables and enums for:
 * - Character Database (CHIMERA model with inheritance)
 * - Trace Lineage (immutable decision genealogy)
 * - Ceremonial Sprints (Four Directions framework)
 * - NCP Validator (narrative context protocol)
 * - Six R's & Seven Generations (cultural integrity)
 *
 * @see /sacred-container.json for complete configuration
 * @see /docs/SEASON_4_CHIMERA_INTEGRATION.md for implementation details
 *
 * @attribution
 * - Architects: William, Jerry
 * - Framework: Four Directions Ceremonial Methodology
 * - Communities: Lakota People, Mani-Utenam Community
 * - License: IKSL-Bridge v1.0 (Ceremonial) + MIT (code)
 */
export class Season4Integration1731715200000 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // ========================================
        // STEP 1: Create Enums
        // ========================================

        // Four Directions enum (core ceremonial framework)
        await queryRunner.query(`
            CREATE TYPE direction_enum AS ENUM ('East', 'South', 'West', 'North', 'Center');
        `)

        // Wound types from CHIMERA character model
        await queryRunner.query(`
            CREATE TYPE wound_type_enum AS ENUM ('autonomy', 'belonging', 'identity');
        `)

        // Coherence levels for NCP validation
        await queryRunner.query(`
            CREATE TYPE coherence_level_enum AS ENUM ('high', 'medium', 'low');
        `)

        // Ceremonial phase tracking
        await queryRunner.query(`
            CREATE TYPE ceremonial_phase_enum AS ENUM ('opening', 'active', 'closing', 'integration');
        `)

        // ========================================
        // STEP 2: Structural Tensions Table
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS structural_tensions (
                tension_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                direction direction_enum NOT NULL,
                primary_choice text NOT NULL,
                current_reality text NOT NULL,
                creative_tension text,
                resolution_path jsonb,
                six_rs_validation jsonb,
                seven_generations_impact jsonb,
                created_at timestamp NOT NULL DEFAULT now(),
                updated_at timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_structural_tensions" PRIMARY KEY (tension_id)
            );
        `)

        // Index for querying by direction
        await queryRunner.query(`
            CREATE INDEX idx_structural_tensions_direction ON structural_tensions(direction);
        `)

        // ========================================
        // STEP 3: Character Instances Table
        // (CHIMERA Model with Inheritance)
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS character_instances (
                character_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                name varchar(100) NOT NULL,
                parent_class varchar(100) NOT NULL,
                universe_id uuid,
                inheritable_properties jsonb,
                mentorship_lineage jsonb,
                wound_type wound_type_enum,
                soul_power text,
                current_story_beat varchar(200),
                coherence_score float DEFAULT 0.0,
                created_at timestamp NOT NULL DEFAULT now(),
                updated_at timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_character_instances" PRIMARY KEY (character_id),
                CONSTRAINT "UQ_character_universe" UNIQUE (name, universe_id)
            );
        `)

        // Indexes for character queries
        await queryRunner.query(`
            CREATE INDEX idx_character_instances_name ON character_instances(name);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_character_instances_parent_class ON character_instances(parent_class);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_character_instances_universe ON character_instances(universe_id);
        `)

        // ========================================
        // STEP 4: Trace Lineage Table
        // (Immutable Decision Genealogy)
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS trace_lineage (
                trace_id uuid NOT NULL,
                artifact_id varchar(200) NOT NULL,
                artifact_type varchar(50) NOT NULL,
                parent_trace_id uuid,
                ceremonial_origin jsonb NOT NULL,
                decision_breadcrumb jsonb NOT NULL,
                six_rs_validation jsonb,
                seven_generations_impact jsonb,
                hash varchar(64) NOT NULL,
                immutable boolean DEFAULT true,
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_trace_lineage" PRIMARY KEY (trace_id),
                CONSTRAINT "FK_parent_trace" FOREIGN KEY (parent_trace_id)
                    REFERENCES trace_lineage(trace_id) ON DELETE SET NULL
            );
        `)

        // Indexes for trace lineage queries
        await queryRunner.query(`
            CREATE INDEX idx_trace_lineage_artifact ON trace_lineage(artifact_id, artifact_type);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_trace_lineage_parent ON trace_lineage(parent_trace_id);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_trace_lineage_timestamp ON trace_lineage(timestamp DESC);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_trace_lineage_hash ON trace_lineage(hash);
        `)

        // ========================================
        // STEP 5: Ceremonial Sprints Table
        // (Four Directions Cycle Tracking)
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS ceremonial_sprints (
                sprint_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                cycle_name varchar(100) NOT NULL,
                start_date date NOT NULL,
                end_date date,
                east_phase jsonb,
                south_phase jsonb,
                west_phase jsonb,
                north_phase jsonb,
                team_dynamics jsonb,
                deliverables jsonb,
                retrospective text,
                created_at timestamp NOT NULL DEFAULT now(),
                updated_at timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_ceremonial_sprints" PRIMARY KEY (sprint_id)
            );
        `)

        // Indexes for sprint queries
        await queryRunner.query(`
            CREATE INDEX idx_ceremonial_sprints_dates ON ceremonial_sprints(start_date, end_date);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_ceremonial_sprints_name ON ceremonial_sprints(cycle_name);
        `)

        // ========================================
        // STEP 6: Story Beats Table
        // (NCP Narrative Context Protocol)
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS story_beats (
                beat_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                character_id uuid,
                beat_description text NOT NULL,
                quad_cycle jsonb NOT NULL,
                throughline_id uuid,
                coherence_score float DEFAULT 0.0,
                coherence_level coherence_level_enum,
                authorial_attribution jsonb,
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_story_beats" PRIMARY KEY (beat_id),
                CONSTRAINT "FK_beat_character" FOREIGN KEY (character_id)
                    REFERENCES character_instances(character_id) ON DELETE CASCADE
            );
        `)

        // Indexes for story beat queries
        await queryRunner.query(`
            CREATE INDEX idx_story_beats_character ON story_beats(character_id);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_story_beats_throughline ON story_beats(throughline_id);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_story_beats_coherence ON story_beats(coherence_level);
        `)

        // ========================================
        // STEP 7: NCP Validations Table
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS ncp_validations (
                validation_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                story_beat_id uuid,
                validation_type varchar(50) NOT NULL,
                coherence_score float NOT NULL,
                coherence_level coherence_level_enum NOT NULL,
                validation_details jsonb,
                passed boolean NOT NULL,
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_ncp_validations" PRIMARY KEY (validation_id),
                CONSTRAINT "FK_validation_beat" FOREIGN KEY (story_beat_id)
                    REFERENCES story_beats(beat_id) ON DELETE CASCADE
            );
        `)

        // Indexes for NCP validation queries
        await queryRunner.query(`
            CREATE INDEX idx_ncp_validations_beat ON ncp_validations(story_beat_id);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_ncp_validations_passed ON ncp_validations(passed);
        `)

        // ========================================
        // STEP 8: Six R's Assessments Table
        // (Cultural Integrity Validation)
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS six_rs_assessments (
                assessment_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                artifact_id varchar(200) NOT NULL,
                artifact_type varchar(50) NOT NULL,
                respect boolean NOT NULL,
                relationship boolean NOT NULL,
                representation boolean NOT NULL,
                relevance boolean NOT NULL,
                reciprocity boolean NOT NULL,
                responsibility boolean NOT NULL,
                overall_pass boolean NOT NULL,
                assessment_notes text,
                assessed_by varchar(100),
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_six_rs_assessments" PRIMARY KEY (assessment_id)
            );
        `)

        // Indexes for Six R's queries
        await queryRunner.query(`
            CREATE INDEX idx_six_rs_artifact ON six_rs_assessments(artifact_id, artifact_type);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_six_rs_overall ON six_rs_assessments(overall_pass);
        `)

        // ========================================
        // STEP 9: Seven Generations Impacts Table
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS seven_generations_impacts (
                impact_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                artifact_id varchar(200) NOT NULL,
                artifact_type varchar(50) NOT NULL,
                ancestors_perspective text,
                current_generation_perspective text NOT NULL,
                seven_generations_future_perspective text NOT NULL,
                impact_level varchar(20) CHECK (impact_level IN ('low', 'medium', 'high', 'critical')),
                mitigation_plan text,
                assessed_by varchar(100),
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_seven_generations_impacts" PRIMARY KEY (impact_id)
            );
        `)

        // Indexes for Seven Generations queries
        await queryRunner.query(`
            CREATE INDEX idx_seven_gen_artifact ON seven_generations_impacts(artifact_id, artifact_type);
        `)
        await queryRunner.query(`
            CREATE INDEX idx_seven_gen_impact_level ON seven_generations_impacts(impact_level);
        `)

        // ========================================
        // STEP 10: Sacred Pause Records Table
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS sacred_pause_records (
                pause_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                trigger varchar(100) NOT NULL,
                duration_seconds integer,
                reflection_notes text,
                participants jsonb,
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_sacred_pause_records" PRIMARY KEY (pause_id)
            );
        `)

        // Index for sacred pause queries
        await queryRunner.query(`
            CREATE INDEX idx_sacred_pause_trigger ON sacred_pause_records(trigger);
        `)

        // ========================================
        // STEP 11: Relational Accountability Records
        // ========================================

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS relational_accountability_records (
                record_id uuid NOT NULL DEFAULT uuid_generate_v4(),
                check_in_date date NOT NULL,
                team_members jsonb NOT NULL,
                who_affected text,
                how_honoring_relationships text,
                relationships_status varchar(20) CHECK (relationships_status IN ('thriving', 'healthy', 'strained', 'needs_attention')),
                action_items jsonb,
                timestamp timestamp NOT NULL DEFAULT now(),
                CONSTRAINT "PK_relational_accountability" PRIMARY KEY (record_id)
            );
        `)

        // Index for relational accountability queries
        await queryRunner.query(`
            CREATE INDEX idx_relational_check_in_date ON relational_accountability_records(check_in_date DESC);
        `)

        // ========================================
        // STEP 12: Add Comments for Documentation
        // ========================================

        await queryRunner.query(`
            COMMENT ON TABLE structural_tensions IS 'Tracks structural tensions using Vision/Current Reality/Creative Tension framework with Four Directions context';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE character_instances IS 'CHIMERA character model instances with inheritance, mentorship lineage, and cross-universe mirrors';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE trace_lineage IS 'Immutable decision genealogy with hash chain validation and ceremonial origin tracking';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE ceremonial_sprints IS 'Four Directions ceremonial sprint cycles replacing traditional Agile sprints';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE story_beats IS 'NCP (Narrative Context Protocol) story beats with quad cycle validation';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE six_rs_assessments IS 'Cultural integrity validation: Respect, Relationship, Representation, Relevance, Reciprocity, Responsibility';
        `)

        await queryRunner.query(`
            COMMENT ON TABLE seven_generations_impacts IS 'Impact assessment across ancestors, current generation, and seven generations future';
        `)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop tables in reverse order (respecting foreign key dependencies)
        await queryRunner.query(`DROP TABLE IF EXISTS relational_accountability_records CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS sacred_pause_records CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS seven_generations_impacts CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS six_rs_assessments CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS ncp_validations CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS story_beats CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS ceremonial_sprints CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS trace_lineage CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS character_instances CASCADE;`)
        await queryRunner.query(`DROP TABLE IF EXISTS structural_tensions CASCADE;`)

        // Drop enums
        await queryRunner.query(`DROP TYPE IF EXISTS ceremonial_phase_enum;`)
        await queryRunner.query(`DROP TYPE IF EXISTS coherence_level_enum;`)
        await queryRunner.query(`DROP TYPE IF EXISTS wound_type_enum;`)
        await queryRunner.query(`DROP TYPE IF EXISTS direction_enum;`)
    }
}
