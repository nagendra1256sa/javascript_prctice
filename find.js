const data =[1,2,3,4,5]

let findValue= data.find((x)=> {
    return x===2
})
console.log(findValue);

let filterValue=data.filter((x)=>
{
    return x>2
})
console.log(filterValue);