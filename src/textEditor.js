document.getElementById('bold').addEventListener('click', function(){
const field = document.getElementById('area')
if(field.classList.contains('font-extrabold')){
    field.classList.remove('font-extrabold')
}else
field.classList.add('font-extrabold')
})

document.getElementById('italic').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('italic')){
        field.classList.remove('italic')
    }else
    field.classList.add('italic')
})

document.getElementById('underline').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('underline')){
        field.classList.remove('underline')
    }else
    field.classList.add('underline')
})

document.getElementById('left').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('text-right')){
        field.classList.remove('text-right')
    }
    if(field.classList.contains('text-center')){
        field.classList.remove('text-center')
    }
    if(field.classList.contains('text-justify')){
        field.classList.remove('text-justify')
    }
    if(field.classList.contains('text-left')){
        field.classList.remove('text-left')
    }else
    field.classList.add('text-left')
})

document.getElementById('center').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('text-right')){
        field.classList.remove('text-right')
    }
    if(field.classList.contains('text-left')){
        field.classList.remove('text-center')
    }
    if(field.classList.contains('text-justify')){
        field.classList.remove('text-justify')
    }
    if(field.classList.contains('text-center')){
        field.classList.remove('text-center')
    }else
    field.classList.add('text-center')
})

document.getElementById('right').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('text-left')){
        field.classList.remove('text-right')
    }
    if(field.classList.contains('text-center')){
        field.classList.remove('text-center')
    }
    if(field.classList.contains('text-justify')){
        field.classList.remove('text-justify')
    }
    if(field.classList.contains('text-right')){
        field.classList.remove('text-right')
    }else
    field.classList.add('text-right')
})

document.getElementById('justified').addEventListener('click', function(){
    const field = document.getElementById('area')
    if(field.classList.contains('text-left')){
        field.classList.remove('text-right')
    }
    if(field.classList.contains('text-center')){
        field.classList.remove('text-center')
    }
    if(field.classList.contains('text-right')){
        field.classList.remove('text-right')
    }
    if(field.classList.contains('text-justify')){
        field.classList.remove('text-justify')
    }else
    field.classList.add('text-justify')
})

document.getElementById('font').addEventListener('click', function(){
    const field = document.getElementById('area')
    const val = document.getElementById('font').value+'px'
    field.style.fontSize = val

})

document.getElementById('case').addEventListener('click', function(){
    const field = document.getElementById('area')

    if(field.classList.contains('uppercase')){
        field.classList.remove('uppercase')
        field.classList.add('lowercase')
        return
    }else if(field.classList.contains('lowercase')){
        field.classList.remove('lowercase')
        field.classList.add('uppercase')
        return
    }
    field.classList.add('uppercase')
})

document.getElementById('color').addEventListener('click', function(){
    const field = document.getElementById('area')
    const val = document.getElementById('color').value
    field.style.color = val


})