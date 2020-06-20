let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let n3 = document.querySelector('#n3')
let certo = document.querySelector('#certo')


n1.onclick = function () {

    n1.classList.remove('text-light')

    n1.classList.add('errado')
    
}


n2.onclick = function () {

    n2.classList.remove('text-light')

    n2.classList.add('errado')
    
}


n3.onclick = function () {

    n3.classList.remove('text-light')

    n3.classList.add('errado')
    
}


certo.onclick = function () {

    certo.classList.remove('text-light')

    certo.classList.add('certo')

    setTimeout(() => {

        window.location = 'q8.html'
        
    }, 1000);
    
}