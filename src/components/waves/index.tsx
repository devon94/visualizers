import React from 'react';
import styled, { keyframes } from 'styled-components';

const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 999;
    transform: rotate(180deg);
`

const BottomContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 999;
`

const Svg = styled.svg`
    display: block;
    width: 100%;
    height: 10em;
    max-height: 100vh;
    margin: 0;

    @media (max-width: 50em) {
        height: 17vw;
    }
`

const animation = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
  }
`

const Wave = styled.g`
    display: block;
    width: 100%;
    height: 10em;
    max-height: 100vh;
    margin: 0;

    use {
        animation: ${animation} 2s linear infinite;
    }

    use:nth-child(1) {
        animation-delay: -2s;
    }

    use:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 1.5s;
    }

    use:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 1s;
    }

    @media (max-width: 50em) {
        height: 17vw;
    }
`

const HiddenBottom = styled.div`
    background-color: #96bb7c;
    height: 100%;
`

const Waves = () => {
    return (
        <>
            <TopContainer id={"top-waves"}>
                <Svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    xmlnsXlink={"http://www.w3.org/1999/xlink"}
                    viewBox={"0 24 150 28"}
                    preserveAspectRatio={"none"}>
                    <defs>
                        <path
                            id="wave"
                            d="M-160 44c30 0 
                    58-18 88-18s
                    58 18 88 18 
                    58-18 88-18 
                    58 18 88 18
                    v44h-352z"
                        />
                    </defs>
                    <Wave>
                        {/* <use xlinkHref="#wave" x="50" y="0" fill="#4579e2" />
                        <use xlinkHref="#wave" x="50" y="3" fill="#3461c1" />
                        <use xlinkHref="#wave" x="50" y="6" fill="#2d55aa" /> */}
                        <use xlinkHref="#wave" x="50" y="0" fill="#d9adad" />
                        <use xlinkHref="#wave" x="50" y="3" fill="#fbfd8a" />
                        <use xlinkHref="#wave" x="50" y="6" fill="#96bb7c" />
                    </Wave>
                </Svg>
                <HiddenBottom />
            </TopContainer>
            <BottomContainer id={"bottom-waves"}>
                <Svg
                    xmlns={"http://www.w3.org/2000/svg"}
                    xmlnsXlink={"http://www.w3.org/1999/xlink"}
                    viewBox={"0 24 150 28"}
                    preserveAspectRatio={"none"}>
                    <defs>
                        <path
                            id="wave"
                            d="M-160 44c30 0 
                        58-18 88-18s
                        58 18 88 18 
                        58-18 88-18 
                        58 18 88 18
                        v44h-352z"
                        />
                    </defs>
                    <Wave>
                        <use xlinkHref="#wave" x="50" y="0" fill="#d9adad" />
                        <use xlinkHref="#wave" x="50" y="3" fill="#fbfd8a" />
                        <use xlinkHref="#wave" x="50" y="6" fill="#96bb7c" />
                    </Wave>
                </Svg>
                <HiddenBottom />
            </BottomContainer>
        </>

    )
}

export default Waves