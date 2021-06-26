import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    border: 4px solid lightcoral;
`

export default function HomePage() {
    return (
        <Page>
            <h1>{'Home Page'}</h1>
        </Page>
    )
}
