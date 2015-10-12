var FormWizard = function () {


    return {
        //main function to initiate the module
        init: function () {
            if (!jQuery().bootstrapWizard) {
                return;
            }


            var form = $('#submit_form');
            var error = $('.alert-error', form);
            var success = $('.alert-success', form);

            form.validate({
                doNotHideMessage: true, //this option enables to show the error/success messages on tab switch.
                errorElement: 'span', //default input error message container
                errorClass: 'validate-inline', // default input error message class
                focusInvalid: false, // do not focus the last invalid input
                rules: {
					
                   firstname: {
                        required: true
                    },
                   lastname: {
                        required: true
                    },
					
					phonetype: {
                        required: true,
                    },
					
					phonenumber: {
                        required: true,
                    },
                   
                    email: {
                        required: true,
                    },
					
					address1: {
                        required: true,
                    },
					postalcode: {
                        required: true,
                    },
					city: {
                        required: true,
                    },
					Country: {
                        required: true,
                    },
					State: {
                        required: true,
                    },
					County: {
                        required: true,
                    },
					
					SocialSecurityNumber: {
                        required: true,
                    },
					ConfirmSocialSecurityNumber: {
                        required: true,
                    },
					DateofBirth: {
                        required: true,
                    },
                   
                    
                   
                    
                },

                messages: { // custom messages for radio buttons and checkboxes
                    'payment[]': {
                        required: "Please select at least one option",
                        minlength: jQuery.format("Please select at least one option")
                    }
                },

                errorPlacement: function (error, element) { // render error placement for each input type
                    if (element.attr("name") == "gender") { // for uniform radio buttons, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_gender_error");
                    } else if (element.attr("name") == "payment[]") { // for uniform radio buttons, insert the after the given container
                        error.addClass("no-left-padding").insertAfter("#form_payment_error");
                    } else {
                        //error.insertAfter(element); // for other inputs, just perform default behavior
                    }
                },

                invalidHandler: function (event, validator) { //display error alert on form submit   
                    success.hide();
                    error.show();
                    //App.scrollTo(error, -200);
                },

                highlight: function (element) { // hightlight error inputs
                    /*$(element)
                        .closest('.help-inline').removeClass('ok'); // display OK icon
                    $(element)
                        .closest('.control-group').removeClass('success').addClass('error'); // set error class to the control group
					*/
					$(element).removeClass('success').addClass('error'); // set error class to the control group
                },

                unhighlight: function (element) { // revert the change done by hightlight
                    $(element)
                        .closest('.control-group').removeClass('error'); // set error class to the control group
                },

                success: function (label, element) {
					$(element).removeClass('error').addClass('success');
                    /*if (label.attr("for") == "gender" || label.attr("for") == "payment[]") { // for checkboxes and radio buttons, no need to show OK icon
                        label
                            .closest('.control-group').removeClass('error').addClass('success');
                        label.remove(); // remove error label here
                    } else { // display success icon for other inputs
                        label
                            .addClass('valid ok') // mark the current input as valid and display OK icon
                        .closest('.control-group').removeClass('error').addClass('success'); // set success class to the control group
                    }*/
                },

                submitHandler: function (form) {
                    success.show();
                    error.hide();
                    //add here some ajax code to submit your form or just call form.submit() if you want to submit the form without ajax
                }

            });

            var displayConfirm = function() {
                $('.display-value', form).each(function(){
                    var input = $('[name="'+$(this).attr("data-display")+'"]', form);
                    if (input.is(":text") || input.is("textarea")) {
                        $(this).html(input.val());
                    } else if (input.is("select")) {
                        $(this).html(input.find('option:selected').text());
                    } else if (input.is(":radio") && input.is(":checked")) {
                        $(this).html(input.attr("data-title"));
                    } else if ($(this).attr("data-display") == 'card_expiry') {
                        $(this).html($('[name="card_expiry_mm"]', form).val() + '/' + $('[name="card_expiry_yyyy"]', form).val());
                    } else if ($(this).attr("data-display") == 'payment') {
                        var payment = [];
                        $('[name="payment[]"]').each(function(){
                            payment.push($(this).attr('data-title'));
                        });
                        $(this).html(payment.join("<br>"));
                    }
                });
            }
			
			
			
			
            // default form wizard
            $('#rootwizard').bootstrapWizard({
                'nextSelector': '.button-next',
                'previousSelector': '.button-previous',
                onTabClick: function (tab, navigation, index) {
					success.show();
                    error.show();
					
                    //alert('on tab click disabled');
                    //return false;
					//alert(index);
                },
				onTabChange: function(tab, navigation, index) {
					//form.valid();
					window.randomize = function() {
						$('.active .radial-progress').attr('data-progress', '100');
					}
					setTimeout(window.randomize, 500);
				},
				onShow: function(tab, navigation, index) {
					//form.valid()
				},
				
				
				onNext: function (tab, navigation, index) {

                    success.show();
                    error.show();
					
                    form.valid();
                    

                    /*if (form.valid() == true) {
						//alert("Hi");
                        //return false;
						jQuery('li').removeClass("filled");
						var li_list = navigation.find('li');
						for (var i = 0; i < index; i++) {
							jQuery(li_list[i]).addClass("filled");
						}
						
						var currentPercent = $("#percentWizard").val();
						var newPercent = currentPercent + 13;
						$("#percentWizard").text(newPercent);
						
						
                    }*/
					
					
					
					

                    var total = navigation.find('li').length;
                    var current = index + 1;
                    // set wizard title
                    $('.step-title', $('#rootwizard')).text('Step ' + (index + 1) + ' of ' + total);
                    // set done steps
                    jQuery('li', $('#rootwizard')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }
                    
                    if (current == 1) {
                        $('#rootwizard').find('.button-previous').hide();
                    } else {
                        $('#rootwizard').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#rootwizard').find('.button-next').hide();
                        $('#rootwizard').find('.button-submit').show();
                        displayConfirm();
                    } else {
                        $('#rootwizard').find('.button-next').show();
                        $('#rootwizard').find('.button-submit').hide();
                    }
                    //App.scrollTo($('.page-title'));
                },
                onPrevious: function (tab, navigation, index) {
                    success.hide();
                    error.hide();

                    var total = navigation.find('li').length;
                    var current = index + 1;
                    // set wizard title
                    $('.step-title', $('#rootwizard')).text('Step ' + (index + 1) + ' of ' + total);
                    // set done steps
                    jQuery('li', $('#rootwizard')).removeClass("done");
                    var li_list = navigation.find('li');
                    for (var i = 0; i < index; i++) {
                        jQuery(li_list[i]).addClass("done");
                    }

                    if (current == 1) {
                        $('#rootwizard').find('.button-previous').hide();
                    } else {
                        $('#rootwizard').find('.button-previous').show();
                    }

                    if (current >= total) {
                        $('#rootwizard').find('.button-next').hide();
                        $('#rootwizard').find('.button-submit').show();
                    } else {
                        $('#rootwizard').find('.button-next').show();
                        $('#rootwizard').find('.button-submit').hide();
                    }

                    //App.scrollTo($('.page-title'));
                },
                onTabShow: function (tab, navigation, index) {
					
                    var total = navigation.find('li').length;
                    var current = index + 1;
                    var $percent = (current / total) * 90;
					//var $percent = 14.1;
                    //$('#rootwizard').find('.bar').css({
                    //    width: $percent + '%'
                    //});
					$("#commonBar").css("width", "0%");
					//form.valid();
					
					var errorObj = "";
					
					switch(index) {
						case 0:
							$('#rootwizard #bar .bar').css("width", "0%");
							$('#customerMessage').show();
							/*errorObj = $("#tab1 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#commonBar").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#commonBar").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var currentPercent = parseInt($("#commonBar").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#commonBar").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}*/
							break;
						case 1:
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "10%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab1 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 2:
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "25%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab2 .error");
							
							
							//tab3checkbox_IsValid();
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 3:
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "38%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab3 .error");
							
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 4:
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "49%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab4 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 5:	
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "64%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab5 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 6:
							$('#customerMessage').hide();
							$('#rootwizard #bar .bar').css("width", "76%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab6 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
							}
							break;
						case 7:
							$('#customerMessage').hide();
							$('#rootwizard #tab8').find('.button-next').hide();
							$('#rootwizard #bar .bar').css("width", "88%");
							$(".button-previous").css("display", "inline");
							errorObj = $("#tab7 .error");
							if (errorObj.length == 0){
								var li_list = navigation.find('li');
								jQuery(li_list[0]).addClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								var newPercent = currentPercent + 13;
								var newPercentBar = newPercent + "%"
								$("#persentVal").text(newPercent);
								$("#commonBar").css("width", newPercentBar);
								
							}
							else{
								var li_list = navigation.find('li');
								jQuery(li_list[0]).removeClass("filled");
								var currentPercent = parseInt($("#persentVal").text());
								//var newPercent = currentPercent + 13;
								var newPercentBar = currentPercent + "%"
								$("#persentVal").text(currentPercent);
								$("#commonBar").css("width", newPercentBar);
								
								
							}
							break;
					    case 8:
					        $('#customerMessage').hide();
					        $('#rootwizard #tab8').find('.button-next').hide();
					        $('#rootwizard #bar .bar').css("width", "100%");
					        $(".button-previous").css("display", "inline");
					        errorObj = $("#tab7 .error");
					        if (errorObj.length == 0) {
					            var li_list = navigation.find('li');
					            jQuery(li_list[0]).addClass("filled");
					            var currentPercent = parseInt($("#persentVal").text());
					            var newPercent = currentPercent + 13;
					            var newPercentBar = newPercent + "%"
					            $("#persentVal").text(newPercent);
					            $("#commonBar").css("width", newPercentBar);

					        }
					        else {
					            var li_list = navigation.find('li');
					            jQuery(li_list[0]).removeClass("filled");
					            var currentPercent = parseInt($("#persentVal").text());
					            //var newPercent = currentPercent + 13;
					            var newPercentBar = currentPercent + "%"
					            $("#persentVal").text(currentPercent);
					            $("#commonBar").css("width", newPercentBar);


					        }
					        break;
					}
					
					
                }
            });
			
			
			
			$("#commonBar").css("width", "0%");
			$('#rootwizard').bootstrapWizard('disable', 8);
			
			$("li.disabled a").tooltip();
			

            $('#rootwizard').find('.button-previous').hide();
            $('#rootwizard .button-submit').click(function () {
                alert('Enrollment Complete! ');
            }).hide();
        }

    };

}();

