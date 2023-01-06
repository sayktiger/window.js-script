const form = () => {
    const forms = document.querySelectorAll(`form`),
        inputs = document.querySelectorAll(`input`);
    
    const message = {
        loading: `Загрузка`,
        succes: `Спасибо`,
        failure: `Что-то пошла не так`,
    }

    const postDate = async (url, data) =>{
        document.querySelector(`.status`).textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data,
        });

        return await res.text;
    };

    forms.forEach(item =>{
        item.addEventListener(`submit`, (e) =>{
            e.preventDefault();

            let statusMessage = document.createElement(`div`);
            statusMessage.classList.add(`status`);
            item.appendChild(statusMessage);

            const formData = new FormData(item);

            postDate(`assets/server.php`, formData)
                .then(res =>{
                    console.log(res);
                    statusMessage.textContent = message.succes;
                })
                .catch(()=>{
                    statusMessage.textContent = message.succes;
                })
                .finally(() =>{
                    inputs.forEach(item =>{ item.value = ""});
                });

                setTimeout(() =>{
                    statusMessage.remove();
                }, 5000);
            
            const phoneInputs = document.querySelectorAll(`input[name="user_phone"]`);
            phoneInputs.forEach(item =>{
                item.addEventListener(`input`, () =>{
                    item.value = item.value.replace(/\D/,``);
                });
            });
        });
    });


}

export default form;