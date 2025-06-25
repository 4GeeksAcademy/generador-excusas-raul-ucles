
window.onload = function() {
  
    let who = ['El perro', 'Mi coche', 'Mi hermano', 'Un elefante'];

    let action = ['se comió', 'se rompió', 'murió', 'saltó en paracaídas'];

    let what = ['los deberes', 'cantando', 'volando','leyendo'];

    let when = ['en la comunión', 'en la boda de mi madre', 'mientras entrenaba', 'cuando tenía 13 años'];

    sust = who[Math.floor(Math.random() *who.length)] 
    accion = action[Math.floor(Math.random() *action.length)]
    que = what[Math.floor(Math.random() *what.length)]
    cuando= when[Math.floor(Math.random() *when.length)]

    frase = sust + ' ' + accion + ' ' + que + ' ' + cuando 
    document.querySelector('#excusa').innerHTML = frase
};
