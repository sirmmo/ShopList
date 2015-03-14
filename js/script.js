
$(document).ready(function() {

    //Add items

    //Event Listner to SAVE button

    $(".save_btn ").click( function () {
//location.reload(true);

        $('.item_section').show();

       var item = $(' #add_item  ').val();
         $( '.list_items ').append( ' <li>' + item   +  ' </li> ' );
         $(' #add_item').val(item);
          var n_item = $(' #qty').val();
          $( '.item_unit ').append ( '  <li>  ' + n_item + '  </li> ' );
          $(' #qty').val(n_item);

       //var item = $( this  ).val();
        //$(' #qty').val(n_item);


          // $( '.item_unit ').append ( '  <li>  ' + n_item + '  </li> ' );



         //alert('Save button is clicked' );
    });
//Even Listnet to RESET button
     $(".reset_btn ").click( function () {
         //alert('RESET button is clicked' );
         $('.list_items')[0].reset();
         $('.item_unit')[0].reset();

    });






});//End of Document