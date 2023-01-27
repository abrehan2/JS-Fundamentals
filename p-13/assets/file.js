const hour_element = document.querySelector(".hour");
const minute_element = document.querySelector(".minute");
const second_element = document.querySelector(".second");
const time_element = document.querySelector(".time");
const date_element = document.querySelector(".date");
const toggle_element = document.querySelector(".toggle");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggle_element.addEventListener("click", function(e)
{
    const html = document.querySelector("html");
    if(html.classList.contains("dark"))
    {
        html.classList.remove("dark");
        e.target.innerHTML = "Dark Mode";
    }

    else{
        html.classList.add("dark");
        e.target.innerHTML = "Light Mode";
    }
})

function set_time()
{
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay()
    const hours = time.getHours();
    const hoursforclock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const date = time.getDate();

    hour_element.style.transform = `translate(-50%, -100%) rotate(${scale(hoursforclock, 0, 11, 0, 360)}deg)`;
    minute_element.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;    
    second_element.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;
    const ampm = hours >= 12 ? 'PM' : 'AM';
    time_element.innerHTML = `${hoursforclock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    date_element.innerHTML = `${days[day]}, ${months[month]} <span class= "circle">${date}</span>`

}

const scale = (num, in_min, in_max, out_min, out_max) => {

    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

set_time();
setInterval(set_time, 1000);
