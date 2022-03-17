import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import VideoBackground from './VideoBackground';

const Shristi = ()=>{
    return(
        <>
            <Container  id="1">
                <VideoBackground />
                    <Text data-aos="fade-left" data-aos-duration="1500">
                        <h1> Srishti </h1>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with th </p>
                        <div className='button'>
                            <StyledLink to="/explore"> Explore <span></span> <span></span> <span></span> <span></span></StyledLink>
                        </div>
                    </Text>
                    <img src="../../images/logo-dark.png" alt="shrishti logo" />
            </Container>
        </>
    )
}

export default Shristi;
const Container = styled.div`
    height : 100vh;
    padding-bottom : 3rem;
    position : relative;
    width : 100%;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content: space-around;
    overflow : hidden; 

    @media (max-width : 750px){
        display: flex;
        flex-direction: column-reverse
    }
    
    > img {
        @media (max-width : 1200px){
            width : 400px;
            height : 400px;
        }
        @media (max-width : 950px){
            width : 350px;
            height : 350px;
        }
    }
`;


const Text = styled.div`
    color : white;
    width : 45%;
    font-size : 1.2rem;
    font-family: 'Poppins', sans-serif;

    @media (max-width : 750px){
        font-size : 17px;
        width : 100%;
        padding : 10px;
        text-align: center;

    }
    > .button{
        display : flex;
        justify-content : flex-end;

        @media (max-width : 750px){
            justify-content: center;
            margin-top: 10px;
        }

    }

    >h1{
        color : var(--c);
    }
`;

const StyledLink = styled(Link)`
    color: var(--c);
    font-size: 16px;
    border: 4px solid var(--c);
    border-radius: 0.5em;
    width: 12em;
    height: 3em;
    text-transform: uppercase;
    font-weight: bold;
    font-family: sans-serif;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 2.5em;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    text-decoration : none;




    > span{
        position: absolute;
        width: 25%;
        height: 100%;
        background-color: var(--c);
        transform: translateY(150%);
        border-radius: 50%;
        left: calc((var(--n) - 1) * 25%);
        transition: 0.5s;
        transition-delay: calc((var(--n) - 1) * 0.1s);
        z-index: -1;
    }

    &:hover{
        color : black;

        span{
            transform: translateY(0) scale(2);
        }

        span:nth-child(1) {
            --n: 1;
        }

        span:nth-child(2) {
            --n: 2;
        }
        span:nth-child(3) {
            --n: 3;
        }

        span:nth-child(4) {
            --n: 4;
        }
            
    }
`;



