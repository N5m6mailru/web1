    "use strict";
    /* 
    * To change this license header, choose License Headers in Project Properties.
    * To change this template file, choose Tools | Templates
    * and open the template in the editor.
    */

    let arrayBird=[];
    while(confirm("Вы хотите ввести данные?"))
    {
        let bird={};
        bird.state=prompt("Укажите квадрат:");
        bird.state=parseInt(bird.state);
        bird.birdName=prompt("Укажите вид трясогузок:");
        bird.population=prompt("Укажите количество:");
        bird.population=parseInt(bird.population);
        arrayBird.push(bird);
    }
    function compareBirds(birdA,birdB)
    {
        return birdA.population-birdB.population;
    }
    arrayBird.sort(compareBirds);
    alert("Самое большое количество "+arrayBird[arrayBird.length-1].birdName+"трясогузки - численностью "+arrayBird[arrayBird.length-1].population+"особей");



