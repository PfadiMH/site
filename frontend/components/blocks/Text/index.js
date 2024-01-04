import delve from 'dlv';

const Text = ({ text }) => {
    return (
        <p className="mt-3 text-lg text-white">
            {text}
        </p>
    );
};

Text.defaultProps = {};

export default Text;