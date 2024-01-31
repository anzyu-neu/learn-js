function setColor(set) {
        let changeColor = set;
        if(changeColor) {
            let userColor = document.getElementById('color').value;
            document.getElementById('myPara').style.color = userColor;
        }
}

window.onload = function() {
    let toggle = true;
    document.getElementById('btn').onclick = function() {
      setColor(toggle);  
    };
};
