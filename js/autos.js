
const cars = [];
let cont = 0;

function printCars() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';

    cars.forEach((x) => {
        const row = '<tr>'
            + '<td>' + x.brand + '</td>'
            + '<td>' + x.model + '</td>'
            + '<td>' + x.color + '</td>'
            + '<td>' + x.year + '</td>'
            + '<td>$' + x.price + '</td>'
            + '<td><button class="btn btn-warning" onclick="removeCars(' + x.id + ')">Eliminar</button></td>'
            + '<td><button class="btn btn-warning" onclick="editDate(' + x.id + ')">Editar</button></td>'
            + '</tr>';

        tablebody.innerHTML += row;
    });

}

function addCar() {
    event.preventDefault();
    const brand = document.getElementById("brand").value;
    const model = document.getElementById("model").value;
    const color = document.getElementById("color").value;
    const year = document.getElementById("year").value;
    const price = document.getElementById("price").value;

    let id;

    if (cars.length === 0) {
        id = 0;
    } else {
        id = cars[cars.length - 1].id;
        cont++;
        if (id !== cont) {
            id = cont;
        }

    }

    const addcars = { id: id + 1, brand: brand, model: model, color: color, year: year, price: price };
    cars.push(addcars);


    printCars();
}

function removeCars(id) {
    const position = cars.findIndex((x) => x.id === id);
    cars.splice(position, 1);

    printCars();

}

let carEdit = {};

function editDate(id) {

    const getbrand = document.getElementById("brand");
    const getmodel = document.getElementById("model");
    const getcolor = document.getElementById("color");
    const getyear = document.getElementById("year");
    const getprice = document.getElementById("price");

    const positions = cars.find((x) => x.id === id);
    carEdit = positions;

    getbrand.value = carEdit.brand;
    getmodel.value = carEdit.model;
    getcolor.value = carEdit.color;
    getyear.value = carEdit.year;
    getprice.value = carEdit.price;

}

function saveChange() {

    cars.forEach((x) => {
        if (carEdit.id === x.id) {
            x.brand = document.getElementById("brand").value;
            x.model = document.getElementById("model").value;
            x.color = document.getElementById("color").value;
            x.year = document.getElementById("year").value;
            x.price = document.getElementById("price").value;
        }
    });

    printCars();

    console.log(cars);

}

function moreOld() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';
    let low = 3000;
    let id;

    if (cars.length <= 0) {

    } else {
        cars.forEach((x) => {
            if (parseInt(x.year) < low) {
                low = parseInt(x.year);
                id = x.id;
            }
        });

        console.log(id);

        cars.forEach((x) => {

            if ((id) === x.id) {
                const row = '<tr>'
                    + '<td>' + x.brand + '</td>'
                    + '<td>' + x.model + '</td>'
                    + '<td>' + x.color + '</td>'
                    + '<td>' + x.year + '</td>'
                    + '<td>$' + x.price + '</td>'
                    + '<td><button class="btn btn-warning" onclick="removeCars(' + x.id + ')">Eliminar</button></td>'
                    + '<td><button class="btn btn-warning" onclick="editDate(' + x.id + ')">Editar</button></td>'
                    + '</tr>';
                tablebody.innerHTML += row;
            }
        });



    }


}

function moreNew() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';
    let higher = 0;
    let id;

    if (cars.length <= 0) {

    } else {
        cars.forEach((x) => {
            if (parseInt(x.year) > higher) {
                higher = parseInt(x.year);
                id = x.id;
            }
        });

        console.log(id);

        cars.forEach((x) => {

            if ((id) === x.id) {
                const row = '<tr>'
                    + '<td>' + x.brand + '</td>'
                    + '<td>' + x.model + '</td>'
                    + '<td>' + x.color + '</td>'
                    + '<td>' + x.year + '</td>'
                    + '<td>$' + x.price + '</td>'
                    + '<td><button class="btn btn-warning" onclick="removeCars(' + x.id + ')">Eliminar</button></td>'
                    + '<td><button class="btn btn-warning" onclick="editDate(' + x.id + ')">Editar</button></td>'
                    + '</tr>';
                tablebody.innerHTML += row;
            }
        });



    }


}

function moreExpensive() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';
    let higher = 0;
    let id;

    if (cars.length <= 0) {

    } else {
        cars.forEach((x) => {
            if (parseInt(x.price) > higher) {
                higher = parseInt(x.price);
                id = x.id;
            }
        });

        console.log(id);

        cars.forEach((x) => {

            if ((id) === x.id) {
                const row = '<tr>'
                    + '<td>' + x.brand + '</td>'
                    + '<td>' + x.model + '</td>'
                    + '<td>' + x.color + '</td>'
                    + '<td>' + x.year + '</td>'
                    + '<td>$' + x.price + '</td>'
                    + '<td><button class="btn btn-warning" onclick="removeCars(' + x.id + ')">Eliminar</button></td>'
                    + '<td><button class="btn btn-warning" onclick="editDate(' + x.id + ')">Editar</button></td>'
                    + '</tr>';
                tablebody.innerHTML += row;
            }
        });



    }


}

function moreCheap() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';
    let higher = 10000000000;
    let id;

    if (cars.length <= 0) {

    } else {
        cars.forEach((x) => {
            if (parseInt(x.price) < higher) {
                higher = parseInt(x.price);
                id = x.id;
            }
        });

        console.log(id);

        cars.forEach((x) => {

            if ((id) === x.id) {
                const row = '<tr>'
                    + '<td>' + x.brand + '</td>'
                    + '<td>' + x.model + '</td>'
                    + '<td>' + x.color + '</td>'
                    + '<td>' + x.year + '</td>'
                    + '<td>$' + x.price + '</td>'
                    + '<td><button class="btn btn-warning" onclick="removeCars(' + x.id + ')">Eliminar</button></td>'
                    + '<td><button class="btn btn-warning" onclick="editDate(' + x.id + ')">Editar</button></td>'
                    + '</tr>';
                tablebody.innerHTML += row;
            }
        });



    }


}


function lookGeneral() {
    printCars();
}

function randomData() {
    const tablebody = document.getElementById("table-body-id");
    tablebody.innerHTML = '';
    cars.length = 0;

    data_Random.forEach((x) => {
        cars.push(x);
    });

    printCars();
}


const data_Random = [
    {
        id: 1,
        brand: 'Aston Martin',
        model: 'Rapide',
        color: 'Blue',
        year: 2009,
        price: 130.000
    },

    {
        id: 2,
        brand: 'BMW',
        model: 'Serie 1',
        color: 'Red',
        year: 2004,
        price: 65.000
    },

    {
        id: 3,
        brand: 'Cadillac',
        model: 'SRX',
        color: 'Black',
        year: 2007,
        price: 110.000
    },

    {
        id: 4,
        brand: 'Ferrari',
        model: 'California',
        color: 'Red',
        year: 2002,
        price: 180.000
    },

    {
        id: 5,
        brand: 'Kia',
        model: 'Optima',
        color: 'Yellow',
        year: 2005,
        price: 45.000
    }
]