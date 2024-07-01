const t_area = document.getElementById('container_txt');
//ajustar la altura del textarea automaticamente
t_area.addEventListener('input', function(){
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight + 10) + 'px';
});
t_area.style.height = '36px';