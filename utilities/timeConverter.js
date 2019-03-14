module.exports = {
		// 1h30m
		timeParse(string){
				let h = 0;
				let m = 0;
				let arr = string.split('h');
				if(!isNaN(arr[0])){
						let arrMin = arr[0].split('m');
						if(!isNaN(arrMin[0])){
								m = arrMin[0];
						}
				} else {
						h = arr[0];
						let arrMin = arr[0].split('m');
						if(!isNaN(arrMin[0])){
								m = arrMin[0];
						}
				}
				return ((60000 * 60 * h) + (60000 * m));
		}
}
