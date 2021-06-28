import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    border: 2px solid lightgray;
`

const ItemContainer = styled.div`
    margin-top: 8px;
    // padding: 8px 0px 8px 0px;
    border: 1px dashed green;
`

const TaskName = styled.p`
    padding: 8px 0px;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #414141;
    text-align: center;
    border: 1px dotted pink;
    opacity: ${props => props.opacity};
    text-decoration: ${props => props.textDecoration};
`

export default function List(props) {
    const { listItems } = props

    function setCompletedStyles(status) {
        if (status === true) {
            return {
                opacity: '0.2',
                textDecoration: 'line-through'
            }
        } else if (status === false) {
            return {
                opacity: '1',
                textDecoration: 'none'
            }
        }
    }

    let itemsList = listItems.map((userTask, idx) => {
        const { task, isComplete } = userTask
        const { opacity, textDecoration } = setCompletedStyles(isComplete)

        return (
            <ItemContainer key={idx}>
                <TaskName 
                    opacity={opacity} 
                    textDecoration={textDecoration}
                >
                    {task}
                </TaskName>
            </ItemContainer>
        )
    })

    return (
        <Container>
            {itemsList}
        </Container>
    )
}
