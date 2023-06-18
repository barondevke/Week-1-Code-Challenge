let marks = prompt('Enter student marks')

if (marks > 79) {
    console.log('A')
}
else if (marks > 59 && marks <= 79) {
    console.log('B')
}
else if (marks > 48 && marks <= 59) {
    console.log('C')
}
else if (marks > 39 && marks <= 49) {
    console.log('D')
}
else if (marks < 40) {
    console.log('E')
}