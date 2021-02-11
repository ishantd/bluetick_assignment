window.onload = function() {
  console.log("INF FILE")
    $('#contactsubmit').click( function() {
        $.post( 'fs/submitform/', $('form#contact-form').serialize(), function(data) {
             alert("Contact form submitted!");
             $(this).closest('form').find("input, textarea").val("");
           },
        );
    });
  
  };