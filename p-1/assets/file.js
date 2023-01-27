const panels = document.querySelectorAll(".panel");
panels.forEach(function(panel)
{
panel.addEventListener("click", function()
{
    remove_active();
panel.classList.add("active");
});
});

function remove_active()
{
    panels.forEach(function(panel)
    {
panel.classList.remove("active");
    });
}
