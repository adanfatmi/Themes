let root = document.documentElement;
const themeBtns = document.querySelectorAll('.theme > button');

themeBtns.forEach(btn => {
    btn.addEventListener("click", changeTheme);
});

function changeTheme(e){
    switch(e.target.value){
    case "dark":
        root.style.setProperty("--primary-colour", "#222");
        root.style.setProperty("--text-colour-primary", "white");
        break;
    case "calm":
        root.style.setProperty("--primary-colour", "#5b6b6b");
        root.style.setProperty("--text-colour-primary", "white");
        break;
        case "light":
            root.style.setProperty("--primary-colour", "#f5f5f5");
            root.style.setProperty("--text-colour-primary", "black");
            break;
    }
}