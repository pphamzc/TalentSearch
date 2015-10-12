var FormValidation = function () {

    var handleValidation1 = function() {
        // for more info visit the official plugin documentation: 
            // http://docs.jquery.com/Plugins/Validation

            var form1 = $('#form_sample_1');
            var error1 = $('.alert-error', form1);
            var success1 = $('.alert-success', form1);

            form1.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
				 rules: {
                    name: { minlength: 2, required: true },
                    email: { required: true, email: true },
                    number: { required: true, number: true },
                    category: { required: true },
																						accepteula: { required: true,},
																					 text1: { minlength: 2,  required: true},
																					 text2: { minlength: 2,  required: true},
																					 text3: { minlength: 2,  required: true},
																					 text4: { minlength: 2,  required: true},
																					 text5: { minlength: 2,  required: true},
																					 text6: { minlength: 2,  required: true},
																					 text7: { minlength: 2,  required: true},
																					 text8: { minlength: 2,  required: true},
																					 text9: { minlength: 2,  required: true},
																					 text10: { minlength: 2,  required: true},
																					 text11: { minlength: 2,  required: true},
																					 text12: { minlength: 2,  required: true},
																					 text13: { minlength: 2,  required: true},
																					 text14: { minlength: 2,  required: true},
																					 text15: { minlength: 2,  required: true},
																					 select1: {required: true},
																					 select2: {required: true},
																					 select3: {required: true},
																					 select4: {required: true},
																					 select5: {required: true},
																					 select6: {required: true},
																					 select7: {required: true},
																					 select8: {required: true},
																					 select9: {required: true},
																					 select10: {required: true},
																					 select11: {required: true},
																					 select12: {required: true},
																					 select13: {required: true},
																					 select14: {required: true},
																					 select15: {required: true},
                },
																				
             	  
                invalidHandler: function (event, validator) { //display error alert on form submit              
                    success1.hide();
                    error1.show();
                    App.scrollTo(error1, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $element.closest('.help-inline')
					        	 .removeClass('ok'); // display OK icon
                    $element.closest('.control-group')
				 				.removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $element.closest('.control-group')
								.removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    label
                       .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                       .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                },

                submitHandler: function (form) {
                    success1.show();
                    error1.hide();
                },


//added june19 tooltip validation
			    showErrors: function(errorMap, errorList) {
 
          // Clean up any tooltips for valid elements
          $.each(this.validElements(), function (index, element) {
              var $element = $(element);
 
              $element.data("title", "") // Clear the title - there is no error associated anymore
                .removeClass("error")
                 .tooltip("destroy")				  
				 .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                 .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group

          });
 
          // Create new tooltips for invalid elements
          $.each(errorList, function (index, error) {
              var $element = $(error.element);
 
              $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                  .data("title", error.message)
                  .addClass("error")
                  .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
          });
      },
//end tooltip validation

            });
    }


   var handleValidation2 = function() {
        // for more info visit the official plugin documentation: 
        // http://docs.jquery.com/Plugins/Validation


            var form2 = $('#form_sample_2');
            var error2 = $('.alert-error', form2);
            var success2 = $('.alert-success', form2);

            //IMPORTANT: update CKEDITOR textarea with actual content before submit
            form2.on('submit', function() {
                for(var instanceName in CKEDITOR.instances) {
                    CKEDITOR.instances[instanceName].updateElement();
                }
            })

            form2.validate({
                errorElement: 'span', //default input error message container
                errorClass: 'help-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                ignore: "",
                rules: {
                    name: {
                        minlength: 2,
                        required: true
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    category: {
                        required: true
                    },
                    options1: {
                        required: true
                    },
                    options2: {
                        required: true
                    },
                    occupation: {
                        minlength: 5,
                    },
                    membership: {
                        required: true
                    },
                    service: {
                        required: true,
                        minlength: 2
                    },
                    editor1: {
                        required: true
                    },
                    editor2: {
                        required: true
                    }
                },

                messages: { // custom messages for radio buttons and checkboxes
                    membership: {
                        required: "Please select a Membership type"
                    },
                    service: {
                        required: "Please select  at least 2 types of Service",
                        minlength: jQuery.format("Please select  at least {0} types of Service")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "education") { // for chosen elements, need to insert the error after the chosen container
                        error.insertAfter("#form_2_education_chzn");
                    } else if (element.attr("name") == "membership") { // for uniform radio buttons, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_2_membership_error");
                    } else if (element.attr("name") == "editor1" || element.attr("name") == "editor2") { // for wysiwyg editors
                        error.insertAfter($(element.attr('data-error-container'))); 
                    } else if (element.attr("name") == "service") { // for uniform checkboxes, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_2_service_error");
                    } else {
                        error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success2.hide();
                    error2.show();
                    App.scrollTo(error2, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    $(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label) {
                    if (label.attr("for") == "service" || label.attr("for") == "membership") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid').addClass('help-inline ok') // mark the current input as valid and display OK icon
                        .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    }
                },

                submitHandler: function (form) {
                    success2.show();
                    error2.hide();
                }

            });

            $('#form_2_select2').select2({
                placeholder: "Select an Option",
                allowClear: true
            });

            //apply validation on wysiwyg editors change, this only needed for chosen dropdown integration.
            $('.wysihtml5, .ckeditor', form2).change(function () {
                alert(1);
                form2.validate().element($(this)); //revalidate the wysiwyg editors and show error or success message for the input
            });

            //apply validation on chosen dropdown value change, this only needed for chosen dropdown integration.
            $('.chosen, .chosen-with-diselect', form2).change(function () {
                form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });

             //apply validation on select2 dropdown value change, this only needed for chosen dropdown integration.
            $('.select2', form2).change(function () {
                form2.validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
    }


    return {
        //main function to initiate the module
        init: function () {

            handleValidation1();
            handleValidation2();

        }

    };

}();