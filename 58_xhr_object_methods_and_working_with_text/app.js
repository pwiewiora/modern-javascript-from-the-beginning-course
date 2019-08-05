document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR object
  const xhr = new XMLHttpRequest();
  
  // OPEN (from methods and properies associated with xhr object)
  xhr.open('GET', 'data.txt', true); // Third parameter refers to async
  
  //console.log('READYSTATE', xhr.readyState); // can include this to check ready state


  // Optional - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function(){
    // HTTP statuses
    // 200: "OK"
    //403: "Forbidden"
    //404: "Not found"
    if(this.status === 200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // OLD WAY: (had to check for ready state change)
  // xhr.onreadystatechange = function(){
  //   if(this.status === 200 && this.readyState === 4){
  //     console.log(this.responseText);
  //   }
  // }
  xhr.onerror = function(){
    console.log('Request error...');
  }
  xhr.send();
}
  /* readyState values
  0: request not initialized
  1: server connection established
  2: request received
  3: processing request
  4: request finished and response is ready
  */