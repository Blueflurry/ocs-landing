const ProgressBar = ({ color, progress }) => {
    return (
        <div className="progressBar">
            <div className="progressBar__container" style={{ backgroundColor: color, opacity: 0.3, width: "100%" }}></div>
            <div className="progressBar__track" style={{ backgroundColor: color, width: progress * 100 + "%" }}></div>
        </div>
    );
};

export default ProgressBar;
