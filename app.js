const t_area = document.getElementById('container_txt');
const btn_encript = document.getElementById('btn_encript');
const btn_desencript = document.getElementById('btn_desencript');
const img_muneco = document.getElementById('muneco');
const mensajeFinal = document.getElementById('container_mensajefin');
const mensaje_find = document.getElementById('txt_mensaje_find');
const derecha = document.getElementById('container_txt_desencript');
//ajustar la altura del textarea automaticamente
t_area.addEventListener('input', function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight + 10) + 'px';
});
t_area.style.height = '36px';

let cambio = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]
btn_encript.addEventListener("click", () => 
    {
    const textiano = t_area.value.toLowerCase();
    function encriptar(nvotxxto)
    {
        for(let i=0; i < cambio.length; i++)
            {
                if(nvotxxto.includes(cambio[i][0]))
                    {
                        nvotxxto = nvotxxto.replaceAll(cambio[i][0], cambio[i][1]);
                    };
            };
        return nvotxxto;
    }
    const textoEncrip = encriptar(textiano);
    img_muneco.style.display = 'none';
    mensaje_find.style.display = 'none';
    derecha.classList.add("ajustar");
    mensajeFinal.innerHTML = textoEncrip;
}); 
btn_desencript.addEventListener("click", () => 
    {
    const textiano = t_area.value.toLowerCase();
    function desenencriptar(nvotxxto)
    {
        for(let i=0; i < cambio.length; i++)
            {
                if(nvotxxto.includes(cambio[i][1]))
                    {
                        nvotxxto = nvotxxto.replaceAll(cambio[i][1], cambio[i][0]);
                    };
            };
        return nvotxxto;
    }
        console.log(desenencriptar(textiano));
}); 
