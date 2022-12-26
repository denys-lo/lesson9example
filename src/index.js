const userJames = {
    "name": "James",
    "friends": []
};

const userDenis = {
    "name": "Denys",
    "age": 24,
    "isAdmin": true,
    "tel": null,
    "friends": ["Leo", "Sam"],
    "address": {
        "street": "Wall",
        "number": 36,
        "city": "New York"
    }
};

userJames.friends.push(userDenis);

const stringfied = JSON.stringify(userJames);
console.log(stringfied);

// const parsed = JSON.parse(stringfied);
// console.log(parsed);