let name = document.querySelector('#name');
let password = document.querySelector('#password');
let confirm = document.querySelector('#confirm');
let submit = document.querySelector('#submit')

let users = {};

function User(name, password, confirm){
    this.name = name;
    this.password = password;
    this.confirm = confirm;
}

function createId(users){
    return Object.keys(users).length;
}

submit.addEventListener('click', () => {
    const nameUser = name.value;
    const passUser = password.value;
    const confirmUser = confirm.value;

    const user = new User(nameUser, passUser, confirmUser);

    const userId = 'User' + createId(users);
    users[userId] = user;

    console.log(users);

    alert(`${nameUser}, вы успешно прошли регистрацию!`);
})

