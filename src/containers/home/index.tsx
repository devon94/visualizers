import React from 'react';
import Waves from '../../components/waves';
import Visualizer from '../../components/holden';
import { startColorfulVisualizer } from '../../components/holden/helper';

const Home: React.FC = () => {
    const [isStarted, setIsStarted] = React.useState<boolean>(false)
    const start = React.useCallback(() => {
        if (!isStarted) {
            setTimeout(() => startColorfulVisualizer(), 5)
            setIsStarted(true)
        }

    }, [isStarted])

    return (
        <div onClick={start}>
            <Visualizer />
            {isStarted ? <Waves /> : null}
        </div>
    );
}

export default Home;
