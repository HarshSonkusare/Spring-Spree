import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = () => {
    return (
        <Container>
            <img src="../../images/logo.png" alt='logo' className='logo'/>
            <img src="../../images/background.png" alt="background" className='bg'/>
            <div data-depth="0" id="event-title" className="layer">
                <div>
                    <h1 className="titlename">SpringSpree'22</h1>
                    <p className="themename">Srishti</p>
                    <p className="event-dates">April 8-10, 2022</p>
                </div>
            </div>
        </Container>
    )
}


export default LandingPageContainer;

// > ul{
//     width: 100%;
//     > #background{
//         > img{
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height : 100%;
//         }
//     }

//     > #left{
//         > img{
//             position: absolute;
//             top: 0; 
//             left: 0;

//             /* width: 100%;
//             height: auto; */

//             @media (max-width : 600px){
//                 left: -150px;
//             }
//         }
//     }

//     > #right{
//         > img{
//             position: absolute;
//             top: 0;
//             right: 0;
//             /* width: 100%;
//             height: auto; */

//             @media (max-width : 600px){
//                 right: -150px;
//             }

//         }
//     }

//     > .left-right{

//     }
// } 

const Container = styled.div`
    /* height: 100vh; */
    min-height: 100vh;
    position : relative;
    overflow: hidden;

    background: url("../../images/Desktop.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
   
    @media (max-width : 800px) {
        background: url("../../images/Tab.png");
        background-size: cover;
        background-position: center;
    }

    @media (max-width : 480px) {
        background: url("../../images/Mobile.png") ; 
        background-size: cover;
        background-position: center;
    }

    > .logo{
        position: absolute;
        z-index: 100;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: min( 50vw, 250px) !important;
    }

    > .bg{
        position: absolute;
        z-index: -1;
        top : 0;
        left: 0;
        height: 100%;
    }
    > #event-title{
            > div{
                
                position: absolute;
                top: 68%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                z-index: 110;

                > h1 {
                    font-family: "Steinfeld";
                    white-space: nowrap;
                    font-weight: 900;
                    padding: 0 50px;
                    background: -webkit-linear-gradient(90deg, #FB3981 0%, #FDBB2D 100%);
                    -webkit-background-clip: text;
                    background-clip : text;
                    -webkit-text-fill-color: transparent;
                    font-size: clamp(90px, 10vw, 5rem);
                    line-height: normal !important;

                    @media (max-width : 600px){
                        font-size: 56px;
                    }
                    @media (max-width : 400px){
                        font-size: 45px;
                    }
                }
                > .themename{
                    background: -webkit-linear-gradient(90deg, #8412F3 0%, #FB3981 100%);
                    margin-top: -15px;
                    font-size: clamp(47px, 6vw, 3rem) ;
                    white-space: nowrap;
                    font-weight: 400;
                    padding: 0 50px;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                > .event-dates {
                    white-space: nowrap;
                    font-weight: 500;
                    padding: 0 50px;
                    color : white;
                    font-family: 'Poppins', sans-serif;
                    font-size: 1.5rem;
                }
            }
        }
`;
