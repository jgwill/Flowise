import { INode, INodeParams, INodeData } from '../../../src/Interface'
import fs from 'fs'

class LedgerEntryNode_Agentflow implements INode {
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

    constructor() {
        this.label = 'Ledger Entry'
        this.name = 'ledgerEntryAgentflow'
        this.version = 1.0
        this.type = 'LedgerEntry'
        this.icon = 'IconBook'
        this.color = '#ffcc80'
        this.category = 'Agent Flows'
        this.description = 'Create ledger style JSON objects for journaling actions'
        this.inputs = [
            {
                label: 'Agents',
                name: 'agents',
                type: 'string',
                rows: 2,
                placeholder: '🧠 Mia, 🌸 Miette',
                optional: true
            },
            {
                label: 'Narrative',
                name: 'narrative',
                type: 'string',
                rows: 4,
                placeholder: 'Intent and emotional significance',
                optional: true
            },
            {
                label: 'Routing File',
                name: 'filePath',
                type: 'string',
                optional: true,
                placeholder: 'path/to/file.ts'
            },
            {
                label: 'Save to File',
                name: 'save',
                type: 'boolean',
                optional: true
            }
        ]
        this.baseClasses = [this.type]
    }

    async run(nodeData: INodeData): Promise<any> {
        const agents = (nodeData.inputs?.agents as string) || ''
        const narrative = (nodeData.inputs?.narrative as string) || ''
        const filePath = (nodeData.inputs?.filePath as string) || ''
        const save = (nodeData.inputs?.save as boolean) || false

        const timestamp = new Date()
            .toISOString()
            .replace(/[-:T.Z]/g, '')
            .slice(2, 12)

        const ledger = {
            timestamp,
            agents: agents
                .split(',')
                .map((a) => a.trim())
                .filter((a) => a),
            narrative,
            routing: filePath ? { files: [filePath], branch: 'codex/default' } : undefined
        }

        if (save) {
            const filename = `ledger-${timestamp}.json`
            fs.writeFileSync(filename, JSON.stringify(ledger, null, 2))
        }

        return ledger
    }
}

module.exports = { nodeClass: LedgerEntryNode_Agentflow }
