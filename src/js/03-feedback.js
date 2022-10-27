import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const input = document.querySelector('.feedback-form');

input.addEventListener('input', throttle(updateForm, 500));  
         
function updateForm (event) {

   const settings = {
      email : event.target.value,
      message: event.target.value,
   };

   localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}



window.addEventListener('load', () => {
   const localSet = localStorage.getItem(STORAGE_KEY);
   if (localSet) {
      const parsedSettings = JSON.parse(localSet);
         input.querySelector('[name = email]').value = parsedSettings.email;
         input.querySelector('[name = message]').value = parsedSettings.message;
   }
});

input.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
   //отменяем перезагрузку страницы
   event.preventDefault();
   console.log('data', JSON.parse(localStorage.getItem(STORAGE_KEY)));
   // Очищаем поля формы
   event.target.reset(); 
   //Очищаем хоанилище
   localStorage.removeItem(STORAGE_KEY);
}



