const elUserName = document.querySelector('#userName')
const elUserPassword = document.querySelector('#userPassword')
const elForm = document.querySelector('#registerForm')



elForm.addEventListener('submit' , (e)=>{
  e.preventDefault()
    console.log(elUserName.value , elUserPassword.value);

    const data = { 
      username: elUserName.value ,
      password: elUserPassword.value
    };
    
    console.log(data);
     
    fetch('https://todo-for-n92.cyclic.app/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      console.log(data.token);
      if (data.token) {
        localStorage.setItem('token', JSON.stringify(data.token))
      }
      if (localStorage.getItem('token')) {
        window.location.replace('../index.html')
      }

    })
    .catch((error) => {
      console.error('Error:', error);
    });
})
