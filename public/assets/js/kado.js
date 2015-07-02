
$(document).ready(function() {
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
                    message: 'The First name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The First name is required and can\'t be empty'
                        }
                    }
                },
                'entry.548265541': {
                    message: 'The Surname is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The Surname is required and can\'t be empty'
                        }
                    }
                },
                'entry.1091746689': {
                    message: 'The Property number and street is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The Property number and street is required and can\'t be empty'
                        }
                    }
                },
                'entry.15437857': {
                    message: 'The Post town is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The Post town is required and can\'t be empty'
                        }
                    }
                },
                'entry.1075178930': {
                    message: 'The Postcode is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The Postcode is required and can\'t be empty'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');
                    
            $.post($(this).attr('action'), $(this).serialize() + '&' + userParameter());
            $('#form-container').hide();
            $("#thanks").removeClass('hidden');
        });
});

function userParameter() {
    return 'entry.1926467036=' + location.pathname;
}