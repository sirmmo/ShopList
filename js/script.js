
$(document).ready(function() {

    //Add items

    //Event Listner to SAVE button
    var item = "";
    var  n_item = "";
    //
    $('.save_btn').click( function () {

        $('.item_section').show();

       var item = $(' #add_item[type=text]  ').val();
        var n_item = $(' #qty[type=text]').val();
         $( '.list_items ').append( ' <li>' + item   +  ' </li> ' );
       $( '.item_unit ').append ( '  <li>  ' + n_item + '  </li> ' );
        $( '.del  ').append( ' <li>' + '<a href = "#"> ' + 'delete'  + '</a>'  +  ' </li> ' );
         $( '.edit  ').append( ' <li>' + '<a href = "#"> ' + 'edit'  + '</a>'  +  ' </li> ' );
         $( '.check_out  ').append( ' <li>' + '<a href = "#"> ' + 'check'  + '</a>'  +  ' </li> ' );


/*$(' .del').on('click ' , function () {
        $( '.del  ').append( ' <li>' + '<a href = "#"> ' + 'delete'  + '</a>'  +  ' </li> ' );
                $(this).closest('li').remove();
        //$('.list_items')[0].remove();
         //$('.item_unit')[0].remove();
    });*/

         return false; //Prevents the page not to reload every time item sinserted

 });

//Empty current input form
     $(".reset_btn ").click( function () {
         //alert('RESET button is clicked' );
         $('.list_items')[0].reset();
         $('.item_unit')[0].reset();
           $('.item_section').show();

    });






});//End of Document