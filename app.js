let filter=document.getElementById("filter")
filter.addEventListener("keyup",xyz)


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