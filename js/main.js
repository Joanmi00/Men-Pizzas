import './components/pizzaCard.js';

fetch('https://pizza-rest-server-production.up.railway.app/api/pizzeria/pizzes')
    .then(response => response.json())  
    .then(data => mostrarPizzas(data.records))  
    .catch(error => console.error("Error:", error));


function mostrarPizzas(pizzas) {
    const menu = document.getElementById("menu");
    menu.innerHTML = "";

    pizzas.forEach(pizza => {
        let imagenPizza;
        if (pizza.img){ //If imagen de la pizza es nulo
            imagenPizza = `https://pizza-rest-server-production.up.railway.app${pizza.img}`;
            }else{imagenPizza=`./img/cara.png`;
                }
        
        const pizzaElemento = document.createElement("pizza-card");
        pizzaElemento.setAttribute("nombre", pizza.nom);
        pizzaElemento.setAttribute("vegetariana", pizza.vegetariana);
        pizzaElemento.setAttribute("precio", pizza.preu);
        pizzaElemento.setAttribute("imagen", imagenPizza);
        pizzaElemento.setAttribute("desc", pizza.desc);

        menu.appendChild(pizzaElemento);
    });
}
