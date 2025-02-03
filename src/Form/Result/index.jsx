import "./style.css";

export const Result = ({ result }) => (
    <div className="result">
        {!!result && (
            <>
                <span>
                    {result.sourceAmount.toFixed(2)}&nbsp;{result.currency}&nbsp;=&nbsp;
                </span>
                {result.targetAmount.toFixed(2)}&nbsp;PLN
            </>
        )}
    </div>
);