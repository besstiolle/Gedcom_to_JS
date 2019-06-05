"use strict";

onmessage = function(e) {

      var fr = new FileReader();
      var file = e.data[0]
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
}
