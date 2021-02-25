$(document).ready(function () {

  $('#todo-table form').on('submit', function () {

    var item = $('#todo-table form input');
    var todo = { item: item.val() };
    console.log("1", todo);

    $.ajax({
      type: 'POST',
      url: '/todo',
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });

    return false;

  });

  $('li .del-button').on('click', function () {
    var item = $(this).parent().parent().children('span').text().replace(/\s/g, "-");
    console.log(item);
    $.ajax({
      type: 'DELETE',
      url: '/todo/' + item,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
  });

  $('#editTodo').on('submit', function () {
    var last = $('#editTodo input').attr('selectedTodo');
    var item = $('#editTodo input');
    var todo = {
      item: item.val()
    }
    $.ajax({
      type: 'PUT',
      url: '/todo/' + last,
      data: todo,
      success: function (data) {
        //do something with the data via front-end framework
        location.reload();
      }
    });
    return false
  })


  $('.customModalBtn').click(function (e) {
    $('#editTodo input').attr('selectedTodo', $(this).parent().parent().children('span').text().replace(/\s/g, "-"))

    $('.customModal').toggle('activer');
    // $('.customModal').css({ display: 'block'});



  });

});
