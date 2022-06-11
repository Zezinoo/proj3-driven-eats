function selectMainCourse(element){
    let price = element.children[3];
    let tick = price.children[0];
    console.log(tick)
 
    const clickedBox = document.querySelector('.main_course .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        return null
    }
    if (clickedBox != null){
        let clickedPrice = clickedBox.children[3]
        let clickedTick = clickedPrice.children[0]
        clickedBox.classList.remove('selected')
        clickedTick.classList.toggle('hidden')
    }
    element.classList.add('selected')
    tick.classList.toggle('hidden')
    return
}

function selectDrink(element){
    let price = element.children[3];
    let tick = price.children[0];
    console.log(element)
    console.log(tick)
 
    const clickedBox = document.querySelector('.drink .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        return null
    }
    if (clickedBox != null){
        let clickedPrice = clickedBox.children[3]
        let clickedTick = clickedPrice.children[0]
        clickedBox.classList.remove('selected')
        clickedTick.classList.toggle('hidden')
    }
    element.classList.add('selected')
    tick.classList.toggle('hidden')
    return
}
function selectDessert(element){
    let price = element.children[3];
    let tick = price.children[0];
    console.log(element)
    console.log(tick)
 
    const clickedBox = document.querySelector('.dessert .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        return null
    }
    if (clickedBox != null){
        let clickedPrice = clickedBox.children[3]
        let clickedTick = clickedPrice.children[0]
        clickedBox.classList.remove('selected')
        clickedTick.classList.toggle('hidden')
    }
    element.classList.add('selected')
    tick.classList.toggle('hidden')
    return
}

let main_course = selectMainCourse();
let drink = selectDrink();
let dessert = selectDessert();

function activateOrder(){
    if(main_course && drink && dessert){
        let button = document.querySelector('select_menu')
        button.classList.add('selected')
    }
}