let movies=[{
	Title:"In Bruges",
	Rating:5,
	Watched:"seen" //supposed to be boolean
}, {
	Title:"Frozen",
	Rating:4.5,
	Watched:"not seen"
}, {
	Title:"Mad Max Furry Road",
	Rating:5,
	Watched:"seen"
}, {
	Title:"Les Miserables",
	Rating:3.5,
	Watched:"not seen"
}
];

movies.forEach(function(element){
	console.log("You have "+element.Watched+" \""+element.Title+"\" - "+element.Rating+" stars");
})

//OBJECTS can have FUNCTIONS;

let dogSpace={};
dogSpace.speak=function(){
	return "WOOF!";
}
let catSpace={
	speak:function(){
		return "MEOW!";
	}
};
dogSpace.speak();
catSpace.speak();
