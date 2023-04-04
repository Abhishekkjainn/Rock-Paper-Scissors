//get DOM elements
const gameContainer = document.querySelector(".container"),
userresult = document.querySelector(".userresult img"),
cpuresult = document.querySelector(".cpuresult img"),
result = document.querySelector(".result"),
optionimagediv = document.querySelectorAll(".optionimageinside"),
score = document.querySelector(".scorediv")
let scoreboard = 0;

optionimagediv.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        optionimagediv.forEach((image,index2)=>{
            index!== index2 && image.classList.remove("active");

            
        });




        /*let imageSrc = e.target.querySelector("img").src;
        userresult.src = imageSrc
        //generate random no betwwen 0 and 2
        let randomnumber = Math.floor(Math.random()*3);
        let cpuimg =["rock1.png","paper.png","scissors.png"];
        cpuresult.src=cpuimg[randomnumber];

        let cpuvalue = ["R","P","S"][randomnumber]
        let uservalue = ["R","P","S"][index]

        let outcomes ={
            RR:"DRAW",
            RP:"CPU",
            RS:"USER",
            PP:"DRAW",
            PR:"USER",
            PS:"CPU",
            SS:"DRAW",
            SR:"CPU",
            SP:"USER"

        };
        let outcomevalue = outcomes[uservalue + cpuvalue];

        result.textContent=uservalue === cpuvalue ? "Match Draw" : `${outcomevalue} won!!`;
        


        if(outcomevalue=="USER"){
            scoreboard++;
        }
        console.log(outcomevalue);
        console.log(score)
        scorediv.textContent=uservalue === cpuvalue ? scoreboard : `${outcomevalue} scoreboard` ;*/
       
        
        gameContainer.classList.add("Start")

let time = setTimeout(()=>{
    gameContainer.classList.remove("Start")
    let imageSrc = e.target.querySelector("img").src;
    userresult.src = imageSrc
    //generate random no betwwen 0 and 2
    let randomnumber = Math.floor(Math.random()*3);
    let cpuimg =["rock1.png","paper.png","scissors.png"];
    cpuresult.src=cpuimg[randomnumber];

    let cpuvalue = ["R","P","S"][randomnumber]
    let uservalue = ["R","P","S"][index]

    let outcomes ={
        RR:"DRAW",
        RP:"CPU",
        RS:"USER",
        PP:"DRAW",
        PR:"USER",
        PS:"CPU",
        SS:"DRAW",
        SR:"CPU",
        SP:"USER"

    };
    let outcomevalue = outcomes[uservalue + cpuvalue];

    result.textContent=uservalue === cpuvalue ? "Match Draw" : `${outcomevalue} won!!`;
    


    if(outcomevalue=="USER"){
        scoreboard++;
    }
    console.log(outcomevalue);
    console.log(scoreboard)
    




},)



    });
})