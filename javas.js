
$(function() {
    $( ".sortable" ).sortable({
      connectWith: ".connectedSortable",
      receive: function( event, ui ) {
        $(this).css({"background-color":""});
      }
    });$().disableSelection();


    $('.add-button').click(function() {
        var txtNewItem = $('#new_text').val();
        $(this).closest('div.list').find('ul').append('<li>  <input type="checkbox" class="checkBoxClass" id="Checkbox1" ><div class="list-item" contenteditable="true">'+txtNewItem+'</div>');
    });    
  });

$('.delete').click(function() {
  var items = $(this).parent('ul').find('input:checked');
  items.closest('li').remove();
});


