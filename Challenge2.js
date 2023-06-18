let speed = prompt('Enter speed')
if (speed <= 70) {
    console.log('Ok')
}
else {
    let demeritPoint = (speed - 70) / 5
    if (demeritPoint > 12) {
        console.log('License suspended')
    }
    else {
        console.log(demeritPoint)
    }

}