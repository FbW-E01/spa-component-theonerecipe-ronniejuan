// export default function Ingredients (){

// return <ul>
//     <li>Korn</li>
//     <li>Milk</li>
//     <li>Blut</li>
// </ul>
// }



import './IngredientsList.css';

function IngredientsList() {
    return (
    <div className="ingredients">
       <h2>Ingredientes</h2>
       <div className="ingredientsList">
         <ul>
           <li>Pisco(5 cl)</li>
           <li>Zumo de limon(10 cl)</li>
           <li>limon o lima (2 piezas)</li>
           <li>Un huevo (1 pieza)</li>
           <li>Vainilla (1 ramita)</li>
           <li>Hielo</li>
       </ul>

       </div>
       

    </div>
    )
}

export default IngredientsList;