//27th June,2014
//*********************************Employee Verification Tab 3 *****************************
//if (navigator.userAgent.match(/msie/i) ){
      //  alert('I am an old fashioned Internet Explorer');
      //}
var str = 'Alien #';
$("#span_residenttxt").html(str);

$('#tab3_Li_expdate').hide();
//$('#tab3_Li_expdate').css("display", "none");
$('#tab3_Li_VisaType').hide();
//$('#tab3_Li_VisaType').css("display", "none");

$('#tab3_Li_VisaType_Other').hide();
//$('#tab3_Li_VisaType_Other').css("display", "none");
$('.datepicker').datepicker()

$('#Emp_Ver_Residency').on('change', function() {
 
  var residentValue = this.value;
  if(this.value == 1)
  {
	//LawfulPermanentResident
	var str = 'Alien #';
	$("#span_residenttxt").html(str);

     $('#tab3_Li_expdate').hide();
	//$('#tab3_Li_expdate').css("display", "none");

      //select visa
      $('#tab3_Li_VisaType').hide();
	//$('#tab3_Li_VisaType').css("display", "none");
      $('#tab3_Li_VisaType_Other').hide();
	//$('#tab3_Li_VisaType_Other').css("display", "none");
  }
  else if(this.value ==2)
  {
	//Alien Authorized to Work
	
	//change span text
	var str = 'Alien # or Admission #';
	$( "#span_residenttxt" ).html( str );
	
	$('#tab3_Li_expdate').show();
	//select visa
	$('#tab3_Li_VisaType').show();
  }
  else{
  
  }
  
  
  
});

