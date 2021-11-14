console.log('app.js');

var start_shamsi = '1400/08/23' ;

const today = ()=>{
    _date = new Date();
    return moment(_date).format('YYYY/MM/DD')
}

const miladi = (jalalidate)=>{
    var _date = moment(jalalidate,'jYYYY/jM/jD');
    return _date.format('YYYY/MM/DD')
}


const addDays = (start , days)=>{
    var currentDate = moment(start,'jYYYY/jM/jD');
    // console.log(currentDate.format('YYYY/MM/DD'))
    currentDate.add(days, 'days');
    return currentDate.format('jYYYY/jMM/jDD');
};

const dayDiff = (start , end)=>{
    // var startDate = moment(start,'jYYYY/jM/jD');
    // var endDate = moment(start,'jYYYY/jM/jD');
    // return endDate.diff(startDate, 'days');

    var a = moment(end);
    var b = moment(start);
    return a.diff(b, 'days') // 1

};


const calc = (days)=>{
    
    var start_miladi = miladi(start_shamsi);
    var end_shamsi = addDays(start_shamsi , days);
    var end_miladi = miladi(end_shamsi);
    var diff = dayDiff(today(),end_miladi);
    
    // console.log('start_shamsi' , start_shamsi)
    // console.log('start_miladi' , start_miladi)
    // console.log('end_shamsi' , end_shamsi)
    // console.log('end_miladi' , end_miladi)
    // console.log('diff' , diff)
    // console.log('today' , today())
    
    return {
        'today' : today(),
        'start_shamsi' : start_shamsi,
        'end_shamsi' : end_shamsi,
        'start_miladi' : start_miladi,
        'end_miladi' : end_miladi,
        'remain' : diff , 
        'days' : days
    };
}; 

console.log(calc(90))
// var _end = addDays(_start , 10) ;
// var diff = dayDiff(_start , _end) 

// console.log(_start , _end , diff)




