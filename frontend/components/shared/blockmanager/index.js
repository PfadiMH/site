import Switcher from '../../blocks/Switcher';

const getBlockComponent = ({ __component, ...rest }, index) => {
    let Block;

    switch (__component) {
        case 'blocks.switcher':
            Block = Switcher;
            break;
    }
    return Block ? <Block key={`index-${index}`} {...rest} /> : null;
};

const BlockManager = ({ blocks }) => {
    return <div>{blocks.map(getBlockComponent)}</div>;
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;