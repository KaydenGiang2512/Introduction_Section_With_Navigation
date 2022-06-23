const $BODY_OVERLAY = document.querySelector(".body-overlay");
const $BURGER_ICON = document.querySelector(".burger-icon");
const $CLOSE_ICON = document.querySelector(".close-icon");
const $NAVIGATION_PANEL = document.querySelector(".side-navbar");
const $SUB_MENU_ITEMS_1 = document.querySelector(".sub-menu-items-1");
const $SUB_MENU_ITEMS_2 = document.querySelector(".sub-menu-items-2");
const $SUB_MENU_TOGGLE_1 = document.querySelector(".sub-menu-toggle-1");
const $SUB_MENU_TOGGLE_2 = document.querySelector(".sub-menu-toggle-2");
const $DOWN_ARROW_1 = document.querySelector(".down-icon-1");
const $UP_ARROW_1 = document.querySelector(".up-icon-1");
const $DOWN_ARROW_2 = document.querySelector(".down-icon-2");
const $UP_ARROW_2 = document.querySelector(".up-icon-2");

$BURGER_ICON.addEventListener("click", () => {
    $BURGER_ICON.classList.toggle("collapsed-menu");
$CLOSE_ICON.classList.toggle("expanded-menu");
    $NAVIGATION_PANEL.style.transform = "translateX(0)";
    $BODY_OVERLAY.classList.toggle("overlay-opacity");
})
    
$CLOSE_ICON.addEventListener("click", () => {
    $BURGER_ICON.classList.remove("collapsed-menu");
    $CLOSE_ICON.classList.remove("expanded-menu");
    $NAVIGATION_PANEL.style.transform = "translateX(100%)";
    $BODY_OVERLAY.classList.remove("overlay-opacity");
})

$SUB_MENU_TOGGLE_1.addEventListener("click", () => {
    $DOWN_ARROW_1.classList.toggle("closed-sub-items");
    $UP_ARROW_1.classList.toggle("opened-sub-items");
    $SUB_MENU_ITEMS_1.classList.toggle("expanded-sub-menu");
});

$SUB_MENU_TOGGLE_2.addEventListener("click", () => {
    $DOWN_ARROW_2.classList.toggle("closed-sub-items");
    $UP_ARROW_2.classList.toggle("opened-sub-items");
    $SUB_MENU_ITEMS_2.classList.toggle("expanded-sub-menu");
});
