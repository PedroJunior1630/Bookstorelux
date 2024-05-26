function trocarFormulario(tipo){
    document.getElementById('entrar').classList.remove('active');
    document.getElementById('registro').classList.remove('active');
    document.getElementById(tipo).classList.add('active');
}
