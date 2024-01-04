import delve from 'dlv';
import Image from 'next/image';
import { getStrapiMedia } from '../../../utils';

const MyStep = ({ title, description, image }) => {
    image = delve(delve(image, "data"), "attributes");

    const url = getStrapiMedia(image.url);

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <Image src={url} alt="My Image" width={100} height={100} />
        </div>
    );
};

export default MyStep;

Image.defaultProps = {};    