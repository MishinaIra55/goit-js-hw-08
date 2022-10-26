// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
const input = document.querySelector('.feedback-form');

      input.addEventListener('input', (event) => {
         const {
            elements: {email, message}
         } = event.currentTarget;

         const settings = {
            email : email.value,
            message: message.value,
         };

         localStorage.setItem("feedback-form-state", JSON.stringify(settings));
         
         const savedSettings = localStorage.getItem("feedback-form-state");
         const parsedSettings = JSON.parse(savedSettings);
         console.log(parsedSettings);
});

//При сабмите формы 
input.addEventListener('submit', onSubmitForm);

function onSubmitForm (event) {
   //отменяем перезагрузку страницы
   event.preventDefault();
  // Очищаем поля формы 
   event.target.reset(); 
   //Очищаем хоанилище
    localStorage.removeItem('feedback-form-state');
}



