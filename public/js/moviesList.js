window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    let $ = (e) => document.querySelector(e)

    let logo= $('figure')
    let menu= $('#menu')

    logo.addEventListener('mouseover', (e)=>{
       body.style.backgroundColor='#7f7f7f'
       body.classList.add('fondoMoviesList')
    })

    logo.addEventListener('mouseleave', (e)=>{
        body.style.backgroundColor='#fff'
        body.classList.remove('fondoMoviesList')
     })

}