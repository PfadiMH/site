import delve from 'dlv';
import Image from 'next/image';
import { getStrapiMedia } from '../../../utils';
import Richtext from '../Richtext';

const MyStep = ({ title, description, image }) => {
    image = delve(delve(image, "data"), "attributes");

    const url = getStrapiMedia(image.url);

    return (
        <div className="container mx-auto px-4">
            <div className="font-bold text-3xl">{title}</div>
            <div className="my-8 flex flex-row gap-8">
                <Image src={url} alt="My Image" width={image.width} height={image.height} className="rounded-lg w-[400px] h-[400px]" />
                <Richtext content={description} />
            </div>
        </div>
    );
};

export default MyStep;


