const form = document.querySelector('.form');
    const clearbtn = document.querySelector('.clear');
    const delform = document.querySelector('.fclear');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const cid = form.querySelector('.cid').value;
        const name = form.querySelector('.name').value;
        const surname = form.querySelector('.surname').value;
        const password = form.querySelector('.password').value;
        const address = form.querySelector('.address').value;


        
        const user = {
            cid,
            name,
            surname,        
            password,
            address,
        };
        console.log(user);

       axios.post("http://localhost:3000/users", user);

        form.reset();
    });

    delform.addEventListener('click' , function(e) {
        e.preventDefault();
        axios.delete(`http://localhost:3000/users/${did.value}`);

    } );



    clearbtn.addEventListener('click', function () {
        form.reset();
    });
    