$('#Select_Emp_Ver_Residency_VisaType').on('change', function() {
var residentValue = this.value;
  if(this.value == 1)
  {
      //other
      $('#tab3_Li_VisaType_Other').show();
	
  }
  else{
	
      $('#tab3_Li_VisaType_Other').hide();
  
  }
  

});


//LIST A


//tab3_Li_ListA_expdate
$('#tab3_Li_ListA_expdate').show();

//2nd exp date etc
//tab3_Li_ListA_docnum2
$('#tab3_Li_ListA_docnum2').hide();


//tab3_Li_ListA_expdate2
$('#tab3_Li_ListA_expdate2').hide();


$('#Select_ListA_doctitle').on('change', function () {
    if (this.value == 1) {
        //Permanent Resident Card I-551

        $('#tab3_Li_ListA_expdate').hide();

        //only for option2

        $('#tab3_Li_ListA_docnum2').hide();


        $('#tab3_Li_ListA_expdate2').hide();


    }
    else if (this.value == 2) {
        //Foreign Passport W/I-94

        $('#tab3_Li_ListA_expdate').show();


        $('#tab3_Li_ListA_docnum2').show();


        $('#tab3_Li_ListA_expdate2').show();




    }
    else {

        $('#tab3_Li_ListA_expdate').show();

        //option 2

        $('#tab3_Li_ListA_docnum2').hide();


        $('#tab3_Li_ListA_expdate2').hide();


    }

});

