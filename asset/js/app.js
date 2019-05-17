const MyClass=(function(){
	function MyClass(data){
		console.log(data);
	}
	function Add(){
		var total = 0;
		for(var i = 0;i<arguments.length;i++){
			if((typeof arguments[i])==='number'){
				total+=arguments[i];
			}else if((typeof arguments[i])!='number'){
				throw Error("参数类型必须为数字类型!");
			}
		}
		return total;
	}
	return {add:Add};
})();