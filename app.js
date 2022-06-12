let main_course
let drink
let dessert
let main_course_price
let drink_price
let dessert_price


function selectMainCourse(element){
    main_course_price = element.children[3];
    let tick = main_course_price.children[0];
    main_course = element.children[1].innerHTML
 
    const clickedBox = document.querySelector('.main_course .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        main_course = null
        console.log("mc")
        activateOrder()
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
    activateOrder()
    return element.children[1]
}
function selectDrink(element){
    drink_price = element.children[3];
    let tick = drink_price.children[0];
    drink = element.children[1].innerHTML
 
    const clickedBox = document.querySelector('.drink .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        drink = null
        console.log("drink")
        activateOrder()
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
    activateOrder()
    return element.children[1]
}
function selectDessert(element){
    dessert_price = element.children[3];
    let tick = dessert_price.children[0];
    dessert = element.children[1].innerHTML
 
    const clickedBox = document.querySelector('.dessert .selected')
    if (element.classList.contains('selected')){
        tick.classList.toggle('hidden')
        element.classList.remove('selected')
        dessert = null
        console.log("dessert")
        activateOrder()
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
    activateOrder()
    return element.children[1]
}
function activateOrder(){
    let button = document.querySelector('.select_menu .button')
    let a_tag = document.querySelector('.link')
    if(main_course && drink && dessert){
        button.classList.remove('deactivated')
        button.classList.add('activated')
        button.children[0].innerHTML = 'Fechar pedido'
        a_tag.href = 'https://www.google.com/'
    }
    else{
        button.classList.add('deactivated')
        button.classList.remove('activated')
        button.children[0].innerHTML = 'Selecione os 3 itens para fechar o pedido'
        a_tag.href = '#'
    }
}

