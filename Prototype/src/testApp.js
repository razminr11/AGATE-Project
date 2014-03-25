var money = 100000;
var rNum = 1;
var rCost = 50000;
var lvl = 0;
var exp = 0;
var levelReq = new Array(100, 250, 400, 550, 700);
var started = false;


/*$(document).ready(function() 
{
    //Just a little reminder that jQuery is available.
});*/

function startGame()
{
    if(!started)
	{
		setInterval(update, 100);
		started = true;
		
		/*document.getElementById("start").onclick = something;
		document.getElementById("start").innerHTML = "some string";
		document.getElementById("start").id = "some id";*/
        
		alert("The game has begun.");
	}
	else
	{
		alert("The game has already started.");
	}
}

function buyResearcher()
{
	if(money >= rCost)
	{
		document.getElementById("console").innerHTML += "Bought 1 researcher for "+rCost+"\n";
		rNum += 1;
		money -= rCost;
		rCost += Math.round(rCost * (0.05 * rNum));
	}
	else
	{
		alert("You don't have enough money for that!");
	}
}

function proj1()
{
    if(confirm("This project requires $10,000 and 1 researcher, continue?") && rNum >= 1 && money >= 10000)
	{
		money -= 10000;
		exp += 10;
		
		document.getElementById("console").innerHTML += "Project Complete!"+"\n";
	}
	else
	{
		document.getElementById("console").innerHTML += "You either can't or chose not to complete this project."+"\n";
	}
}

function proj2()
{
    if(confirm("This project requires $15,000 and 2 researcher, continue?") && rNum >= 2 && money >= 15000)
	{
		money -= 15000;
		exp += 20;
		
		document.getElementById("console").innerHTML += "Project Complete!"+"\n";
	}
	else
	{
		document.getElementById("console").innerHTML += "You either can't or chose not to complete this project."+"\n";
	}
}

function clearText()
{
    document.getElementById("console").innerHTML = "";
}

function update()
{
    document.getElementById("rCost").innerHTML = ": $"+rCost;
	document.getElementById("moneyAmt").innerHTML = "Money: $"+money;
	document.getElementById("rAmt").innerHTML = "Researchers: "+rNum;
	document.getElementById("lvl").innerHTML = "Current Level: "+lvl;
	document.getElementById("toNextLvl").innerHTML = "Next Level: "+exp+"/"+levelReq[lvl+1];
	
	if(exp >= levelReq[lvl+1])
	{
		lvl++;
	}
}
