import cheese from './cheese.js';
import utilities from '../helpers/utilities.js'

const createFinalOrder = (items) => {
    let domstring2 = '';
    for(let i = 0; i < items.length; i++){
        domstring2 += `<h2>${items[i].name}</h2>`;
    }
    utilities.printToDom('final-order', domstring2);
};

const createOrderEvent= () => {
    const selectedCheeses = cheese.getSelectedCheeses();
    createFinalOrder(selectedCheeses);
};

const printOrderButton = () => {
    const domstring = '<button id="order-button" class="btn btn-success">Make Pizza</button>'
    utilities.printToDom('final-order', domstring);
    document.getElementById("order-button").addEventListener('click', createOrderEvent)
};

export default { printOrderButton };