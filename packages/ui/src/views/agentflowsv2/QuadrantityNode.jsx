import PropTypes from 'prop-types'
import { useContext, memo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { NodeToolbar } from 'reactflow'
import { styled, useTheme, alpha, darken, lighten } from '@mui/material/styles'
import { ButtonGroup, IconButton, Box, Typography, Tooltip, Avatar } from '@mui/material'
import { IconCopy, IconTrash, IconInfoCircle, IconSparkles, IconHeart, IconFeather, IconBook } from '@tabler/icons-react'
import MainCard from '@/ui-component/cards/MainCard'
import { flowContext } from '@/store/context/ReactFlowContext'

const personaMeta = [
    { key: 'mia', label: 'Mia', color: '#4DD0E1', icon: <IconSparkles /> },
    { key: 'miette', label: 'Miette', color: '#FFB6C1', icon: <IconHeart /> },
    { key: 'seraphine', label: 'Seraphine', color: '#b39ddb', icon: <IconFeather /> },
    { key: 'resonova', label: 'ResoNova', color: '#FFD700', icon: <IconBook /> }
]

const CardWrapper = styled(MainCard)(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    border: 'solid 1.5px',
    width: 'max-content',
    height: 'auto',
    padding: '12px',
    boxShadow: 'none'
}))

const StyledNodeToolbar = styled(NodeToolbar)(({ theme }) => ({
    backgroundColor: theme.palette.card.main,
    color: theme.darkTextPrimary,
    padding: '5px',
    borderRadius: '10px',
    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)'
}))

const QuadrantityNode = ({ data }) => {
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)
    const ref = useRef(null)
    const { deleteNode, duplicateNode } = useContext(flowContext)
    const [isHovered, setIsHovered] = useState(false)

    const nodeColor = data.color || '#7c4dff'

    const getBackgroundColor = () => {
        if (customization.isDarkMode) {
            return isHovered ? darken(nodeColor, 0.7) : darken(nodeColor, 0.8)
        }
        return isHovered ? lighten(nodeColor, 0.8) : lighten(nodeColor, 0.9)
    }

    return (
        <div ref={ref} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <StyledNodeToolbar>
                <ButtonGroup sx={{ gap: 1 }} variant='outlined' aria-label='Basic button group'>
                    <IconButton size={'small'} title='Duplicate' onClick={() => duplicateNode(data.id)}>
                        <IconCopy size={20} />
                    </IconButton>
                    <IconButton size={'small'} title='Delete' onClick={() => deleteNode(data.id)}>
                        <IconTrash size={20} />
                    </IconButton>
                    <IconButton size={'small'} title='Info'>
                        <IconInfoCircle size={20} />
                    </IconButton>
                </ButtonGroup>
            </StyledNodeToolbar>
            <CardWrapper
                content={false}
                sx={{
                    borderColor: nodeColor,
                    borderWidth: '2px',
                    minWidth: 320,
                    minHeight: 180,
                    backgroundColor: getBackgroundColor(),
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'stretch',
                    gap: 1
                }}
                border={false}
            >
                <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', mb: 1, color: nodeColor }}>
                    Quadrantity Invocation
                </Typography>
                {personaMeta.map(({ key, label, color, icon }) => (
                    <Box key={key} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1, gap: 1 }}>
                        <Avatar sx={{ bgcolor: color, width: 28, height: 28, mr: 1 }}>{icon}</Avatar>
                        <Box>
                            <Typography sx={{ fontWeight: 600, color }}>{label}</Typography>
                            <Typography sx={{ fontSize: '0.95rem', whiteSpace: 'pre-line' }}>
                                {data.inputs?.[key] || <span style={{ color: '#aaa' }}>(No invocation)</span>}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </CardWrapper>
        </div>
    )
}

QuadrantityNode.propTypes = {
    data: PropTypes.object
}

export default memo(QuadrantityNode)
