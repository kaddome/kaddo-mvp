$(document).ready(function() {

    $('form[name=deliveryDetails]').submit(function(e){
        $.post($(this).attr('action'), $(this).serialize(), function(res){});
        $("#big-form").hide();
        $("#thanks").removeClass('hidden');
        return false; 
    });     
});         