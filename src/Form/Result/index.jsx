import { ResultText } from "./styled";

export const Result = ({ result }) => (
    <ResultText>
        {!!result && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;=&nbsp;
                {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
            </>
        )}
    </ResultText>
);