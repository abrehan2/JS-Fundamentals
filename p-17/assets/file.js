const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
'Message One',
'Message Two',
'Message Three',
'Message Four',
]

btn.addEventListener('click', () => Notification('Message'));

function Notification(x = null)
{
    const notif = document.createElement('div')
    notif.classList.add('toast');
    notif.innerText = x ? x : random_message();
    toasts.appendChild(notif);    
    setTimeout(() => {
        notif.remove(); // remove from dom
    }, 3000);
}

function random_message()
{
  return messages[Math.floor(Math.random() * messages.length)];  
}
