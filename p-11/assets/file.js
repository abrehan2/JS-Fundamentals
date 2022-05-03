const small_cups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

update_cup();

small_cups.forEach(function(cup, index)
{
cup.addEventListener('click', () => highlight_cups(index));
})

function highlight_cups(x)
{

if(small_cups[x].classList.contains('full') && !small_cups[x].nextElementSibling.classList.contains('full'))
{
x--;
}



small_cups.forEach((cup, idx) => {
if(idx <= x)
{
    cup.classList.add("full");
}
else{
    cup.classList.remove("full");
}
})
update_cup();
}

function update_cup(){
    const full_cups = document.querySelectorAll(".cup-small.full").length;

    
    const total_cups = small_cups.length;

    if(full_cups===0)
    {
        percentage.style.visibility = "hidden";
        percentage.style.height = 0;
    }

    else{
        percentage.style.visibility = "visible";
        percentage.style.height = `${full_cups/total_cups * 330}px`;
        percentage.innerText = `${Math.ceil(full_cups/total_cups * 100)}%`
    }
    if(full_cups===total_cups)
    {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
    }
    
    else{
        remained.style.visibility = "visible";
        liters.innerText = `${2-(250 * full_cups / 1000)}`
    }
}