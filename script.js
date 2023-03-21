
// função onde faz o menu aparecer em celulares.
function MobileMenuAparecer(){
    let menu = document.querySelector(".mobile-menu");
    if (menu.classList.contains('open')){
        menu.classList.remove('open');
        document.querySelector('.mobile-icon').src = "https://cdn.discordapp.com/attachments/739575553253834754/1083605086443425872/menu_white_36dp.svg"
       
    }
    else{
        menu.classList.toggle('open')
        document.querySelector('.mobile-icon').src = "https://cdn.discordapp.com/attachments/739575553253834754/1083605086145626112/close_white_36dp.svg"
    }
}