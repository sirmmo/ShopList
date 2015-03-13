$(document).ready(function() {

    //Add items

    //Event Listner to SAVE button

    $(".save_btn ").click( function () {
            $( '.list_items ').append(' <li>mess</li>');
            $( '.item_unit ').append(' <li>2kg</li>');
            $('.item_section').show();

         //alert('Save button is clicked' );
    });
//Even Listnet to RESET button
     $(".reset_btn ").click( function () {
         //alert('RESET button is clicked' );
         $('.list_items')[0].reset();
         $('.item_unit')[0].reset();

    });






});//End of Document