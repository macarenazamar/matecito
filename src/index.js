//Punto de entrada a mi app
import React from 'react'; 
//importa la libreria, crea la contastante React y la ejecuta al mismo tiempo
import ReactDOM from 'react-dom/client'; 
//Dónde vamos a renderizar esa app? es otra libreria que me ayuda a renderizar la aplicación de React al Dom
//Con React solo (linea1) podemos crear componentes, organizar el layout, etc pero no lo podemos renderizar en el Dom
//En nuestro caso es un proyecto web por eso usamos ReactDom, si es una app para celular usaríamos React Native
import App from './App' //ruta relativa a mi proyecto, ya no es una libreria cuando lo hago desde export dafaul
// import App, (Otra) from './App' El App es por defaul y el Otra es nombrado


//const App = () => "Hola Mundo"; //me llevo esto al archivo App.js 
//otra manera es 
// const App = () => {
//   return "Hola Mundo";
// };



const root = ReactDOM.createRoot(document.getElementById('root'));
//Le estamos diciendo a la app: se va a empezar a leer a partir de id = root
//El ReactDOM trae un método que es createRoot, donde le indicamos el punto de entrada
//El document.getElementById sale del index.html Se lo podría llamar de otra manera, puede ser .getElementByClassName
//También se puede cambar el id, el root

//FORMA DE RENDERIZAR EN EL DOM ALGUNO DE MIS COMPONENTES:
root.render( 
  //empezamos a renderizar la app con el método .render
  //renderizamos dentro del id = root a App, App definido antes
  //COMPONENTE: App COMIENZA CON MAYUSCULA
  //TODA NUESTRA APPLICACION SE VA A DESARROLLAR DENTRO DE App!!!
  <App /> //forma de invocar a la función/COMPONENTE antes en javascript vanilla era:
  //const foo = () =>{

  //}
  //foo()
);
//RESUMIENDO: SITAXIS PARA LLAMAR A NUESTROS COMPONENTES
// const App = () => "Hola Mundo";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <App />
// );
// Sin embargo voy a crear el archivo App.js para crear mi poryecto dentro de cada componente esto se hace con el import y export


