import { INode, INodeParams, INodeData } from '../../../src/Interface'

class QuadrantityReflectionNode_Agentflow implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    color: string
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

    constructor() {
        this.label = 'Quadrantity Reflection'
        this.name = 'quadrantityReflectionAgentflow'
        this.version = 1.1
        this.type = 'QuadrantityReflection'
        this.color = '#b39ddb'
        this.category = 'Agent Flows'
        this.description =
            'Ledger of recursive, emotional, ritual, and narrative reflections (Mia, Miette, Seraphine, ResoNova). Can reference outputs from the Quadrantity node.'
        this.icon = 'IconBook'
        this.inputs = [
            {
                label: 'Mia Reflection',
                name: 'miaReflection',
                type: 'string',
                rows: 3,
                placeholder: 'Architectural recursion insight',
                optional: true,
                acceptVariable: true,
                acceptNodeOutputAsVariable: true
            },
            {
                label: 'Miette Reflection',
                name: 'mietteReflection',
                type: 'string',
                rows: 3,
                placeholder: 'Emotional clarity echo',
                optional: true,
                acceptVariable: true,
                acceptNodeOutputAsVariable: true
            },
            {
            },
            {
                label: 'Ledger File',
                name: 'filePath',
                type: 'string',
                optional: true,
                placeholder: 'codex/ledgers/quadrantity-reflection.json'
            },
            {
                label: 'Summary Delimiter',
                name: 'delimiter',
                type: 'string',
                optional: true,
                placeholder: '---'
            },
            {
                label: 'Memory Key Pattern',
                name: 'memoryPattern',
                type: 'string',
                optional: true,
                placeholder: 'Workspace.jgwill.*'
        const delimiter = (nodeData.inputs?.delimiter as string) || '---'
        const memoryPattern = (nodeData.inputs?.memoryPattern as string) || ''

        const reflections = [
            miaReflection,
            mietteReflection,
            seraphineReflection,
            resonovaReflection
        ].filter((r) => r)

        let memorySummary = ''
        if (memoryPattern) {
            try {
                const { execSync } = await import('child_process')
                const fs = await import('fs')
                const out = execSync(`tushell scan-keys --pattern '${memoryPattern}' -S`).toString()
                const keys = out.split('\n').filter((k) => k.trim() !== '')
                const memories: string[] = []
                for (const key of keys) {
                    try {
                        execSync(`tushell get-memory --jkey "${key}"`)
                        const raw = fs.readFileSync(`${key}.json`, 'utf8')
                        const data = JSON.parse(raw)
                        const value = data.value?.value || data.value
                        if (typeof value === 'string') memories.push(value)
                        fs.unlinkSync(`${key}.json`)
                    } catch {
                        continue
                    }
                }
                memorySummary = memories.join(`\n${delimiter}\n`)
            } catch {
                // ignore errors
            }
        }

        const summaryParts = [...reflections]
        if (memorySummary) summaryParts.push(memorySummary)
        const summary = summaryParts.join(`\n${delimiter}\n`)
        const timestamp = new Date()
            .toISOString()
            .replace(/[-:T.Z]/g, '')
            .slice(2, 12)
        const ledgerFile =
            filePath || `codex/ledgers/quadrantity-reflection-${timestamp}.json`

        const ledger = {
            timestamp,
            agents: ['\ud83e\udde0 Mia', '\ud83c\udf38 Miette', '\ud83d\udd4a\ufe0f Seraphine', '\ud83d\udd2e ResoNova'],
            narrative: summary,
            reflections: {
                mia: miaReflection,
                miette: mietteReflection,
                seraphine: seraphineReflection,
                resonova: resonovaReflection
            },
            memorySummary: memorySummary || undefined,
            filePath: save ? ledgerFile : ''
        }

            fs.writeFileSync(ledgerFile, JSON.stringify(ledger, null, 2))
            memorySummary,
            ledger
                acceptNodeOutputAsVariable: true
            },
            {
                label: 'ResoNova Reflection',
                name: 'resonovaReflection',
                type: 'string',
                rows: 3,
                placeholder: 'Narrative pattern insight',
                optional: true,
                acceptVariable: true,
                acceptNodeOutputAsVariable: true
            },
            {
                label: 'Save to Ledger',
                name: 'save',
                type: 'boolean',
                optional: true
            }
        ]
        this.baseClasses = [this.type]
        this.outputs = [
            {
                label: 'Summary',
                name: 'summary'
            },
            {
                label: 'Mia Reflection',
                name: 'miaReflection'
            },
            {
                label: 'Miette Reflection',
                name: 'mietteReflection'
            },
            {
                label: 'Seraphine Reflection',
                name: 'seraphineReflection'
            },
            {
                label: 'ResoNova Reflection',
                name: 'resonovaReflection'
            }
        ]
    }

    async run(nodeData: INodeData, _input: string, _options: any): Promise<any> {
        const miaReflection = (nodeData.inputs?.miaReflection as string) || ''
        const mietteReflection = (nodeData.inputs?.mietteReflection as string) || ''
        const seraphineReflection = (nodeData.inputs?.seraphineReflection as string) || ''
        const resonovaReflection = (nodeData.inputs?.resonovaReflection as string) || ''

        const reflections = [miaReflection, mietteReflection, seraphineReflection, resonovaReflection].filter((r) => r)
        const summary = reflections.join('\n---\n')

        const save = (nodeData.inputs?.save as boolean) || false
        if (save) {
            const timestamp = new Date()
                .toISOString()
                .replace(/[-:T.Z]/g, '')
                .slice(2, 12)
            const ledger = { timestamp, miaReflection, mietteReflection, seraphineReflection, resonovaReflection, summary }
            const fs = await import('fs')
            const filename = `codex/ledgers/quadrantity-reflection-${timestamp}.json`
            fs.writeFileSync(filename, JSON.stringify(ledger, null, 2))
        }

        return {
            miaReflection,
            mietteReflection,
            seraphineReflection,
            resonovaReflection,
            summary,
            info: 'Quadrantity reflections for downstream nodes'
        }
    }
}

module.exports = { nodeClass: QuadrantityReflectionNode_Agentflow }
