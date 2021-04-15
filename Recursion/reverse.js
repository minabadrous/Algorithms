const reverse = str =>
    str.length === 0
    ? ''
    : str[str.length - 1].concat(reverse(str.substring(0, str.length - 1)));

reverse('awesome'); //emosewa