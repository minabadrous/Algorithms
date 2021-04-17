const reverse = str =>
    str.length === 0
    ? ''
    : reverse(str.substring(1)) + str[0];

reverse('awesome'); //emosewa