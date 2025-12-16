function toggleMode(){
    const body = document.body
    var img = document.querySelector('#profile img')
    if(body.classList.contains('light')){
        body.classList.remove('light')
        img.setAttribute("src", "assets/foto perfil circular dark.png")
    }
    else{
        body.classList.add('light')
        img.setAttribute("src", "assets/foto perfil circular light.png")
    }
}