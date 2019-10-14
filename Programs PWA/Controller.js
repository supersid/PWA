window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector('#add').addEventListener('click',addRecord);
}
let count = 0;
function addRecord(){
    var item = new Item();
    for(let key in item){
        item[key] = document.querySelector('#' + key).value;

    }
    count = count+1;
    itemOperations.add(item);
    printRecord(item);
}
function printRecord(item){
    var tbody = document.querySelector('#item');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
        let cell = tr.insertCell(index);
        cell.innerText = item[key];
        index++;
    }
    var lastTD = tr.insertCell(index);
    // lastTD.appendChild(createIcon('fa fa-trash',trash,item.id));
    // lastTD.appendChild(createIcon('fa fa-trash', trash, item.id));
    lastTD.appendChild(createIcon('fa fa-trash'));
    lastTD.appendChild(createIcon('fa fa-edit'));
}
function createIcon(className,fn,id){
    var iTag = document.createElement("i");
    iTag.className = className;
    iTag.addEventListener('click',fn);
    // iTag.setAttribute("data-itemid",id)
    return iTag;
}