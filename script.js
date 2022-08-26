class Item{
    constructor(a,b,c,d,e){
        this.name=a;
        this.category=b;
        this.price=c;
        this.location=d;
        this.img=e;
        this.des="This text is example for description";
    }
}
let item1=new Item("Acer aspire","laptop",30000,"chennai","img/laptop.jpg");
let item2=new Item("Dell Inspiron","laptop",50000,"mumbai","img/laptop.jpg");
let item3=new Item("Hp victus","laptop",20000,"chennai-","img/laptop.jpg");
let item4=new Item("samsung","phone",25000,"bangalore","img/phone.jpg");
let item5=new Item("Oneplus","phone",40000,"mumbai","img/phone.jpg");
let item6=new Item("redmi","phone",15000,"bangalore","img/phone.jpg");
let item7=new Item("iphone","phone",45000,"bangalore","img/phone.jpg");
let item8=new Item("dinning","table",8000,"chennai","img/table.jpg");
let item9=new Item("working table","table",12000,"chennai","img/table.jpg");



// function for price Range
 showVal=ele=> ele.nextSibling.innerHTML=ele.value;

 let cards=[item1,item2,item3,item4,item5,item6,item7,item8,item9];

 function trial(){
    displayCard(cards);
 }

//  display function
 function displayCard(tiles){
  let append = document.getElementById("append");
  if(append.innerHTML!=null){
    append.innerHTML="";
  }
  for(let i=0;i<tiles.length;i++){
    let div = document.createElement('div');
    div.setAttribute("class","card");
    let img = document.createElement('img');
    img.setAttribute("src",tiles[i].img);
    div.appendChild(img);
    let nam = document.createElement('p');
    nam.innerHTML="Name :"+tiles[i].name;
    div.appendChild(nam);
    let pri = document.createElement('p');
    pri.innerHTML="Price : ₹ "+tiles[i].price;
    div.appendChild(pri);
    let des = document.createElement('p');
    des.innerHTML=tiles[i].des;
    div.appendChild(des);
    append.appendChild(div);
   }
 }
    
//  creating object
// (function(){
//   let cls = document.getElementsByClassName('new-func');
//   for(let i=0;i<cls.length;i++){
//     cls[i].addEventListener("change",display);
//   }
// })();

function priceRange(){
    let min = document.getElementById("min").innerHTML;
    let max = document.getElementById("max").innerHTML;
    if(min>=max){
        alert("Minimum value should be less than maximum Value");
        return;
    }
    let newArr = cards.filter(byPrice);
    function byPrice(arr){
        return (arr.price > min) &&( arr.price < max);
    }
    displayCard(newArr);
}

function byCategory(ele){
    let checkvalue = ele.value;
    if(checkvalue == "all"){
        displayCard(cards);
    }else{
     let newArr = cards.filter(check);
     function check(arg){
        return arg.category == checkvalue; 
     }
     displayCard(newArr);
    }
    
}
