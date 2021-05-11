function timeConversion(s) {
    let zone = s.slice(-2);
    let edit = s.slice(0,2);
    let hour = Number(edit);

    if( zone === 'AM' && hour === 12 ) edit = '00';
    else if( zone === 'PM' && hour < 12 ) edit = hour + 12;

    return ( edit + s.slice(2, -2))
}

console.log(timeConversion('06:40:03AM'))