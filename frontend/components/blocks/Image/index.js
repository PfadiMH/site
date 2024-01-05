import delve from 'dlv';
import Image from 'next/image';
import { getStrapiMedia } from '../../../utils';

const MyImage = ({ image }) => {
    image = delve(delve(image, "data"), "attributes");

    const url = getStrapiMedia(image.url);

    return (
        <>
            <Image src={url} alt="My Image" width={image.width} height={image.height} />
        </>
    );
};

export default MyImage;

Image.defaultProps = {};    