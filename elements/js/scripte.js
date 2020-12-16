//----Take Values From Html-------------
function start() {
    var opn = document.getElementsByName("operation");
    for (let i = 0; i < opn.length; i++) {
        if (opn[i].checked)
            opn = opn[i].value;
    }

    var shiftValue = document.getElementById("hash").value;
    var message = document.getElementById("userInput").value;
    //--------------------------------------------
    
    //----Send Values To Functions----------------

    if (opn == 1) {
        // var encrypted_message = encrypt(message, shiftValue)
        //console.log(encryption(message, shiftValue));
        document.getElementById("ourOutput").value = encryption(message, shiftValue)
    } else {
        //let decrypted_message = decrypt(message, shiftValue)
        //console.log(decrypted_message);
        document.getElementById("ourOutput").value = decryption(message, shiftValue)
    }


}

//--------------------------------------------


function encryption(message, shift_value) {
    var msg = message
    var sh_val = shift_value
    var result = ' ';
    for (let i = 0; i < msg.length; i++) {
        var value = msg[i]

        if (value == ' ') {
            result += value
        } else if (value == value.toUpperCase()) {
            var elementUpper = value.charCodeAt(0);
            for (let i = 0; i < sh_val; i++) {
                if (elementUpper >= 65 && elementUpper <= 90) {
                    elementUpper++
                } else {
                    elementUpper = 65;
                }

            }
            result += String.fromCharCode(elementUpper)
        } else if (value == value.toLowerCase()) {
            var elementLower = value.charCodeAt(0);
            for (let i = 0; i < sh_val; i++) {
                if (elementLower >= 97 && elementLower <= 122) {
                    elementLower++
                } else {
                    elementLower = 97;
                }

            }
            result += String.fromCharCode(elementLower)
        }
    }
    result = result.trim();

    return result
}




function decryption(message, shift_value) {
    var msg = message
    var sh_val = shift_value
    var result = ' ';
    for (let i = 0; i < msg.length; i++) {
        var value = msg[i]

        if (value == ' ') {
            result += value
        } else if (value == value.toUpperCase()) {
            var elementUpper = value.charCodeAt(0);
            for (let i = 0; i < sh_val; i++) {
                if (elementUpper >= 65 && elementUpper <= 90) {
                    elementUpper--
                } else {
                    elementUpper = 90;
                }

            }
            result += String.fromCharCode(elementUpper)
        } else if (value == value.toLowerCase()) {
            var elementLower = value.charCodeAt(0);
            for (let i = 0; i < sh_val; i++) {
                if (elementLower >= 97 && elementLower <= 122) {
                    elementLower--
                } else {
                    elementLower = 122;
                }

            }
            result += String.fromCharCode(elementLower)
        }
    }
    result = result.trim();

    return result
}


function copyText() {
    var copyText = document.getElementById("ourOutput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied";
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
