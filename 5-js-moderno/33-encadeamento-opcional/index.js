const user = {
    name: "John Doe",
    email: "doejonh@email.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Some Street",
            number: 89
        }
    }],
    age: 42,
    phone: {
        countrySide: "+55",
        ddd: "22",
        number: "998765432"
    }
};

// vai dar erro
console.log(user.friends[0].phone.ddd);

// com encadiamento opcional, posso:
console.log(user.friends[0].phone?.ddd);

// também posso
console.log(user.brothers?.[5].name);
