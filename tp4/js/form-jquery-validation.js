$( document ).ready(function() {
	 console.log( "DOM ready!" );


     $("#gps").on("click",function(event)
        { event.preventDefault ();
          getLocation ();
        });
		
		
$("#name").keydown(function()
        { var L= $(this).val().length;
		
        $("#Nam1").html(L);
        });
		
$("#firstname").keydown(function()
        { var L= $(this).val().length;
        $("#Nam2").html(L);
        });
		
		
		$("#birth").keydown(function()
        { var L= $(this).val().length;
		
        $("#Nam3").html(L);
        });
		
		$("#adresse").keydown(function()
        { var L= $(this).val().length;
		
        $("#Nam4").html(L);
        });
		
	    $("#mail").keydown(function()
        { var L= $(this).val().length;
		
        $("#Nam5").html(L);
        });
		
		
   $("#ajouter").on("click",function(event) {
	    event.preventDefault();
		if ($("#name").val().length < 5 || $("#firstname").val().length < 5 || $("#birth").val().length < 5 || $("#adresse").val().length < 5 || $("#mail").val().length < 5)
    {
	   $('#myModal').modal("show");
	   
	}
	else
	{
		//contactStore.add("qsdqsd","qsdqsd","dsqfsdf","dsfsdfsdf","dsfsdfsdf");
		contactStore.add($("#name").val(),$("#firstname").val(),$("#birth").val(),$("#adresse").val(),$("#mail").val());
		contactList = contactStore.getList();
		$("tbody").html('');
		for(var index in contactList){
			$("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
         }
		 
}
		
	});
		
		
		
		
		
});