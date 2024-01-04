import delve from 'dlv';

const Image = ({ image }) => {
    console.log(image);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    //const url = apiUrl + image.data.attributes.url;

    return (
        <Image
            src=""
            width={500}
            height={300}
        />
    );
};

Image.defaultProps = {};

export default Image;