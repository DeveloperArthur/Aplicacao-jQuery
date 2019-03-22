$(function(){
    $('#azul').click(function(){
       $('p').css("color", "blue");
       $('#mensagem')
            .text("Cor alterada para azul")
            .css({color: 'blue', border: '1px solid blue'})
            .delay(1000)
            .fadeOut('fast');
    });
    
    $('#vermelho').click(function(){
       $('p').css("color", "red");
       $('#mensagem')
            .text("Cor alterada para vermelho")
            .css({color: 'red', border: '1px solid red'})
            .delay(1000)
            .fadeOut('fast');
    });
});

