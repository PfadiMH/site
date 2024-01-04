import delve from 'dlv';

const Text = ({ on }) => {
    return (
        <p className="mt-3 text-lg text-white">
            {String(on)}
        </p>
    );
};

Text.defaultProps = {};

export default Text;