import "./style.css";

const Form = () => (
  <form className="form">
    Wybierz walutę:
    <select name="currency">
      <option className="form__option" value="dolar">Dolar</option>
      <option className="form__option" value="euro">Euro</option>
      <option className="form__option" value="funt">Funt</option>
    </select>

    <div className="form__field--first">
      <label>
        Kwota:
        <input type="number" className="form__input" name="value" step="0.01" min="0.01" required />
      </label>
    </div>
    <div className="form__field--second">
      <button className="form__button">Przelicz!</button>
    </div>
  </form>
)

export default Form;