//List C 

//Page Load

//tab3_Li_ListC_docnum
$("#tab3_Li_ListC_docnum").css("display", "block");

//tab3_Li_ListC_SSN
$("#tab3_Li_ListC_SSN").css("display", "none");

//tab3_Li_ListC_CSSN
$("#tab3_Li_ListC_CSSN").css("display", "none");

//tab3_Li_ListC_expdate


$("#tab3_Li_ListC_expdate").css("display", "none");


$('#Select_Listc_doctitle').on('change', function () {

    if (this.value == 1) {
        //Native American Trible
        
        $("#tab3_Li_ListC_SSN").css("display", "none");


       
        $("#tab3_Li_ListC_CSSN").css("display", "none");

        
        $("#tab3_Li_ListC_expdate").css("display", "none");

        $("#tab3_Li_ListC_docnum").css("display", "block");


    }
    else if (this.value == 2) {
        // U.S. Social Security Card

        
        $("#tab3_Li_ListC_SSN").css("display", "block");

        

        $("#tab3_Li_ListC_CSSN").css("display", "block");

        
        $("#tab3_Li_ListC_expdate").css("display", "none");
        $("#tab3_Li_ListC_docnum").css("display", "none");

    }
    else {
        
        
        $("#tab3_Li_ListC_SSN").css("display", "none");

        

        $("#tab3_Li_ListC_CSSN").css("display", "none");

        
        $("#tab3_Li_ListC_expdate").css("display", "block");

        
        $("#tab3_Li_ListC_docnum").css("display", "block");



    }


});


//List B

//Page Load

//$("#Span_ListB_issuingAutho_select").css("display", "block");
//$("#Select_ListB_issuingAutho_select").css("display", "block");
//tab3_Li_ListB_issuingAutho_select
$("#tab3_Li_ListB_issuingAutho_select").css("display", "block");



//$("#Span_ListB_issuingAutho_txt").css("display", "none");
//$("#txt_ListB_issuingAutho_txt").css("display", "none");
//tab3_Li_ListB_issuingAutho_txt
$("#tab3_Li_ListB_issuingAutho_txt").css("display", "none");

//Hide Checkbox
$("#tab3_Li_ListB_nonstate_chk").css("display", "none");



$('#Select_ListB_doctitle').on('change', function () {
    if (this.value == 1) {
        //US State Issued Driver's License

        //Display select list		
        $("#tab3_Li_ListB_issuingAutho_select").css("display", "block");


        //Hide Textbox
        //$("#Span_ListB_issuingAutho_txt").css("display", "none");
        //$("#txt_ListB_issuingAutho_txt").css("display", "none");
        $("#tab3_Li_ListB_issuingAutho_txt").css("display", "none");



        // $("#Span_ListB_issuingAutho_NonState_Chkbx").css("display", "none");
        // $("#Chkbx_ListB_issuingAutho_NonState_Chkbx").css("display", "none");

        //Hide Checkbox
        $("#tab3_Li_ListB_nonstate_chk").css("display", "none");





    }
    else if (this.value == 2) {
        //ID Card Issued by a U.S. Federal,State

        //Hide select list		
        
        $("#tab3_Li_ListB_issuingAutho_select").css("display", "none");


        //Display Textbox
        
        $("#tab3_Li_ListB_issuingAutho_txt").css("display", "block");



        //Display Checkbox
        
        $("#tab3_Li_ListB_nonstate_chk").css("display", "block");


    }
    else {

        $("#tab3_Li_ListB_issuingAutho_select").css("display", "block");

        
        $("#tab3_Li_ListB_issuingAutho_txt").css("display", "none");


        //Hide Checkbox
        
        $("#tab3_Li_ListB_nonstate_chk").css("display", "none");


    }


});

