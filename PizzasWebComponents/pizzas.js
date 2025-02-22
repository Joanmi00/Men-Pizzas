class PizzasCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        const nombre = this.getAttribute("nombre");
        const vegetariana = this.getAttribute("vegetariana")
        const precio = this.getAttribute("precio");
        const imagen = this.getAttribute("imagen");
        const desc = this.getAttribute("desc");
            // renderizado del contenido
        this.shadowRoot.innerHTML=`
        <style>
            .card{
                border: 6px solid #ddd;
                padding: 1px;
                text-align: center;
                margin: 10px;
                border-radius: 8px;
                box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
            }
            img{
                width: 150px;
                border-radius: 8px;
            }
            h3{
            font-size:25px
            }
        </style>
        <div class="card">
                <h3>${nombre} ${vegetariana ? `<img src="vege.webp" style="height: 40px; width: 40px;" />` : ""} </h3>
                <img src="${imagen}" alt="${nombre}">
                <p>${desc}</p>
                <p><strong>${precio}€</strong></p>
            </div>
        `;
    }
}

customElements.define("pizza-card", PizzasCard);

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
            }else{imagenPizza=`cara.png`;
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
