function getCountNumber(start, end) {
	var curernt;
	var count;
	var residue;
	var countNumber = 0;
	for (var i = start; i <= end; i++){
		current = i;
		count = 0;
		while (current > 1){
			if ( (current % 2) == 1 ){
				count++;
			} 
			current = Math.floor(current/2);
			if ( current == 1 ){
				count++;
			}
		}
		if ( count == 2 ){
			countNumber++;
		}
	}
	if (countNumber == 0){
		return false;
	}else{
		return countNumber;
	}
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
	task: getCountNumber
}
// вывести в консоль тип переменной
//console.log(typeof());