$("#tab3_CHK_ListB_nonstate").on('click', function () {

    if (this.checked) {
        $("#tab3_Li_ListB_issuingAutho_select").css("display", "none");
        $("#tab3_Li_ListB_issuingAutho_txt").css("display", "block");
      

    }
    else {
        //alert("select");
        $("#tab3_Li_ListB_issuingAutho_select").css("display", "block");
        $("#tab3_Li_ListB_issuingAutho_txt").css("display", "none");


    }


});


/* 11July 2014*/

$('#tab8_pending_doc_selectall').live('click', function () {
    $allcheckboxes = $(".tab8_pending_doc_chk");
   // $allcheckboxes = $("input:checkbox");
    
    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");
        $("#tab8_pending_doc_body input:checkbox").attr("checked", true);
        $("#tab8_pending_doc_body .unchecked").addClass("checked");
        $("#tab8_pending_doc_body .checked").removeClass("unchecked");

    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        $("#tab8_pending_doc_body input:checkbox").attr("checked", false);
        $("#tab8_pending_doc_body .checked").addClass("unchecked");
        $("#tab8_pending_doc_body .unchecked").removeClass("checked");

    }

});


$('#tab8_completed_doc_selectall').live('click', function () {
    $allcheckboxes = $(".tab8_pending_doc_chk");
    // $allcheckboxes = $("input:checkbox");

    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");
        $("#tab8_completed_doc_body input:checkbox").attr("checked", true);
        $("#tab8_completed_doc_body .unchecked").addClass("checked");
        $("#tab8_completed_doc_body .checked").removeClass("unchecked");

    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        $("#tab8_completed_doc_body input:checkbox").attr("checked", false);
        $("#tab8_completed_doc_body .checked").addClass("unchecked");
        $("#tab8_completed_doc_body .unchecked").removeClass("checked");

    }

});

//14 July

//$('#tab3_Chk_Iattest').live('click', function () {
//    if(this.checked)
//    {
//        $(this).parent().addClass("checked");
//        $(this).parent().removeClass("unchecked");
//        //alert();

//    }
//    else {
//        $(this).parent().addClass("unchecked");
//        $(this).parent().removeClass("checked");

//    }
    

//});
//function tab3checkbox_IsValid() {
//    if ($('#tab3_Chk_Iattest').parent().hasClass("unchecked")) {

//        $('#tab3_Div_Iattest').addClass("error");

//    }
//    else {
//        $("#tab3_Div_Iattest").removeClass("error");

//    }

//}


//15 July
//Welcome Page-1
// SNP Resource, ‘Pending Review’ status

$('#welcome1_Chk_Iattest').live('click', function () {
    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");

        if ($(this).parent().hasClass("checked")) {
            $('#welcome1_btn_continue').removeClass("hide");

        }
    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        if ($(this).parent().hasClass("unchecked")) {
            $('#welcome1_btn_continue').addClass("hide");

        }
    }


});

//Welcome Page-2
//W2 Resource, ‘InProgress’ status, 0% complete

$('#welcome2_Chk_Iattest').live('click', function () {
    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");

        if ($(this).parent().hasClass("checked")) {
            $('#welcome2_btn_continue').removeClass("hide");

        }
    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        if ($(this).parent().hasClass("unchecked")) {
            $('#welcome2_btn_continue').addClass("hide");

        }
    }


});
//Welcome Page-3
//W2 Resource, ‘InProgress’ status, > 0% complete

$('#welcome3_Chk_Iattest').live('click', function () {
    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");

        if ($(this).parent().hasClass("checked")) {
            $('#welcome3_btn_continue').removeClass("hide");

        }
    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        if ($(this).parent().hasClass("unchecked")) {
            $('#welcome3_btn_continue').addClass("hide");

        }
    }


});
//Welcome Page-4
//W2 Resource, ‘Pending Review’ status

$('#welcome4_Chk_Iattest').live('click', function () {
    if (this.checked) {
        $(this).parent().addClass("checked");
        $(this).parent().removeClass("unchecked");

        if ($(this).parent().hasClass("checked")) {
            $('#welcome4_btn_continue').removeClass("hide");

        }
    }
    else {
        $(this).parent().addClass("unchecked");
        $(this).parent().removeClass("checked");
        if ($(this).parent().hasClass("unchecked")) {
            $('#welcome4_btn_continue').addClass("hide");

        }
    }


});








