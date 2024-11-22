
const buttons = document.querySelectorAll('.body div div');

const input = document.querySelector('#text');  

let isResult = false; 


buttons.forEach(button => {
  button.addEventListener('click', () => {
    
    if (button.textContent === 'C') {
      input.value = '';  
      isResult = false;  
    } 

    else if (button.textContent === '=') {
      try {

        input.value = eval(input.value);
        isResult = true; 
      } catch (error) {
        input.value = 'Error';  
        isResult = true;  
      }
    } 
    
    else if (isResult) {
      input.value = button.textContent;  
      isResult = false;  
    } 
    else if (input.value.length < 12) {
      input.value += button.textContent;
    }
  });
});
