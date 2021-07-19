// // import ReactDOM from 'react-dom';
//   import Footer from './Footer'
//   import Title from './Title'
//   import Steps from './Steps'
//   import IngredientsList from './IngredientsList'
//   import './Style.css'// remember

// function App() {
//   return <div className="App">
//     <Title />
//     <IngredientsList />
//     <Steps />
//     <Footer />
//     Coming soon: an IMPRESSIVE recipe website!!! 
//   </div>;
// }

// export default App;


import './App.css';
import Heading from './Heading.jsx';
import IngredientsList from './IngredientsList.jsx';
import Steps from './Steps.jsx';
import Footer from './Footer.jsx';


function App() {
  return <div className="App">
        <Heading />
        <IngredientsList />
        <Steps />
        <Footer />

 </div>;
}

export default App;