
$(document).ready(function() {
    var notEmptyConfig = {message: 'Is required and can\'t be empty'};
    $('#delivery-details')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                'entry.1721080211': {
                    validators: { notEmpty: notEmptyConfig }
                },
                'entry.548265541': {
                    validators: { notEmpty: notEmptyConfig }
                },
                'entry.1091746689': {
                    validators: { notEmpty: notEmptyConfig }
                },
                'entry.15437857': {
                    validators: {  notEmpty: notEmptyConfig }
                },
                'entry.1075178930': {
                    validators: {
                        notEmpty: notEmptyConfig ,
                        zipCode: {
                            country: 'GB',
                            mekssage: 'Is not a valid post code'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');
                    
            $.post($(this).attr('action'), $(this).serialize() + '&' + userParameters());
            $('#form-container').hide();
            $("#thanks").removeClass('hidden');
        });
});

function userParameters() {
    var data = window.atob(location.pathname.substring(1));
    var parameters = data.split(',');
    
    var userParameters =  'entry.1926467036=' + parameters[0];
    if(parameters.length > 1){
        userParameters = userParameters + '&entry.1904787477=' + parameters[1];
    }
    return userParameters;
}