<script>

function encriptar() {
    let text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shift').value);
    const encriptar = caesarCipher(text, shift);
    document.getElementById('result').value = encriptar;
}

function desencriptar() {
    let text = document.getElementById('textInput').value;
    const shift = parseInt(document.getElementById('shift').value);
    const desencriptar = caesarCipher(text, -shift);
    document.getElementById('result').value = desencriptar;
}

function caesarCipher(str, shift) {
    return str.split('').map(char) {
        if (char == "e") {
            
            ///return String.fromCharCode("enter");
            console.log("enter")
        } 
        else if (char == "i") {
            ///return String.fromCharCode("imes");
            console.log("imes")
        } 
        else if (char == "a"){
            ///return String.fromCharCode("ai");
            console.log("ai");
        }
        else if(char == "o"){
            ///return String.fromCharCode ("ober");
            console.log("ober")
        } 
        else if (char == "u"){
            ///return String.fromCharCode ("ufat");
            console.log("afat")
        }
    }
    }
    
    </script>
