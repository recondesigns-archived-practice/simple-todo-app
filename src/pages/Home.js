import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    padding: 40px 20px 40px 20px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    // border: 2px solid lightcoral;
`

const Wrapper = styled.div`
    width: 100%;
    // border: 1px solid dodgerblue;
`

const Title = styled.h1`
    margin-bottom: 4px;
    // width: 280px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #414141;
    // border: 1px dashed green;
`

const Subtitle = styled.p`
    // margin-bottom: 40px;
    // width: 280px;
    font-family: 'Merriweather', serif;
    font-weight: 400;
    color: #414141;
    // border: 1px dashed green;
`

const Input = styled.input`
    // margin-bottom: 8px;
    // padding-left: 12px;
    // padding-right: 12px;
    box-sizing: border-box;
    width: 100%;
    // width: 280px;
    height: 40px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #414141;
    border-radius: 4px;
    border: none;
    outline: none;
    // border: 1px solid #414141;
`

const PrimaryButton = styled.button`
    margin-top: 0px;
    margin-bottom: 32px;
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

const InputWrapper = styled.div`
    margin-bottom: 8px;
    border-bottom: 2px solid #414141;
`

export default function HomePage() {
    return (
        <Container>
            <Wrapper>
                <Title>{`Welcome.`}</Title>
                <Subtitle>{`Login or sign up to continue.`}</Subtitle>
            </Wrapper>
            <Wrapper>
                <InputWrapper>
                    <Input 
                        type={'email'} 
                        placeholder={'name@email.com'} 
                    />
                </InputWrapper>
                <InputWrapper>
                    <Input 
                        type={'password'} 
                        placeholder={'password'} 
                    />
                </InputWrapper>
                <PrimaryButton>{'Log in'}</PrimaryButton>
                <SecondaryButton>{'Sign up'}</SecondaryButton>
            </Wrapper>
        </Container>
    )
}
