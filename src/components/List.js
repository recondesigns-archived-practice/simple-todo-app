import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    // border: 2px solid lightgray;
`

const Item = styled.p`
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 8px 0px 8px 0px;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    color: #414141;
    text-align: center;
    // border: 1px dashed green;
`

export default function List(props) {
    const { listItems } = props

    let itemsList = listItems.map((userTask, idx) => {
        const { task } = userTask
        return <Item key={idx}>{task}</Item>
    })

    return (
        <Container>
            {itemsList}
        </Container>
    )
}
