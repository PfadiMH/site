import delve from 'dlv';
import Image from 'next/image';
import { getStrapiMedia } from '../../../utils';

const MyImage = ({ image }) => {
    image = delve(delve(image, "data"), "attributes");

    const url = getStrapiMedia(image.url);

    return (
        <>
            <Image src={url} alt="My Image" width={image.width} height={image.height} className="rounded-lg w-1/2 h-1/2" />
        </>
    );
};

export default MyImage;

Image.defaultProps = {};    