$(document).ready(function() {

    $('form[name=delivery-details]').submit(function(e){
        $.post($(this).attr('action'), $(this).serialize() + '&' + userParameter());
        $('#form-container').hide();
        $("#thanks").removeClass('hidden');
        return false; 
    });     
});      
   
function userParameter() {
    return 'entry.1926467036=' + location.pathname;
}