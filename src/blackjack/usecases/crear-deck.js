import _ from 'underscore';


/**
 * Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Ejemplo ['A','J','Q','K']; 
 * @returns {Array} regresa/retorna un nuevo deck de cartas
 */


export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if( !tiposDeCarta || tiposDeCarta === 0) 
        throw new Error('tiposDeCarta es obligatorio como un arreglo de String');
    
    if( !tiposEspeciales || tiposEspeciales === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de String');


    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}

export default crearDeck;