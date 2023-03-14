const refs = {
    form: document.querySelector(`.login-form`)
    }
refs.form.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
    //не оновлюється автоматично сторінка
    event.preventDefault();
    // 1-й варіант
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    // очищаємо поля після submita
    refs.form.reset();  
    if (email === `` || password === ``) {
        alert(`Друже, а чи ти не опупупів!? Заповни всі поля!!`)
    } else {
    const formData = { email, password };
        console.log(formData);
     };

        // 2-й варіант
    
    //передаємоо посилання на всю форму - event.currentTarget
    // const formData = new FormData(event.currentTarget);

    // //Такий результат formData можна відправляти прямо на сервер, хоча консоль лог показує порожній об`єкт
    // console.log(formData);

    // //Подивитися результат formData
    // formData.forEach((value, name) => {
    //     console.log(`name`, name);
    
    // console.log(`value`, value);
    // })
}

 