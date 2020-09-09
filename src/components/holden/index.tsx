import React from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #252627;
`

interface Props {
    src?: string
}

const Visualizer: React.FunctionComponent<Props> = (props) => {
    const { src = 'music.mp3' } = props

    return (
        <>
            <Canvas id={"canvas"} />
            <audio id={"visualizerAudio"} src={process.env.PUBLIC_URL + src} />
        </>
    )
}

export default Visualizer