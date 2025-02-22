export function treureAlergens(alergens){
    let alergensHTML = '';

        alergens.split(",").forEach(llistaAlergens => {
            alergensHTML += `
            <div class = "llista-alergens">
                <img src="./img/${llistaAlergens}.png" style="height: 30px; width: 30px;"/>
            </div>`;
        });
     return alergensHTML;
}