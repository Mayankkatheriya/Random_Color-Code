let container = document.querySelector(".elements");
let codes = ["0", "1", "2", "3", "4", '5', "6", "7", "8", "9", "A", "b", 'C', "d", "E", "f"];
function getCharacter(index) {
	return codes[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * codes.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}
function createEle(){
    const div = document.createElement("div");
    let newColor = generateNewColor();
    div.classList.add("element")
    div.style.backgroundColor = `${newColor}`
    div.innerText = `${newColor}`
    return div;
}
for(let i=0; i<30; i++){
    container.appendChild(createEle())
}