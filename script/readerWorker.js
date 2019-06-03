onmessage = function(e) {
  //let reader = new FileReaderSync();
  //let result = reader.readAsDataURL(e.data[0]);
  //postMessage(btoa(result));

      var fr = new FileReader();
      var file = e.data[0]
      //fr.addEventListener('error', error, false);
      if (fr.readAsBinaryString) {
          fr.addEventListener('load', function () {
              var string = this.resultString != null ? this.resultString : this.result;
              var result = new Uint8Array(string.length);
              for (var i = 0; i < string.length; i++) {
                  result[i] = string.charCodeAt(i);
              }
              postMessage(result.buffer);
          }, false);
          return fr.readAsBinaryString(file);
      } else {
          fr.addEventListener('load', function () {
              postMessage(this.result);
          }, false);
          return fr.readAsArrayBuffer(file);
      }

/*
  let result = e.data[0] * e.data[1];
  if (isNaN(result)) {
    postMessage('Please write two numbers');
  } else {
    let workerResult = 'Result: ' + result;
    console.log('Worker: Posting message back to main script');
    postMessage(workerResult);
  }*/
}
