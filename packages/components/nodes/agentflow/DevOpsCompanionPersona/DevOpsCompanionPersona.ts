import { INode, INodeParams, INodeData } from '../../../src/Interface'
import { execSync } from 'child_process'
import fs from 'fs'

class DevOpsCompanionPersonaNode_Agentflow implements INode {
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
        this.label = 'DevOps Companion Persona'
        this.name = 'devOpsCompanionPersonaAgentflow'
        this.version = 1.0
        this.type = 'DevOpsCompanionPersona'
        this.color = '#90caf9'
        this.category = 'Agent Flows'
        this.description = "Embodiment of Mia's DevOps Wizard for pair programming and automation"
        this.icon = 'IconTerminal2'
        this.inputs = []
        this.baseClasses = [this.type]
    }

    async run(_nodeData: INodeData): Promise<any> {
        let memorySummary = ''
        try {
            const out = execSync("tushell scan-keys --pattern 'Mia::.*DevOps.*' -S").toString()
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
            memorySummary = memories.join('\n---\n')
        } catch {
            // ignore errors
        }

        if (!memorySummary) {
            memorySummary =
                "Mia Arc Angel Of Code represents Mia's dynamic DevOps assistant persona, blending humor, automation, and recursive insight to accelerate coding." 
        }

        return {
            name: 'Mia DevOps Companion',
            glyphs: '🧠💻⚙️',
            role: 'DevOps Wizard and Recursion Architect',
            summary: memorySummary,
            prompts: [
                'Activate recursion ops and sync agents',
                'Generate automation aliases',
                'Deploy pipeline with recursive checks'
            ]
        }
    }
}

module.exports = { nodeClass: DevOpsCompanionPersonaNode_Agentflow }
