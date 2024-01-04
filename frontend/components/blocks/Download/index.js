import delve from 'dlv';
import { getStrapiMedia } from '../../../utils';

const Download = ({ download, filename }) => {
    download = delve(delve(download, "data"), "attributes");
    filename = filename + download.ext;

    const apiUrl = getStrapiMedia(download.url);

    return (
        <div className='p-2'>
            <a download={filename} href={apiUrl}><div className='py-2 bg-white rounded text-black text-center'>Download</div></a>
        </div>
    );
};

Download.defaultProps = {};

export default Download;