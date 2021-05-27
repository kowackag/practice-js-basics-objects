const user = {
    firstName: 'Adam',
    lastName: 'Nowak',
    born: {
        day: '27',
        month: '05',
        year: '1985'
    }
}
const now = new Date();

function checkBirthday() {
    if ((now.getDate() == user['born']['day']) && ((now.getMonth() + 1) == user['born']['month'])) {
        console.log('Adam ma dzisiaj urodziny')
    } else {
        console.log('Adam ma urodziny:', showBirthday());
    }
}

function showBirthday() {
    const monthArr = ["stycznia", "lutego", "marca", "kwietnia",
        "maja", "czerwca", "lipca", "sierpnia", "września",
        "października", "listopada", "grudnia"
    ];
    const day = user['born']['day'];
    const month = parseInt(user['born']['month']) - 1;
    return day + ' ' + monthArr[month];
}
checkBirthday();