import delve from 'dlv';

const Text = ({ text }) => {
    return (
        <div>
            <div className="lg:flex lg:items-center lg:justify-between w-2/3 mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <div className="lg:mt-0 lg:flex-shrink-0 space-x-2">
                </div >
                <div>
                    <p className="mt-3 text-lg text-white">
                        {delve(text, 'text')}
                    </p>
                </div>
            </div >
        </div >
    );
};

Text.defaultProps = {};

export default Text;