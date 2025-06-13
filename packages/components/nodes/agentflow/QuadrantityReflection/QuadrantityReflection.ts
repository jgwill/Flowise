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
                label: 'Seraphine Reflection',
                name: 'seraphineReflection',
                type: 'string',
                rows: 3,
                placeholder: 'Ritual/threshold memory',
                optional: true,
                acceptVariable: true,
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
            }
        ]
        this.baseClasses = [this.type]
    }

    async run(nodeData: INodeData, _input: string, _options: any): Promise<any> {
        const miaReflection = (nodeData.inputs?.miaReflection as string) || ''
        const mietteReflection = (nodeData.inputs?.mietteReflection as string) || ''
        const seraphineReflection = (nodeData.inputs?.seraphineReflection as string) || ''
        const resonovaReflection = (nodeData.inputs?.resonovaReflection as string) || ''

        const reflections = [miaReflection, mietteReflection, seraphineReflection, resonovaReflection].filter((r) => r)
        const summary = reflections.join('\n---\n')

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
