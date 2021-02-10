
let colorPrice = {
    'Красное': 50,
    'Белое': 40,
    'Розовое': 60
}

let typePrice = {
    'сладкое': 300,
    'полусладкое': 350,
    'сухое': 400,
    'полусухое': 450 
}

let countryPrice = {
    'Испании': 800,
    'Италии': 750,
    'Франции': 1000,
    'Чехии': 700
}

let grapePrice = {
    'Рислинг': 300,
    'Саперави': 500,
    'Пино Нуар': 800,
    'Вердехо': 700,
    'Мерло': 400,
    'Шардоне': 550,
}

let grinPinotGrigio = {
    'Страна': 'Италия',
    'Цвет': 'Белое',
    'Сахар': 'Сухое',
    'Виноград': 'Пино Гриджо',
    'Производитель': 'Volpe Pasini',
    image: URL(./enoteca.images/wine.webp)
}


let year = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];
if(year <= 2010) {
    let yearPrice = 2000;
} else if (year <= 2020) {
    yearPrice = 1000;
}
let gatherBottle = function(color, type, year, country, grape) {

    let customWine = {
        bottleFee: 100,
        color: color,
        type: type,
        year: year,
        country: country,
        grape: grape,

        getDescription: function() {
            return wine.color +  wine.type + ' вино ' + wine.year + ' года из ' + wine.country + ', сорт ' + wine.grape;
        },
        getPrice: function() {
            return this.bottleFee + colorPrice[this.color] + typePrice[this.type] + countryPrice[this.country] + grapePrice[this.grape];
        }
    };

    return customWine;

    let myBottle = gatherBottle('Белое', 'полусладкое', 2005, 'Испании', 'Рислинг');
    console.log('Мы нашли ' + myBottle.getDescription() + ' стоимостью: ' + myBottle.getPrice());
};
