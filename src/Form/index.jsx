import { useState } from "react";
import { Result } from "./Result";
import { ExchangeRate, Button, ButtonWrapper, Amount, AmountWrapper, Converter, Currency, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency].value;

        setResult({
            targetAmount: amount * rate,
        });
    }

    const [currency, setCurrency] = useState("PLN");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return (
        <Converter onSubmit={onSubmit}>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Poczekaj chwilkę, ładuję kursy walut.
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak.
                        </Failure>
                    ) : (
                        <>
                            Wybierz walutę
                            <Currency
                                value={currency}
                                onChange={({ target }) => setCurrency(target.value)}
                            >
                                {Object.keys(ratesData.rates).map(((currency) => (
                                    <option
                                        key={currency}
                                        value={currency}
                                    >
                                        {currency}
                                    </option>
                                )))}
                            </Currency>
                            <AmountWrapper>
                                <label>
                                    Kwota w walucie:
                                    <Amount
                                        value={amount}
                                        onChange={({ target }) => setAmount(target.value)}
                                        type="number"
                                        name="value"
                                        step="0.01"
                                        min="0.01"
                                        required
                                    />
                                </label>
                            </AmountWrapper>
                            <ButtonWrapper>
                                <Button>Przelicz!</Button>
                            </ButtonWrapper>
                            <ExchangeRate>
                                Kursy walut na dzień 30.03.2025:
                            </ExchangeRate>
                            <Result result={result} />
                        </>
                    )
                )
            }
        </Converter>
    );
};