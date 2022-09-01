// Fichero src/components/App.js
import { useState } from 'react';
import Preview from '../components/Preview';
import InputGroupText from './InputGroupText';
import '../styles/App.scss';
import InputGroupSelect from './InputGroupSelect';
import InputGroupRadio from './InputGroupRadio';
import Button from './Button';

//Declaramos un objeto para que sea un codigo más limpio y para no repetir tanto código con los radio buttons. Se puede poner esta contante fuera de App porque es un valor que no va a cambiar. Si quiero agregar otro método, lo agrego a este objeto y lo pintará directamente
const PAYMENT_METHODS = {
  creditCard: 'Tarjeta de crédito',
  cash: 'Efectivo',
  cashOnDelivery: 'Contra reembolso',
  // paypal: 'Cuenta de PayPal'
};
const App = () => {
  // Estados del componente
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('España peninsular'); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState('');
  const [legalTerms, setLegalTerms] = useState(false);

  // Eventos
  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (ev) => {
    setPaymentType(ev.target.value);
  };

  const handleLegalTerms = (ev) => {
    // Como lo que nos interesa es si está activo o no, guardamos el checked
    setLegalTerms(ev.target.checked);
  };

  const handleResetButton = () => {
    // Ponemos los mismos valores que hemos usado arriba en los useState
    setName('');
    setEmail('');
    setRegion('España peninsular');
    setPaymentType('');
    setLegalTerms(false);
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log('Enviando datos al servidor...');
  };

  // Funciones que nos ayudan a renderizar

  const isValidForm = () => {
    // El formulario solo es válido cuando los inputs de tipo texto no estén vacíos, cuando se haya marcado un tipo de pago y cuando los términos legales sean true
    // También podríamos comprobar que el email tiene el formato correcto, pero no queremos complicar este ejemplo
    if (
      name !== '' &&
      email !== '' &&
      paymentType !== '' &&
      legalTerms === true
    ) {
      return true;
    } else {
      return false;
    }
  };

  //Este es el HTML que quiero generar y lo haré con un .map pero map solo funciona con arrays y la variable que cree arriba de PAYMENT_METHODS es un objeto. Se usa el método Object.keys (devuelve un array con todos los nombres de los objetos)
  const paymentMethodsHTML = Object.keys(PAYMENT_METHODS).map(
    (payMethodKey) => (
      <InputGroupRadio
        key={payMethodKey}
        paymentKey={payMethodKey}
        text={PAYMENT_METHODS[payMethodKey]}
        paymentType={paymentType}
        handlePaymentType={handlePaymentType}
      />
    )
  );

  return (
    <div>
      <form className="form" onSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>
        <div className="form">
          {/* name */}
          <InputGroupText
            inputValue={name}
            handleName={handleName}
            className="input-text"
            title="Escribe un nombre:"
            type="text"
            name="name"
            id="name"
            placeholder="María García"
            labelFor="name"
          />
          {/* email */}
          <InputGroupText
            inputValue={email}
            handleName={handleEmail}
            className="input-text"
            title="Escribe un email:"
            type="email"
            name="email"
            id="email"
            placeholder="mariagarcia@gmail.com"
            labelFor="email"
          />

          {/* region */}
          <InputGroupSelect
            inputValue={region}
            handleRegion={handleRegion}
            classNameLabel="label-text"
            classNameSelect="input-select"
            title="Indica tu región:"
            name="region"
            id="region"
            labelFor="region"
          />
          {/* payment type */}
          <label className="label-text">Indica tu método de pago</label>
          {paymentMethodsHTML}

          {/* legal terms */}
          <div className="input-group-checkbox">
            <label className="label-check" htmlFor="legalTerms">
              Debes aceptar nuestros términos legales para completar la compra:
            </label>
            {/* Este radio solo debe aparecer activo cuando legalTerms sea true */}
            <input
              type="checkbox"
              name="legalTerms"
              id="legalTerms"
              checked={legalTerms}
              onChange={handleLegalTerms}
            />
          </div>
        </div>
        <Preview
          name={name}
          email={email}
          region={region}
          legalTerms={legalTerms}
          paymentType={paymentType}
        />

        {/* reset */}
        {/* Este botón debe estar inhabilitado mientras el formulario no sea válido */}

        <Button
          text="Enviar"
          className="button"
          disabled={isValidForm() === false}
        />

        {/* send */}

        <Button
          text="Limpiar el formulario"
          className="button reset"
          disabled={false}
          handleResetButton={handleResetButton}
        />
      </form>
    </div>
  );
};

export default App;
