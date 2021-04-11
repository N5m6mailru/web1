        /* 
        * To change this license header, choose License Headers in Project Properties.
        * To change this template file, choose Tools | Templates
        * and open the template in the editor.
        */

        var arrayTown=[];
        while(confirm("Вы хотите ввести город?"))
        {
            var town={};
            town.townName=prompt("Укажите название:");
            town.state=prompt("Укажите страну:");
            town.population=prompt("Укажите население:");
            town.population=parseInt(town.population);
            arrayTown.push(town);
        }
        function compareTowns(townA,townB)
        {
            return townA.population-townB.population;
        }
        arrayTown.sort(compareTowns);
        alert("Самый населенный город "+arrayTown[arrayTown.length-1].townName+"с населением в "+arrayTown[arrayTown.length-1].population+"человек");



