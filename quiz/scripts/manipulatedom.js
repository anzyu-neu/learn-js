window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  });

  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createEditBtn(i, 0)) // add edit text button
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function createEditBtn (x, y) {
  let editBtn = document.createElement("button");
  editBtn.innerText = "Edit text";
  editBtn.onclick = function() {
    editCell(x, y);
  };
  return editBtn;
}

function editCell(x, y) {
  let table = document.querySelector("table");
  let cell = table.rows[x].cells[y];
  let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter Cell (x,y)...";
    inputField.onfocus = function() {
      if (inputField.value === inputField.placeholder) {
        inputField.value = '';
      }
    };
    cell.innerText = '';
    cell.appendChild(inputField);
    inputField.focus();
}