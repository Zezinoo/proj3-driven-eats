let main_course
let drink
let dessert
let main_course_value
let drink_value
let dessert_value
let total_price


function selectMainCourse(element){
    let main_course_price = element.children[3];
    main_course_value = main_course_price.children[0].innerHTML
    main_course_value = main_course_value.replace(/[^\w,\/]+/g,'').replace('R','').replace(',','.') //Regex to remove non-digits
    main_course_value = Number(main_course_value)
    let tick = main_course_price.children[1];
    main_course = element.children[1].innerHTML.replace(/^\s+|\s+$/gm,'')//Regex to remove leading and trailing whitespace

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
        let clickedTick = clickedPrice.children[1]
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
    drink_value = drink_price.children[0].innerHTML
    drink_value = drink_value.replace(/[^\w,\/]+/g,'').replace('R','').replace(',','.')
    drink_value = Number(drink_value)
    let tick = drink_price.children[1];
    drink = element.children[1].innerHTML.replace(/^\s+|\s+$/gm,'')
 
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
        let clickedTick = clickedPrice.children[1]
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
    let tick = dessert_price.children[1];
    dessert = element.children[1].innerHTML.replace(/^\s+|\s+$/gm,'')
    dessert_value = dessert_price.children[0].innerHTML
    dessert_value = dessert_value.replace(/[^\w,\/]+/g,'').replace('R','').replace(',','.')
    dessert_value = Number(dessert_value)

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
        let clickedTick = clickedPrice.children[1]
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
        total_price = main_course_value + drink_value + dessert_value
        total_price = total_price.toFixed(2) 
        console.log(total_price)
        button.classList.remove('deactivated')
        button.classList.add('activated')
        button.children[0].innerHTML = 'Fechar pedido'
        let string = `https://wa.me/5521968761442?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0A-%20Prato:%20${main_course}%0A-%20Bebida:%20${drink}%0A-%20Sobremesa:%20${dessert}%0ATotal%20R$%20${total_price}`
        a_tag.href = string
    }
    else{
        button.classList.add('deactivated')
        button.classList.remove('activated')
        button.children[0].innerHTML = 'Selecione os 3 itens para fechar o pedido'
        a_tag.href = '#'
    }
}



