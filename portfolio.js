var typed = new Typed(".text",{
    strings: ["Frontend Developer", "Backend Developer ", "UI/UX Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




function showsidebar() {
    const sidebar = document.querySelector('.navb');
    sidebar.style.display = 'flex'
}
function hidesidebar() {
    const sidebar = document.querySelector('.navb');
    sidebar.style.display = 'none'
}