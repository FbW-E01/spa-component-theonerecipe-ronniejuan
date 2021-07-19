// export default function Steps (){

// return <p>Stepsss</p>
// }


 
import './Steps.css';

function Steps() {
    return (
    <div className="Steps">
       <h2>Preparación</h2>
       <ul className="stepsList">
           <li><span>Ponga  una clara de huevo y pisco dentro de la liquadora.</span></li>
           <li><span>Agregue Jugo de limon  y cubitos de hielo. </span></li>
           <li><span>Sirva el contenido de la liquadora dentro de un vaso.  </span></li>
           <li><span>Corte los limones en rodajas agregelos al  vaso como decoracion y agregue una ramita de vainilla.</span></li>
           <li><span>Dejelo reposar un par de minutos y disfrute.</span></li>
       </ul>

    </div>
    )
}

export default Steps;