$(document).ready(function() {

    $('form[name=delivery-details]').submit(function(e){
        $.post($(this).attr('action'), $(this).serialize(), function(res){});
        $('#form-container').hide();
        $("#thanks").removeClass('hidden');
        return false; 
    });     
});         