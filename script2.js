//test 2
let a = prompt('Nhap a');
a = parseInt(a)
function numberOneTriangle(){
	for(let i=0 ;i < a; i++) {
		for(let n = 0; n <= i; n++) {
			document.write(" * ")
		}
		document.write("<br>")}
	}
	numberOneTriangle();