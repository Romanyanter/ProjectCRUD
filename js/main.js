var nameprodect = document.getElementById("Nn");
var priceprodect = document.getElementById("Pn");
var categoryprodect = document.getElementById("Cn");
var Discriptionprodect = document.getElementById("Dn");
var mainindex = 0;
// array to story any object
var allprodect;
if(localStorage.getItem('allprodect')== null){
allprodect=[];
}else{
  allprodect=JSON.parse(localStorage.getItem("allprodect"));
  DisplayAllprodects();
  }

// Function of buttone
function addprodect(){
  var errormassage = vaildprdects()
  if(errormassage==true){
    var prodects={
      Name: nameprodect.value,
      Price: Number(priceprodect.value),
      Category: categoryprodect.value,
      Discription: Discriptionprodect.value,
    }
  
    if(document.getElementById("addprodect").innerHTML=="Add prodect"){
      allprodect.push(prodects);
    }
    else
    {
      allprodect.splice( mainindex , 1 , prodects);
      document.getElementById("addprodect").innerHTML = "Add prodect";
  
    }
    localStorage.setItem("allprodect" , JSON.stringify( allprodect ));
  }
  else{
    alert(errormassage);
    
  }

   // caling clearcod
  clearcod();
   // caling DisplayAllprodects
  DisplayAllprodects();
  
  
}
// Function clear code
function clearcod(){
  nameprodect.value="";
  priceprodect.value="";
  categoryprodect.value="";
  Discriptionprodect.value="";
}
// Function Display all prodects
function DisplayAllprodects(){
  var carnnoa="";
  for(var i = 0; i < allprodect.length ; i++ ){
    carnnoa+=` <tr>
    <td>${[i]}</td>
    <td>${allprodect[i].Name}</td>
    <td>${allprodect[i].Price}</td>
    <td>${allprodect[i].Category}</td>
    <td>${allprodect[i].Discription}</td>
    <td><button onclick="UpDataElement(${i})"  class="btn btn-outline-info">Updata</button></td>
    <td><button onclick="DeletElement(${i})" class="btn btn-outline-danger">Delet</button></td>
    `


  }
  document.getElementById("tbody").innerHTML = carnnoa;
}
// Function Delet elmement
function DeletElement(idx){
  allprodect.splice( idx , 1 );
  localStorage.setItem('allprodect',JSON.stringify(allprodect));
// caling Function Display all prodects
  DisplayAllprodects();
}
// Function Updata All Element
function UpDataElement(index){
  mainindex = index;
  nameprodect.value = allprodect[index].Name;
  priceprodect.value = allprodect[index].Price;
  categoryprodect.value = allprodect[index].Category;
  Discriptionprodect.value = allprodect[index].Discription;
  
  document.getElementById('addprodect').innerHTML = "Updata prodect";
}
// Function Search all ELement
function searchelement(term){
  var cartonn="";
  for( var i = 0 ; i < allprodect.length ; i++){
    if(allprodect[i].Name.toLowerCase().indexOf(term.toLowerCase())== 0 ||
    allprodect[i].Category.toLowerCase().indexOf(term.toLowerCase())== 0 ||
    allprodect[i].Discription.toLowerCase().indexOf(term.toLowerCase())== 0)
    {
      cartonn +=   ` <tr>
      <td>${[i]}</td>
      <td>${allprodect[i].Name}</td>
      <td>${allprodect[i].Price}</td>
      <td>${allprodect[i].Category}</td>
      <td>${allprodect[i].Discription}</td>
      <td><button onclick="UpDataElement(${i})"  class="btn btn-outline-info">Updata</button></td>
    <td><button onclick="DeletElement(${i})" class="btn btn-outline-danger">Delet</button></td>
      </tr>`
    }


  }
  document.getElementById('tbody').innerHTML = cartonn;
}
// Function vaild All Prodect
function vaildprdects(){  
    var nameRegex = /^[A-Z][a-z]{3,7}$/;
    var priceRgex = /^[2-7][0-9]|18|19|80 $/;
    var CategoryRgex = /^[A-z][a-z]{4,10}$/
  
    if(nameRegex.test(nameprodect.value)==false){
      return"Name must be From 4 to 8 characters starts with captile letter";
    }
    else if(priceRgex.test(priceprodect.value)==false){
      return"Price must be 18 to 80";

    }
    else if(CategoryRgex.test(categoryprodect.value)==false){
      return"Category must be From 4 to 10 must be one charachter capitel"

    }
    return true;
}

  

