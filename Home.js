function result(buttonId, menuId) {
    document.getElementById(buttonId).addEventListener('click', () => {
        let x = document.getElementById(menuId);
        x.style.display = (x.style.display === "grid") ? "none" : "grid";
    });
}

result("start", "startMenu");
result("main", "mainMenu");
result("inter", "interMenu");
result("desserts", "dessertsMenu");
result("beverages", "beveragesMenu");