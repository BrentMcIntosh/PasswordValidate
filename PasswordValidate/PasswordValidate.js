
$(function () {

    function validate(password, checkbox, criteria) {

        var okay = false;

        if (criteria.test(password)) {
            
            checkbox.removeClass("unchecked").addClass("checked");

            okay = true;
        }
        else {
            checkbox.removeClass("checked").addClass("unchecked");
        }

        return okay;
    }

    $('#pass').keyup(function () {

        var thePassword = $('#pass').val();

        validate(thePassword, $("#cap"), /[A-Z]/);
        validate(thePassword, $("#low"), /[a-z]/);
        validate(thePassword, $("#num"), /[0-9]/);
        validate(thePassword, $("#sym"), /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);

        if (thePassword.length > 7) {
            $("#len").removeClass("unchecked").addClass("checked");
        }
        else {
            $("#len").removeClass("checked").addClass("unchecked");
        }
    });

})