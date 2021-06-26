import React from 'react'
import styled from 'styled-components'

const Page = styled.div`
    border: 4px solid lightcoral;
`

export default function DashboardPage() {
    return (
        <Page>
            <h1>{'Dashboard Page'}</h1>
        </Page>
    )
}
