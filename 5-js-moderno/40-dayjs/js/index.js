const dayjs = require("dayjs");

function birthday(date){
    const birthday = dayjs(date);
    const today = dayjs();

    const ageInYears = today.diff(birthday, "year");
    const nextBirthDay = birthday.add(ageInYears+1, "year");
    const daysToNextBirthday = nextBirthDay.diff(today, "days");

    console.log(`Idade: ${ageInYears}`);
    console.log(`Próximo aniversário: ${nextBirthDay.format("DD/MM/YYYY")}`);
    console.log(`Dias para o próximo aniversário: ${daysToNextBirthday}`);
}

birthday("1992-11-12");