$( document ).ready(function() {
   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
   // voir plus : https://www.w3schools.com/js/js_htmldom.asp
  $("#Valider").on("click",function(event) 
{ 
  event.preventDefault(); 
  console.log( "click" ); 
  $('#myModal').modal("show");
  
  
  if  ($("#Nom").val().length<4){
  $('#myModal').modal("show");
  }
  
  else if ($("#Prenom").val().length<4){
  $('#myModal').modal("show");
  }
  
  else if ($("#Adresse").val().length<4){
  $('#myModal').modal("show");
  }
  
  else if ($("#Mail").val().length<4){
  $('#myModal').modal("show");
  }
  
   else if ($("#Datedenaissance").val().length<4){
  $('#myModal').modal("show");
  }
  
  
  else {
	  
	 $('.modal-title').html("Bienvenue " + $("#Nom").val());
	 $('.modal-body').html(" <p>vous etre nes le : " + $("#Datedenaissance").val()+ "</p>");
	 $('.modal-body').append("<img src='https://maps.googleapis.com/maps/api/staticmap?markers="+$("#Adresse").val()+"&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg'>");
	 
	  $('#myModal').modal("show");
  }
  
 
  
  
});


});