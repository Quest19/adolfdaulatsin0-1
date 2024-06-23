const chatContainer = document.querySelector(".content__chat");
const input = document.querySelector(".content__input");
const closeChtBtn = document.querySelector(".content__btn-close-cht");

input.addEventListener("click", () => {
    chatContainer.classList.add("content__chat_type_active");
});

closeChtBtn.addEventListener("click", () => {
    chatContainer.classList.remove("content__chat_type_active");
});
