'use strict';

//01 Recorrido árbol DOM
let div = document.getElementById('ej01');
let ulist = document.createElement("ul");

loop(document);
function loop(node) {
    let nodes = node.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        if (!nodes[i]) {
            continue;
        }

        if (nodes[i].childNodes.length > 0) {
            let li = document.createElement('li');
            let nodeText = document.createTextNode(nodes[i].nodeName);
            li.appendChild(nodeText);
            ulist.appendChild(li);
            for (let j = 0; j < nodes[i].attributes.length; j++) {
                let attr = nodes[i].attributes[j];
                let attrNodeText = document.createTextNode(attr.name + ': ' + attr.value);
                let internalUl = document.createElement('ul');
                let internalLi = document.createElement('li');
                internalLi.appendChild(attrNodeText);
                internalUl.appendChild(internalLi);
                ulist.appendChild(internalUl);
            }
            loop(nodes[i]);
        }
    }
}
div.appendChild(ulist);