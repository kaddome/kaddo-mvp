
$(document).ready(function() {

    $("#firstName").change(function(){
        reportEventToGA('firstNameEntered', 'user has entered the firstName field')
    });		
    
    $("#surname").change(function(){
        reportEventToGA('surnameEntered', 'user has entered the surname field')			
    });
    
    $("#town").change(function(){
        reportEventToGA('townEntered', 'user has entered the town field')			
    });
    
    $("#propertyNumberAndAddress").change(function(){
        reportEventToGA('propertyNumberAndAddressEntered', 'user has entered the property number and address field')			
    });
    
    $("#postcode").change(function(){
        reportEventToGA('postcodeEntered', 'user has entered the postcode field')
    });
    
    $(".btn.btn-primary").click(function(){
        reportEventToGA('deliveryDetailsFormSubmitted', 'user has submitted the DD form')
    });
		
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
                firstName: {
                    validators: { notEmpty: notEmptyConfig }
                },
                surname: {
                    validators: { notEmpty: notEmptyConfig }
                },
                town: {
                    validators: { notEmpty: notEmptyConfig }
                },
                propertyNumberAndAddress: {
                    validators: {  notEmpty: notEmptyConfig }
                },
                postcode: {
                    validators: {
                        notEmpty: notEmptyConfig ,
                        zipCode: {
                            country: 'GB',
                            message: 'Is not a valid post code'
                        }
                    }
                }
            }
        })
        .on('success.form.bv', function(e) {
            e.preventDefault();
            var $form = $(e.target);
            var bv = $form.data('bootstrapValidator');
                    
            $.post($(this).attr('action'), userParameters());
            $('#form-container').hide();
            $("#thanks").removeClass('hidden');
        });
});

function userParameters() {
    var data = window.atob(location.pathname.substring(1));
    var parameters = data.split(',');
    
    var userParameters =  'entry.1926467036=\'' + parameters[0];
    if(parameters.length > 1){
        userParameters = userParameters + '&entry.1904787477=' + parameters[1];
    }
    return userParameters;
}

function reportEventToGA(eventAction, eventLabel){
    ga('send', 
            'event', 
            'DeliveryDetailsForm7', 
            eventAction, 
            eventLabel, {
            page: 'Delivery Details Form - LOCALHOST - TESTING'
    });
}