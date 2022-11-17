addEventListener("load", ()=>{

    const startCover = document.getElementById("startCover");
    setTimeout(()=>{
        startCover.style.width = "0";
        document.documentElement.style.setProperty('--widthOfElement', '0%');
    }, 1000);
    
    const background = document.getElementById("background");
    setTimeout(()=>{
        background.style.zIndex = "100";
    },2200);

    const mainContentContainer = document.getElementById("mainContentContainer");
    const allPage = document.querySelector("body");
    setTimeout(()=>{
        mainContentContainer.style.display = "flex";
        allPage.style.overflowY = "scroll";
    }, 2200);

    const mainContent = document.getElementById("mainContent");
    const nav = document.querySelector("nav");
    const scrollIndicator = document.getElementById("scrollIndicator");
    setTimeout(()=>{
        mainContent.style.opacity = "1";
        nav.style.opacity = "1";
        scrollIndicator.style.opacity = "1";
    }, 2000);

    const firstCross = document.getElementById("firstCross");
    const firstElements = firstCross.children;
    const secondCross = document.getElementById("secondCross");
    const secondElements = secondCross.children;
    setInterval(()=>{
        
        let num1, num2, num3, num4, num5, num6;
        do{
            num1 = Math.floor(Math.random() * 19)
        }while(num1 == 4 || num1 == 5 || num1 == 6 || num1 == 7 || num1 == 12 || num1 == 13 || num1 == 14 || num1 == 15);
        do{
            num2 = Math.floor(Math.random() * 19)
        }while(num2 == 4 || num2 == 5 || num2 == 6 || num2 == 7 || num2 == 12 || num2 == 13 || num2 == 14 || num2 == 15 || num2 == num1);
        do{
            num3 = Math.floor(Math.random() * 19)
        }while(num3 == 4 || num3 == 5 || num3 == 6 || num3 == 7 || num3 == 12 || num3 == 13 || num3 == 14 || num3 == 15 || num3 == num2 || num3 == num1);

        do{
            num4 = Math.floor(Math.random() * 19)
        }while(num4 == 4 || num4 == 5 || num4 == 6 || num4 == 7 || num4 == 12 || num4 == 13 || num4 == 14 || num4 == 15);
        do{
            num5 = Math.floor(Math.random() * 19)
        }while(num5 == 4 || num5 == 5 || num5 == 6 || num5 == 7 || num5 == 12 || num5 == 13 || num5 == 14 || num5 == 15 || num5 == num4);
        do{
            num6 = Math.floor(Math.random() * 19)
        }while(num6 == 4 || num6 == 5 || num6 == 6 || num6 == 7 || num6 == 12 || num6 == 13 || num6 == 14 || num6 == 15 || num6 == num5 || num6 == num4);

        for(i in firstElements){
            if(i == 4 || i == 5 || i == 6 || i == 7 || i == 12 || i == 13 || i == 14 || i == 15 || i == "item" || i == "namedItem" || i == "length") continue;
            if(i == num1) firstElements[i].style.color = "#0353A4";
            else{
                if(i == num2) firstElements[i].style.color = "#0353A4";
                else{
                    if(i == num3) firstElements[i].style.color = "#0353A4";
                    else{
                        firstElements[i].style.color = "#212529";
                    }
                }
            }
        }
        for(i in secondElements){
            if(i == 4 || i == 5 || i == 6 || i == 7 || i == 12 || i == 13 || i == 14 || i == 15 || i == "item" || i == "namedItem" || i == "length") continue;
            if(i == num4) secondElements[i].style.color = "#0353A4";
            else{
                if(i == num5) secondElements[i].style.color = "#0353A4";
                else{
                    if(i == num6) secondElements[i].style.color = "#0353A4";
                    else{
                        secondElements[i].style.color = "#212529";
                    }
                }
            }
        }

    },1500);
});
