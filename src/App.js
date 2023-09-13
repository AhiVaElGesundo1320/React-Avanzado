
import './App.css';
// import InputConHookPer from './CustomHooks/InputConHookPer';
import AgregaReferenciaComp from './Hacer Referencia/AgregaReferenciaComp';
import CheckoutOnlineRed from './Hooks personalizados/CheckoutOnlineRed';
// import AccederOtrosNODOSComp from './Manipular el Dom con Ref/AccederOtrosNODOSComp';
import DesplazarceAUnElementoRef from './Manipular el Dom con Ref/DesplazarceAUnElementoRef';
import EnfocarTexto from './Manipular el Dom con Ref/EnfocarTexto';
import EffectoSecundario from './Use Effects/EffectoSecundario';
import EnfocarInputconClick from './Use Effects/EnfocarInputconClick';


function App() {
  return (
    <div className="App">
     <h1>Hola Mundo</h1>
     {/* <InputConHookPer /> */}
     <CheckoutOnlineRed />
     <EnfocarInputconClick />
     <EffectoSecundario />
     {/* <AccederOtrosNODOSComp /> */}
     <EnfocarTexto />
     <DesplazarceAUnElementoRef />
     <AgregaReferenciaComp />
     
    </div>
  );
}

export default App;
