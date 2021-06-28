import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../contexts/Auth'
import { auth, firestoreDb } from '../base'
import List from '../components/List'

const Container = styled.div`
    position: relative;
    box-sizing: border-box;
    padding: 40px 20px 0px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    // border: 2px solid lightcoral;

    @media (min-width: 400px) {
        max-width: 400px;
        left: calc(50% - 400px/2);
    }
`

const HeadingWrapper = styled.div`
    width: 100%;
    // border: 1px solid dodgerblue;
`

const FormWrapper = styled.div`
    margin-top: 40px;
    margin-bottom: 20px;
    width: 100%;
    // border: 1px solid dodgerblue;
`

const Title = styled.h1`
    margin-bottom: 4px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #414141;
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    font-family: 'Merriweather', serif;
    font-weight: 400;
    color: #414141;
    // border: 1px dashed green;
`

const InputWrapper = styled.div`
    margin-bottom: 8px;
    width: 100%;
    border-bottom: 2px solid #414141;
`

const Input = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    // width: 280px;
    height: 60px;
    // height: auto;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #414141;
    border-radius: 4px;
    border: none;
    // border: 1px solid #414141;
`

const FormButton = styled.button`
    background: #414141;
    padding: 8px 16px 8px 16px;
    border-radius: 8px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    border: none;

    &:hover {
        opacity: 0.8;
    }
`

const PrimaryButton = styled.button`
    margin-top: 8px;
    width: 100%;
    height: 40px;
    border: none;
    color: dodgerblue;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    text-transform: uppercase;
    background: none;
    cursor: pointer;
    // border: 1px solid red;

    &:hover {
        opacity: 0.8;
    }
`

export default function DashboardPage() {
    const [currentUser] = useContext(AuthContext)
    const [newTask, setNewTask] = useState(null)
    let history = useHistory()

    function changeRoute(historyMethod, path) {
        historyMethod.push(path)
    }

    function logOut() {
        auth.signOut()
            .then()
            .catch((error) => console.log(error))
        
        changeRoute(history, '/')
    }

    function task(addedTask, complete) {
        return {
            task: addedTask,
            isComplete: false
        }
    }

    function handleOnChange(e, setter) {
        const { value } = e.target
        setter(() => value)
    }

    function addTask() {
        const { id, tasks } = currentUser
        let userDocRef = firestoreDb.collection('data').doc(id)

        userDocRef.update({
            tasks: [...tasks, task(newTask, false)]
        }).then().catch((error) => console.log(error))

        setNewTask(null)
    }

    return (
        <Container>
            <HeadingWrapper>
                <Title>{`Welcome back.`}</Title>
                <Subtitle>{`You have ${currentUser.tasks.length} tasks to complete.`}</Subtitle>
            </HeadingWrapper>

            <FormWrapper>
                <InputWrapper>
                    <Input 
                        type={'text'} 
                        placeholder={'New task'} 
                        onChange={(e) => handleOnChange(e, setNewTask)}
                    />
                </InputWrapper>
                <FormButton onClick={() => addTask()}>{'Add task'}</FormButton>
            </FormWrapper>

            <List listItems={currentUser.tasks} />
        
            <PrimaryButton onClick={() => logOut()}>{'Log out'}</PrimaryButton>
        </Container>
    )
}