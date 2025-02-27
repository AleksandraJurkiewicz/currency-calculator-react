import { ResultAmount, ResultText } from "./styled";

export const Result = ({ result }) => (
    <ResultText>
        {!!result && (
            <>
                Twoja kwota:
                <ResultAmount>
                    {result.targetAmount.toFixed(2)}&nbsp;zł
                </ResultAmount>
            </>
        )}
    </ResultText>
);