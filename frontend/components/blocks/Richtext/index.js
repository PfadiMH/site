import { BlocksRenderer } from '@strapi/blocks-react-renderer/';



const Richtext = (richtext) => {
    return (
        <BlocksRenderer content={richtext} />
    );
};

export default Richtext;