
$(document).ready(function() {
 $(' #error').hide();
    //Add items

    //Event Listner to SAVE button
    var item = "";
    var  n_item = "";
    //
    $('.save_btn').click( function () {

           if($('input' ).val().trim().length == 0){
                   $(' #error').show();


            }else{

        var item = $(' #add_item ').val();
        var n_item = $(' #qty').val();

         $( 'ol').append ('<li> <span class="list_items">' + item + '</span> ' +
            '<span class="item_unit">'+ n_item+ '</span>' +
            '<span class="del" ><img class = "delimg"src="images/del.png" alt= "delete Item" /></span>' +
           '<span class=" edit "> <img class = "editimg"src="images/edit2.png" alt = "Edit item" /></span>' +
           '<span class=" check "> <img class = "checkimg"src="images/check.png"  alt = "check out Item"/></span> </li>' );
         $('.item_section').show();
          $(' #error').hide();

}

           $(' .del').on('click ' , function () {
                 $(this).closest('li').remove();

     });
            $(' .edit').click (function() {
            $(this).closest(' input').val();
               //alert('Edit button detected');
         $('.item_section').hide();
});
            $('.check').click(function () {
                $(this).closest(' li').css('backgroundColor', '#D8D8D8');


            });

         return false; //Prevents the page not to reload every time item sinserted

 });

//Empty current input form
     $(".reset_btn ").click( function () {
          $('#add_item[type=text]').val( ' ');
                $('#qty[type=text]').val( ' ');



    });






});//End of Document