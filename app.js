let filter=document.getElementById("filter")
filter.addEventListener("keyup",xyz)
let submit=document.getElementById("addForm")
submit.addEventListener("submit",addItems)
let del=document.getElementById("items")
del.addEventListener("click",remove)

function xyz(e){
    let text=e.target.value.toLowerCase()
    let k=document.getElementsByTagName("li")
    let arr=[]
    for(i=0;i<k.length;i++){
        arr.push(k[i].firstChild.textContent.toLowerCase())
    }
    for(i=0;i<k.length;i++){
        if(arr[i].includes(text)){
            k[i].style.display="block"
        }else{
            k[i].style.display="none"
        }
    }
}

let x=document.createElement("input")
x.setAttribute("id","descrp")
x.setAttribute("type","text")
x.setAttribute("placeholder","add description")
x.setAttribute("class","form-control mr-2")

let y=document.getElementById("addForm")
let z=document.getElementById("sub")
y.insertBefore(x,z)

function addItems(e){
    e.preventDefault()
    let a=document.getElementById("item")
    let b=document.getElementById("descrp")
    let c=document.getElementById("items")
    let newli=document.createElement("li")
    newli.className="list-group-item"
    newli.innerText=a.value+" & description : "+b.value
    let btn=document.createElement("button")
    btn.className="btn btn-danger btn-sm float-right delete"
    btn.innerText="X"
    newli.appendChild(btn)
    c.appendChild(newli)
}

function remove(e){
    if(e.target.className.includes('delete')){
        if(confirm("are u sure?")){
            let a=e.target.parentElement
            a.parentElement.removeChild(a)
        }
    }
}

let j=document.getElementsByClassName("list-group-item")
for(i=0;i<j.length;i++){
    let newbtn=document.createElement("button")
    newbtn.className="btn btn-secondary btn-sm float-right"
    newbtn.innerText="EDIT"
    j[i].appendChild(newbtn)
}