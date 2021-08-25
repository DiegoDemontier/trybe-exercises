import React from 'react';

class FieldSet extends React.Component {
  render() {
    return (
      <fieldset>
        <form>
          <label>
            Nome:
            <input type="text" name="name" required maxLength="40" />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" required maxLength="50" />
          </label>
          <label>
            CPF:
            <input type="text" name="cpf" required maxLength="11" />
          </label>
          <label>
            Endereço:
            <input type="text" name="endereço" required maxLength="200" />
          </label>
        </form>
      </fieldset>
    )
  }
}

export default FieldSet;