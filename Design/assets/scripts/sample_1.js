/* ************************  22 July,2014   ********************************  */
/* This is the JS file for the JIRA ID 899. 
   requisition_view_option2.html
   All Collapsible and Expandable Treatment for the table.
*/
var samplecode = function () {

    /* START : Dynamic FilterBy dropdown populate*/
    var filterbyoptions = [];
    filterbyoptions.push({ label: '-- Select --', value: -1 });

    var $chkboxs = $('#sample_2_column_toggler').find(':checkbox[checked]').each(function (index) {

        
        var v = $(this).attr("data-column");
        var lab = $(this).parent('label').text();

        //optstr = { label: lab, value: v };
        //alert(optstr.label);
        filterbyoptions.push({ label: lab, value: v });
    });


    $("#filterby").find('option').remove();
    for (i = 0; i < filterbyoptions.length; i++) {
        //alert();
        //alert(' Lable = ' + filterbyoptions[i].label.toString());
        $('#filterby').append('<option value="' + filterbyoptions[i].value + '">' + filterbyoptions[i].label.toString() + '</option>');
        //    $("#filterby").append('<option value="' + (filterbyoptions[i].value) + '">' + CUSTOMER[i].label + '</option>');
    }
    /* END :Dynamic FilterBy dropdown populate */


    $('td div.accordion-group2 .accordion-heading2 a').live('click', function () {

        //actions-expanded
        var $rw = $(this).parent().parent().parent().parent();

        var $actions_expanded = $(this).parent().parent().parent().parent().find('.actions-expanded');
        var $actions_collapsed = $(this).parent().parent().parent().parent().find('.actions-collapsed');






        var $coldiv = $(this).parent().parent().parent().parent().find('.accordion-body2');
        if ($coldiv.hasClass('in')) {
            $actions_collapsed.removeClass('in');
            $actions_collapsed.addClass('hide');

            $actions_expanded.removeClass('hide');
            $actions_expanded.addClass('in');



        } else {
            $actions_collapsed.removeClass('hide');
            $actions_collapsed.add('in');
            $actions_expanded.removeClass('in');
            $actions_expanded.addClass('hide');




        }


    });
    
    //24 July 2014 - 
    $('#collapse_expande_all').live('click', function (e) {
        e.preventDefault();
        $('td div.accordion-group2 .accordion-heading2 a').trigger("click");


    });

    /* 05 Aug 2014 *** FILTER MULTISELECT */

    $('.filter-search').on('keyup', function () {
        //THIS CODE WILL BE REPLACED BY DEVELOPER.
        //var $th = $(this);
        var len = $(this).val().length;
        var txt = $(this).val();
        //alert(txt);
        if (len >= 3) {
            $(this).parent().find('ul').css("display", "block");

            var listItems = $(this).parent().find('ul li');
            listItems.each(function (idx, li) {
                
            });

        }
        else if (len >= 0 && len <= 2) {
            $(this).parent().find('ul').css("display", "none");

        }
        else {
            
        }

    });

    /* 06 AUG 2014 FILETR Multiselect list pages*/
    /* tooltip DEMO  THIS CODE WILL BE REMOVE BY DEVELOPER*/

    $('#applyfilter').on('click', function () {

        alert("Validation will be taken care in development");

        $('div.visibleMenu').find('.list-filter1').addClass('error');

        var $errlist = $('.error');

        $errlist.each(function (index) {
            var $element = $(this);


            $element.tooltip("destroy") // Destroy any pre-existing tooltip so we can repopulate with new tooltip content
                .data("title","Selection is required")
                .addClass("error")
                .tooltip(); // Create a new tooltip based on the error messsage we just set in the title
        });

        $('.alert-error').removeClass('hide');
        $('.alert-error').addClass('show');

    });

    $('#clearall').on('click', function () {

        alert(" Validation will be taken care in development ");

        $('div.visibleMenu').find('.list-filter1').removeClass('error');

        var $errlist = $('.error');

        $errlist.each(function (index) {
            var $element = $(this);


            $element.tooltip("destroy");// Destroy any pre-existing tooltip so we can repopulate with new tooltip content

        }); 
        

        $('.alert-error').removeClass('show');
        $('.alert-error').addClass('hide');
    });

    


}();