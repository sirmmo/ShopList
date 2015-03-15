
$(document).ready(function() {

    //Add items

    //Event Listner to SAVE button
    var item = "";
    var  n_item = "";
    //
    $('.save_btn').click( function () {

        $('.item_section').show();
       var item = $(' #add_item[type=text]  ').val();
      $( '.list_items ').append( ' <li>' + item   +  ' </li> ' );

           var n_item = $(' #qty[type=text]').val();
          $( '.item_unit ').append ( '  <li>  ' + n_item + '  </li> ' );
           return false; //Prevents the page not to reload every time item sinserted

         //alert('Save button is clicked' );
    });
//Even Listnet to RESET button
     $(".reset_btn ").click( function () {
         //alert('RESET button is clicked' );
         $('.list_items')[0].reset();
         $('.item_unit')[0].reset();
           $('.item_section').show();

    });






});//End of Document