class Timer{
    constructor(){
        this.date = new Date();
    }

}
    /**
     * 
     * @param {number} age 
     */
Timer.randomDate(age){
        let currentYear = Timer.date.getFullYear();
        let randomSecond = 0; 
        var begin,end;
        if(age){
            begin = new Date(`${currentYear - age}-1-1`);
            end = new Date(`${currentYear - age}-12-31`); 
        }else{
            begin = new Date(`${currentYear}-1-1`);
            end = new Date(`${currentYear}-12-31`); 
        }
        randomSecond = Math.random() * (end.getTime() - begin.getTime()) + begin.getTime();
        return new Date(randomSecond);
    }

console.log(Timer.randomDate())