type SliderButtonProps = {
    isDelayMode: boolean;
    onToggle: (isDelayMode: boolean) => void;
};

const SliderButton: React.FC<SliderButtonProps> = ({
    isDelayMode,
    onToggle,
}) => {
    const toggleIcon = () => {
        onToggle(!isDelayMode);
    };

    return (
        <div
            className="flex items-center space-x-2 transition"
            onClick={toggleIcon}
        >
            <span
                className="tooltip tooltip-secondary"
                data-tip="Offie shuts down at the hour of choice"
            >
                ⏰
            </span>
            <input type="checkbox" className="toggle" />
            <span
                className="tooltip tooltip-secondary"
                data-tip="Offie shuts down after the delay of choice"
            >
                ⌛
            </span>
        </div>
    );
};

export default SliderButton;
