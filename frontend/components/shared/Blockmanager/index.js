import dynamic from 'next/dynamic';

import { useRouter } from 'next/router';
import Image from '../../blocks/Image';

const MyText = dynamic(() => import('../../blocks/Text'), {
    ssr: false,
});
const Toggle = dynamic(() => import('../../blocks/Toggle'), {
    ssr: false,
});

const BlockManager = ({ blocks, contentType, pageData, type }) => {
    const router = useRouter();
    const query = router.query;
    return (
        <div>
            {blocks.map((block, index) => {
                let Block;

                switch (block.__component) {
                    case 'blocks.text':
                        Block = MyText;
                        break;

                    case 'blocks.toggle':
                        Block = Toggle;
                        break;
                    case 'blocks.image':
                        Block = Image;
                        break;
                }

                return Block ? (
                    <Block component={block.__component} {...block} />
                ) : null;
            })}
        </div>
    );
};

BlockManager.defaultProps = {
    blocks: [],
};

export default BlockManager;