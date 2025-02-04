import "./style.css";

export const Result = ({ result }) => (
    <div className="result">
        {!!result && (
            <>
                Twoja kwota:
                <span className="result__amount">
                    {result.targetAmount.toFixed(2)}&nbsp;zł
                </span>
            </>
        )}
    </div>
);