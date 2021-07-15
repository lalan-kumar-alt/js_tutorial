// document.getElementById("count").innerText=5
// let count=22/7
console.log(count)
let countEl=document.getElementById("count")//pass in arguments
console.log(countEl)
let a=0
function increment()
{
    a++;
    console.log(a);
    // document.getElementById("count").innerText=a
    //or
    countEl.innerText=a

}

let en=document.getElementById("welcome-el")
function save()
{
    console.log(a)
    // en.innerText=en.innerText+a+" - "
    //or
    en.textContent+=a+" - "//on using textcontent will take " " after "-"
    countEl.textContent=0
    a=0;
}
// let username ="per"
// console.log(username)
// let message="you have a pen "
// let messageToUser=message+","+username+"!"
// console.log(messageToUser)


// console.log(4+5)//number hi rahega
// console.log("2"+"4")//string bana dega
// console.log("4"+1)//string bana dega
// console.log(100+"100")//string bana dega



let welcomeEl=document.getElementById("welcome-el")
let name="lalan kumar"
let greeting ="welcome back "
welcomeEl.innerText=greeting+name
welcomeEl.innerText=welcomeEl.innerText+"😂❤️"

