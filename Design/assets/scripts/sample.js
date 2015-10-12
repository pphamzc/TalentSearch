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


    //Filter UI for requisition_view_option3.html
    //$("#filterby").multiselect();


    /* *******  29JULY  **/

    $(".group_multiselect").multipleSelect({
        multiple: false,
        //multipleWidth: 55,
        //width: '100%'
    });

    $('.searchbox_multiselect').multiselect({
        selectAllValue: 'multiselect-all',
        enableCaseInsensitiveFiltering: true,
        maxHeight: 200,
        filterBehavior: 'both',
        filterPlaceholder: 'Contains',
        numberDisplayed: 1,
        enableFiltering: true,
        includeSelectAllOption: false,
        includeSelectAllDivider: true,
        onChange: function (element, chec) {
        }
       
    });

    $('.simple_multiselect').multiselect({
        numberDisplayed: 0
    });
    $('.tf_simple_multiselect').multiselect();
    $('.add_filter_row').live('click', function (e) {
        e.preventDefault();
        //alert();
        var $1strow = $(this).parent().parent().parent().parent().parent().parent();
        $($1strow).clone().appendTo($1strow);
       


    });
    $(document).on('click', '.optgroup', function (event) {

        var checkAll = true;
        var $opts = $(this).parent().nextUntil(':has(.optgroup)');
        var $inactive = $opts.filter(':not(.active)');
        console.log($inactive);
        var $toggleMe = $inactive;
        if ($inactive.length == 0) {
            $toggleMe = $opts;
            checkAll = false;
        }
        $toggleMe.find('input').click();
        $(this).find('input').attr('checked', false);
        event.preventDefault();

    });

    /* 30 JULY */
    //.multiselect-search;
    $('.multiselect-search').live('keyup', function () {
        //alert();nextUntil("ul:last")
        var t = $(this).val();
        //alert();
        $('.multiselect-search').parent().parent().parent().find('li').each(function (index) {
            $(this).find("label:contains(" + t + ")").each(function (index) {
                //$(this).css("color", "red");
                
            })
            //$("div:contains('John')").css("color", "red");
        });

        //$('.multiselect-search').parent().find('option[text="' +t +'"]').val();

        //var $opts = $('.multiselect-search').parent().parent().parent().nextUntil('li:last');

    });

    

    //$('.multiselect-group').before('<input type="checkbox" />');
    //$(document).on('click', '.multiselect-group', function (event) {
    //    var checkAll = true;
    //    var $opts = $(this).parent().nextUntil(':has(.multiselect-group)');
    //    var $inactive = $opts.filter(':not(.active)');
    //    var $toggleMe = $inactive;
    //    if ($inactive.length == 0) {
    //        $toggleMe = $opts;
    //        checkAll = false;
    //    }
    //    $toggleMe.find('input').click();
    //    $(this).parent().find('input').attr('checked', checkAll);
    //    event.preventDefault();
    //});

    
   
    

    //$('#filterby').on('change', function () {
    //    var textop = $("#filterby option:selected").text();

       
    //    $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //    if (this.value == 1) {
    //        //Requisition Summary
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Requisition_Summary').removeClass('hide');
            
    //        var d1 = [
    //            { label: "Data Warehouse Architect (Information Systems)", value: "Data Warehouse Architect (Information Systems)" },
    //            { label: "Quality Engineer 2 (Engineering)", value: "Quality Engineer 2 (Engineering)" },
    //            { label: "Marketing Analyst (Marketing)", value: "Marketing Analyst (Marketing)" }


    //        ];
    //        var locate = [
    //            { label: "Auburn Hills, MI", value: "Auburn Hills, MI" },
    //            { label: "Auburn Hills, Mumbai", value: "Auburn Hills, Mumbai" },
    //            { label: "Auburn Hills, Dehli", value: "Auburn Hills, Dehli" },
    //            { label: "Auburn Hills, Vadodara", value: "Auburn Hills, Vadodara" }
    //        ];

    //        $('#location').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var locations = $('#location option:selected');
    //                var selected = [];
    //                $(locations).each(function (index, loc) {
    //                    selected.push([$(this).val()]);
    //                    //table.fnFilter(loc);
    //                });



    //            }
    //        });
    //        $('#name').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#name option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);



    //            }
    //        });

            

    //        $("#name").multiselect('dataprovider', d1);
    //        $("#location").multiselect('dataprovider', locate);

    //    }
    //    else if (this.value == 2) {
    //        //CUSTOMER
    //        var i = this.value;

    //        //var CUSTOMER = new Array("Adobe Systems Incorporated", "Adobe Systems Incorporated2", "Adobe Systems Incorporated3", "Adobe Systems Incorporated4");

    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#customer').removeClass('hide');
            
    //        var d1 = [
    //            { label: "Adobe Systems Incorporated", value: "Adobe Systems Incorporated" },
    //            { label: "Adobe Systems Incorporated1", value: "Adobe Systems Incorporated1" },
    //            { label: "Adobe Systems Incorporated2", value: "Adobe Systems Incorporated2" },
    //            { label: "Adobe Systems Incorporated3", value: "Adobe Systems Incorporated3" },
    //            { label: "Adobe Systems Incorporated4", value: "Adobe Systems Incorporated4" },
    //            { label: "Adobe Systems Incorporated5", value: "Adobe Systems Incorporated5" },
    //            { label: "Adobe Systems Incorporated6", value: "Adobe Systems Incorporated6" }

    //        ];
    //        $('#customer_name').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#customer_name option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#customer_name").multiselect('dataprovider', d1);

           
    //    } else if (this.value == 3) {

    //        //Distribution Date

          
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Distribution_Date').removeClass('hide');
    //    } else if (this.value == 4) {
    //        //Classification
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Classification').removeClass('hide');

    //        //var CLASSIFICATION = new Array("Information Systems", "Engineering", "Marketing");


    //        var d1 = [{ label: "ACNP", value: "ACNP" }, { label: "test", value: "test" }];
    //        $('#Classification_text').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#Classification_text option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#Classification_text").multiselect('dataprovider', d1);
    //    }
    //    else if (this.value == 5) {
    //        //Agreement Name
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#agreementname_select').removeClass('hide');
    //        var d1 = [
    //            { label: "Adobe Systems Incorporated", value: "Adobe Systems Incorporated" },
    //            { label: "Adobe Systems Incorporated2", value: "Adobe Systems Incorporated2" },
    //            { label: "Adobe Systems Incorporated3", value: "Adobe Systems Incorporated3" },
    //            { label: "Adobe Systems Incorporated4", value: "Adobe Systems Incorporated4" }
    //        ];
    //        $('#agreementname_select').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#agreementname_select option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#agreementname_select").multiselect('dataprovider', d1);


    //    }
    //    else if (this.value == 6) {
    //        //Requisition_Type_Group
    //        //Staff Augmentation
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Requisition_Type_Group_select').removeClass('hide');
    //        var data = [
    //            { label: "Staff Augmentation", value: "Staff Augmentation" },

    //        ];
    //        $('#Requisition_Type_Group_select').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#Requisition_Type_Group_select option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#Requisition_Type_Group_select").multiselect('dataprovider', d1);

    //    }
    //    else if (this.value == 7) {
    //        //Start_Date
    //        //
    //        //$('#content_text').addClass('hide');
    //        //$('#content_number').addClass('hide');
    //        //$('#content_date').removeClass('hide');
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Start_Date').removeClass('hide');


    //    }
    //    else if (this.value == 8) {

    //        //End Date
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#End_Date').removeClass('hide');

    //    }
    //    else if (this.value == 9) {
    //        //Country
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Country').removeClass('hide');

    //        var d1 = [
    //            { label: "USA", value: "USA" },

    //        ];

    //        $('#country_select').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#country_select option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#country_select").multiselect('dataprovider', d1);
    //    }
    //    else if (this.value == 10) {
    //        //Org Level Default-Adobe
    //        //
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Org_Level').removeClass('hide');
    //        var d1 = [
    //            { label: "Default-Adobe", value: "Default-Adobe" },
    //            { label: "Default-Adobe1", value: "Default-Adobe1" },

    //        ];
    //        $('#org_level_select').multiselect({
    //            selectAllValue: 'multiselect-all',
    //            enableCaseInsensitiveFiltering: true,
    //            numberDisplayed: 1,
    //            enableFiltering: true,
    //            includeSelectAllOption: true,
    //            onChange: function (element, chec) {
    //                //alert('Change event invoked!');
    //                var names = $('#org_level_select option:selected');
    //                var selected = [];
    //                $(names).each(function (index, nm) {
    //                    selected.push([$(this).val()]);
    //                });

    //                console.log(selected);
    //            }
    //        });
    //        $("#org_level_select").multiselect('dataprovider', d1);



    //    }
    //    else if (this.value == 11) {
    //        //Requested 
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Requested').removeClass('hide');
    //    }
    //    else if (this.value == 12) {
    //        //Available

    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Available').removeClass('hide');

    //        $('#available_min').keyup(function () { table.draw(); });
    //        $('#available_max').keyup(function () { table.draw(); });

    //    }
    //    else if (this.value == 13) {

    //        //Submit
    //        $('#filterby').parent().closest('ul').siblings('ul').addClass('hide');
    //        $('#Submit').removeClass('hide');


    //    }
    //    else if (this.value == 14) {

    //    }
    //    else if (this.value == 15) {

    //    }
    //});

   


}();