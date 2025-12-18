import { countries } from "../../data/countries";

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="city">Ciudad</label>

        <input type="text" name="city" id="city" />
      </div>

      <div>
        <label htmlFor="city">País</label>

        <select name="" id="">
          <option value="">-- Seleccione un país --</option>
          {
            countries.map(
              country => (
                <option
                  key={country.code}
                  value={country.code}
                >
                  {
                    country.name
                  }
                </option>
              )
            )
          }
        </select>
      </div>

      <input type="submit" value='Consultar Clima' />
    </form>
  );
};
