function pasteWord(){
    const fatch1 = document.getElementById("copy-it").value;
    const fatch2 = document.getElementById("paste-here");
    fatch2.value = fatch1;    
}