$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    $('.discovermore').on('click', function(){
        $('.block2').jump();
    });
    
    $('.block2').on('mouseenter' , function(){
        $('.block21').css('transform', 'translate(0)');
    });
    
});