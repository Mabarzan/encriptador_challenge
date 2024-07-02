const t_area = document.getElementById('container_txt');
const btn_encript = document.getElementById('btn_encript');
//ajustar la altura del textarea automaticamente
t_area.addEventListener('input', function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight + 10) + 'px';
});
t_area.style.height = '36px';

let cambio = [
    {letra: 'a', reemplazo: 'ai'},
    {letra: 'e', reemplazo:'enter'},
    {letra:'i', reemplazo:'imes'},
    {letra:'o', reemplazo: 'ober'},
    {letra:'u', reemplazo: 'ufat'}
]
btn_encript.addEventListener("click", () => 
    {
        let mensajOriginal = t_area.value.toLowerCase();
        let mensajEncriptado= mensajOriginal.replace(/a|e|i|o|u/g, function(match){
            let reemplazo = cambio.find(item => item.letra === match);
            return reemplazo ? reemplazo.reemplazo : match;

    });
    t_area.value = mensajEncriptado;
    console.log(mensajOriginal);
    console.log(mensajEncriptado);
}); 
