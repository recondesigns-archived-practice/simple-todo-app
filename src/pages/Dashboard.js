import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import { auth } from '../base'

const Page = styled.div`
    border: 4px solid lightcoral;
`

const PrimaryButton = styled.button`
    margin-top: 0px;
    // margin-bottom: 32px;
    width: 100%;
    // width: 280px;
    height: 40px;
    border: none;
    color: dodgerblue;
    // color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    // background: #414141;
    background: none;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

const SecondaryButton = styled.button`
    width: 100%;
    // width: 280px;
    height: 40px;
    border: none;
    // border: 1px solid #414141;
    color: #414141;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    border-radius: 4px;
    // text-transform: uppercase;
    background: #FFFFFF;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`

export default function DashboardPage() {
    const [currentUser, setCurrentUser] = useContext(AuthContext)
    if (currentUser) {
        console.log(555, currentUser)
    }
    let history = useHistory()

    function changeRoute(historyMethod, path) {
        historyMethod.push(path)
    }

    function logOut() {
        auth.signOut()
            .then(() => console.log(`User has been signed out.`))
            .catch((error) => console.log(error))
        setCurrentUser(null)
    }

    return (
        <Page>
            <PrimaryButton onClick={() => logOut()}>{'Log out'}</PrimaryButton>
            <SecondaryButton onClick={() => changeRoute(history, '/')}>{'Home'}</SecondaryButton>
        </Page>
    )
}
