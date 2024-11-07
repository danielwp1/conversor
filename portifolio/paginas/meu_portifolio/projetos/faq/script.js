$(document).ready(function(){
  $(".pergunta").click(function(){
   $(this).next("p").slideToggle(500);
   $(this).find(".seta").toggleclass("rotacionar");
});
});