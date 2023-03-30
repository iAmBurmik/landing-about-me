  
  /* Socialmedia-icons
===================*/
const changeIcons = (enter, leave, name) => {
    name.addEventListener('mouseenter', function(){
        this.src = enter;
    })
    name.addEventListener('mouseleave', function(){
        this.src = leave;
    })
}

var icon1 = document.querySelector('.imgXL.one');
changeIcons('img/yellow-mail.png', 'img/mail2.png', icon1);


var icon2 = document.querySelector('.imgXL.two');
icon2.addEventListener('mouseenter', function(){
    this.src = 'img/yellow-tel.png';
})

icon2.addEventListener('mouseleave', function(){
    this.src = 'img/tel2.png';
})


var icon3 = document.querySelector('.imgXL.three');
icon3.addEventListener('mouseenter', function(){
    this.src = 'img/yellow-discord.png';
})

icon3.addEventListener('mouseleave', function(){
    this.src = 'img/discord.png';
})


var icon4 = document.querySelector('.imgXL.four');
icon4.addEventListener('mouseenter', function(){
    this.src = 'img/yellow-facebook.png';
})

icon4.addEventListener('mouseleave', function(){
    this.src = 'img/facebook.png';
})


var icon5 = document.querySelector('.imgXL.five');
icon5.addEventListener('mouseenter', function(){
    this.src = 'img/yellow-instagram.png';
})

icon5.addEventListener('mouseleave', function(){
    this.src = 'img/instagram.png';
})