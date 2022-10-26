import throttle from "lodash.throttle";

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const input = document.querySelector('.feedback-form');

input.addEventListener('input', updateForm);  
         
function updateForm (event) {
   console.log('sf', event.currentTarget);
   const {
      elements: {email, message}
   } = event.currentTarget;

   const settings = {
      email : email.value,
      message: message.value,
   };

   localStorage.setItem("feedback-form-state", JSON.stringify(settings));
}



window.addEventListener('load', () => {
   const localSet = localStorage.getItem("feedback-form-state");
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
   console.log('data', JSON.parse(localStorage.getItem("feedback-form-state")));
   // Очищаем поля формы
   event.target.reset(); 
   //Очищаем хоанилище
   localStorage.removeItem('feedback-form-state');
}



