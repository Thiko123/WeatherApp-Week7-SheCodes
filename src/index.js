function searchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement =document.querySelector("#city");
    cityElement.innerHTML= searchInput.value;
}
let searchforForm = document.querySelector("#search-form");
searchforForm.addEventListener("submit", searchSubmit)