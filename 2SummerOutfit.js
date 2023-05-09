function summerOutfit(input) {

    let degreesN = Number(input[0]);
    let parOfTheDay = (input[1]);
    let outfit ;
    let shoes ;

    if (degreesN >= 10 && degreesN <= 18) {
    
        if (parOfTheDay === "Morning")
        {
        outfit = "Sweatshirt";
        shoes = "Sneakers";
    }
    
    else if (parOfTheDay === "Afternoon" || parOfTheDay === "Evening") {
    
        outfit = "Shirt";
        shoes = "Moccasins"; 
    }

    }  else if (degreesN > 18 && degreesN <= 24) 
    {
        if (parOfTheDay === "Morning")
        {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    
    else if (parOfTheDay === "Afternoon") 
    {
        outfit = "T-Shirt";
        shoes = "Sandals";
    } else if (parOfTheDay === "Evening")
    {
        outfit = "Shirt";
        shoes = "Moccasins";
    }

    } else if (degreesN > 24) 
    {
        if (parOfTheDay === "Morning")
        {
        outfit = "T-Shirt";
        shoes = "Sandals";
    }
    
    else if (parOfTheDay === "Afternoon") 
    {
        outfit = "Swim Suit";
        shoes = "Barefoot";
    } 
    else if (parOfTheDay === "Evening")
    {
        outfit = "Shirt";
        shoes = "Moccasins";
    }
    
} 

console.log(`It's ${degreesN} degrees, get your ${outfit} and ${shoes}.`);

}



summerOutfit(["16", "Morning"])
summerOutfit(["22", "Afternoon"])
summerOutfit(["28", "Evening"])


