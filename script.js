// Задание
// Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем. Задача должна быть реализована на языке javascript, без использования фреймворков и сторонник библиотек (типа Jquery).

// Технические требования:

// Возьмите выполненное домашнее задание номер 5 (созданная вами функция createNewUser()) и дополните ее следующим функционалом:

// При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
// Создать метод getAge() который будет возвращать сколько пользователю лет.
// Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).


// Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.

function createNewUser (params) {

    let firstName = prompt ('What is your name?', '');
    let lastName = prompt ('What is your last name?', '');
    let birthDay = prompt('Date of Birth?','dd.mm.yyyy');

    const newUser = {
        firstName,
        lastName,
        birthDay,
        getAge(){          
            let dateNow = new Date(); 
            let today = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());              
            let userBirthDay = prompt('Date of Birth?','dd.mm.yyyy');                
            let userDate = userBirthDay.slice(0,2);
            let userMonth = userBirthDay.slice(3,5);
            let userYear = userBirthDay.slice(6);                
            let birthDay = new Date(userYear, userMonth, userDate); 
            let birthDayInThisYear = new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate());                
            let age = today.getFullYear() - birthDay.getFullYear(); 

                if (today < birthDayInThisYear) {
                     age = age - 1;
                     return console.log(age);
                }                   
        },                
        getPassword() {
            return console.log(`${this.firstName.slice(0).toUpperCase} +${this.lastName.toLowerCase}+${this.birthday} }`);                      
        },       
        getLogin(){
           return console.log(`${this.firstName[0]}+${this.lastName}.toLowerCase()`);      
        }
    };
}

console.log(createNewUser());







