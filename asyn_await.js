
fetchData()
async function fetchData() {
    console.log("first");
    let result=await delay(2000); // Simulating an asynchronous operation
    console.log(result);
    console.log("third");
    
  }
  function delay(ms)
  {
    return new Promise(resolve =>{ setTimeout(()=>{console.log("second");resolve("success");}, ms)});
  }