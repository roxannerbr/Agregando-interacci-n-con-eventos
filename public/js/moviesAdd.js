window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', (e)=>{
        titulo.style.color='brown'
    })
    titulo.addEventListener('mouseleave', (e)=>{
        titulo.style.color='green'
    })

    let $ = (e) => document.querySelector(e)

    let inputTitulo= $('#titulo')
    
    let palabra=[]
    inputTitulo.addEventListener('keypress',(e)=>{
        let letras= e.key
        palabra.push(letras)
        if(palabra[6]==='o' || palabra[6]=== 'O'){
            palabra=[]
            alert('SECRETO MAGICO')
        }else if(palabra[5]==='t' || palabra[5]=== 'T'){
        }else if(palabra[4]==='e' || palabra[4]=== 'E'){
        }else if(palabra[3]==='r' || palabra[3]=== 'R'){
        }else if(palabra[2]==='c' || palabra[2]=== 'C'){
        }else if(palabra[1]==='e' || palabra[1]=== 'E'){
        }else if(palabra[0]==='s' || palabra[0]=== 'S'){
        }else{
            palabra=[]
        }  
        console.log(palabra);     

    })
}