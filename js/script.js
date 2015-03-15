
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
        if (item <1) {

        };
         /*$( '.list_items ').append( ' <li>' + item   +  ' </li> ' );
       $( '.item_unit ').append ( '  <li>  ' + n_item + '  </li> ' );
        $( '.del  ').append( ' <li>' + '<a href = "#"> ' + 'delete'  + '</a>'  +  ' </li> ' );
         $( '.edit  ').append( ' <li>' + '<a href = "#"> ' + 'edit'  + '</a>'  +  ' </li> ' );
         $( '.check_out  ').append( ' <li>' + '<a href = "#"> ' + 'check'  + '</a>'  +  ' </li> ' );*/

         $( 'ol').append ('<li> <span class="list_items">' + item + '</span> ' +
            '<span class="item_unit">'+ n_item+ '</span>' +
            '<span class="del">delete</span>' +
           '<span class=" edit "> edit</span>' +
           '<span class=" check "> check</span> </li>' );

            $(' .del').on('click ' , function () {
                 $(this).closest('li').remove();

    });
            $('.edit').on('click', function() {
                var item = $(' #add_item[type=text]  ').val();
                var n_item = $(' #qty[type=text]').val();
               /* if (item == ' ') {
                    alert('Enter item')
                }else{
                    alert(item + ' ' + n_item );
                }*/



            });

         return false; //Prevents the page not to reload every time item sinserted

 });

//Empty current input form
     $(".reset_btn ").click( function () {
           var item = $(' #add_item[0]  ').val();
           var n_item = $(' #qty[0]').val();
         $('item').val(' ' );
         $('n_item').val( ' ');


    });






});//End of Document