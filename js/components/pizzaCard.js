import { treureAlergens } from "./llistaAlergens.js";

class PizzasCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        const nombre = this.getAttribute("nombre");
        const vegetariana = this.getAttribute("vegetariana") === "true";
        const precio = this.getAttribute("precio");
        const imagen = this.getAttribute("imagen");
        const desc = this.getAttribute("desc");
        const alergens = this.getAttribute("alergens");
        
        const alergensHTML = treureAlergens(alergens);

        this.shadowRoot.innerHTML=`
        <style>
            .card{
                width: 350px;
                border: 6px solid #ddd;
                padding: 10px;
                text-align: center;
                flex-wrap: wrap;
                margin: 10px;
                border-radius: 8px;
                display: inline-block;
                vertical-align: top;
                box-shadow: 5px 5px 5px rgba(0,0,0,0.1);
                background-color: rgba(255, 255, 255, 0.5);
                

            }
            .alergens {
                display: flex;
                justify-content: center;
            }
            img{
                width: 150px;
                border-radius: 8px;
            }
            .llista-alergens {
                margin: 3px;
            }
            h3{
                font-size:35px
            }
            p{
                font-size:20px
            }
        </style>
        <div class="card">
                <h3>${nombre} ${vegetariana ? `<img src="./img/vege.webp" style="width: 40px;" />` : ""} </h3>
                <img src="${imagen}" alt="${nombre}">
                <p>${desc}</p>
                <div class="alergens">
                    ${alergensHTML}
                </div>
                <p><strong>${precio}€</strong></p>
            </div>
        `;
    }
    
}

customElements.define("pizza-card", PizzasCard);