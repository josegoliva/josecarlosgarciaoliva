
$(function()
{
	$('#form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                dataType: 'json' 
            });        
        
      });	
});
