
var siteNameInput = document.querySelector("#name");
var siteURLInput = document.querySelector("#ULR");


var list;
if(localStorage.getItem("url") == null){
    list = [];
}else{
    list = JSON.parse(localStorage.getItem("url"));
    display();
}


// var getURL = document.querySelector("#buttoncontainer .buttonSubmit");
// getURL.addEventListener("click", submit);



function submit(){
    var site = {
        name: siteNameInput.value,
        url : siteURLInput.value,
    }

    list.push(site);
    localStorage.setItem("url", JSON.stringify(list));
    display();
    clear();
   
    
}

function display(){
    var container = "";
    for(var i = 0; i < list.length; i++){
    container += `
    <div class="d-flex my-3 p-3 bookMark1">
        <h2>${list[i].name}</h2>
        <a class="btn btn-primary" href="https://${list[i].url}" target="_blank">Visit</a>
        <button  onclick="DeleteBookMark(${i})" class="btn btn-danger btnDelete">Delete</button>
        <button  onclick="retriveSData(${i})" class="btn btn-warning btnDelete">Update</button>
    </div>
    `
    }
    document.querySelector(".site").innerHTML = container;

}


function clear(){
    siteNameInput.value = "";
    siteURLInput. value = "";
}

function DeleteBookMark(index){
    list.splice(index,1);
    display();
    localStorage.setItem("url", JSON.stringify(list));
}

function retriveSData(index){
    siteNameInput.value = list[index].name;
    siteURLInput.value = list[index].url;
    document.getElementById("buttoncontainer").innerHTML = `
    <button onclick="updateSite(${index})" class="btn btn-warning text-white">Update Product</button>`
          
    
}


function updateSite(index){
    list[index].name = siteNameInput.value;
    list[index].url = siteURLInput.value;
    display();
    localStorage.setItem("url", JSON.stringify(list));
    clear();
    document.getElementById("buttoncontainer").innerHTML = `
    <button id="buttonSubmit" class="btn btn-primary buttonSubmit" onclick="submit()">Submit</button>`

}

function searchSite(word){
    var container = "";
    for(var i = 0; i < list.length; i++){
        if(list[i].name.toLowerCase().includes(word.toLowerCase())){
            container += `
            <div class="d-flex my-3 p-3 bookMark1">
                <h2>${list[i].name}</h2>
                <a class="btn btn-primary" href="https://${list[i].url}" target="_blank">Visit</a>
                <button  onclick="DeleteBookMark(${i})" class="btn btn-danger btnDelete">Delete</button>
                <button  onclick="retriveSData(${i})" class="btn btn-warning btnDelete">Update</button>
            </div>
            `
        }
  
    }
    document.querySelector(".site").innerHTML = container;
}