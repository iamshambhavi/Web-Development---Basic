//Check Off Specific Todos by clicking
/*$("li").click(function(){
	//$(this).css("color","Gray");
	//$(this).css("text-decoration","line-through");
	//$(this).css("color") <--rgb version me color batata h
	if($(this).css("color")==="rgb(128, 128, 128)"){
		$(this).css({
			color: "Black",
			textDecoration: "none"
		});
	}
	else{
		$(this).css({
			color: "Gray",
			textDecoration: "line-through"
		});
	}
});    OR  */ 
//We have to add on listeners to the entire parent ul as if we do it to lis only then it will take the initial values of lis present so do it on the parent element
//it says whenever an li is clicked under this ul
//So basically adding events to the elements that are already present when the page loads, parent is always present
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
})

//Click on X to delete Todo
$("ul").on("click","span",function(event){
	//this gives the span parent gives the li
	$(this).parent().fadeOut(500,function(){
		//so here this is the parent
		$(this).remove();
	});
	// it stops further more event calling as if some events present on its parents
	event.stopPropagation();
})


//Creation Of new Todos
$('input[type="text"]').keypress(function(event){
	if(event.which===13){
		//extract value of input
		let TodoText=$(this).val();
		//clears the input again
		$(this).val("");
		//create a new li to its parent ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+TodoText+"</li>");
	}
})

$(".fa-plus").click(function(){
	$('input[type="text"]').fadeToggle();
})
