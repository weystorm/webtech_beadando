$(document).ready(function() {
    $("#content").load("html/home.html");
    $("#currentMenu").html("Home");

    $("#homeButton").click(function () {
        $("#content").load("html/home.html");
        $("#currentMenu").html("Home");
    });

    $("#addCarButton").click(function () {
        $("#content").load("html/addCar.html");
        $("#currentMenu").html("Add Car");
    });

    $("#addManufacturerButton").click(function () {
        $("#content").load("html/addManufacturer.html");
        $("#currentMenu").html("Add Manu.");
    });

    $("#listManufacturersButton").click(function () {
        $("#content").empty();
        listManufacturers();
        $("#currentMenu").html("Manufacturers");
    });

    $("#listCarsButton").click(function () {
        $("#content").empty();
        listCars();
        $("#currentMenu").html("Cars");
    });

});


function listManufacturers(){
    var contentId = $("#content");

    $.getJSON("manufacturers", function(data){
        var table = $('<table id="listTable"></table>');
        table.append("<tr><th>Name</th><th>Country</th><th>Founded</th>");

        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var nameCellData = $('<td id="nameCellData" onclick="addCookie(' + "'" + value.name + "'" +')">' + value.name + '</td>');
            var countryCellData = $('<td>' + value.country + '</td>');
            var foundedCellData = $('<td>' + value.founded + '</td>');

            row.append(nameCellData, countryCellData, foundedCellData);
            table.append(row);
        });

        contentId.append(table);


        var br = $('<br>');
        contentId.append(br);


        var imageTable = $('<table id="manufacturerImageTable"></table>');

        var opelCounter = 0;
        var toyotaCounter = 0;
        var kiaCounter = 0;
        var skodaCounter = 0;
        var fordCounter = 0;
        var teslaCounter = 0;
        var chevroletCounter = 0;
        var sungriMotorPlantCounter = 0;
        var ferrariCounter = 0;
        var mazdaCounter = 0;
        var lamborghiniCounter = 0;
        var mercedesCounter = 0;
        var otherCounter = 0;


        $.each(data, function (key, value) {

            switch(value.name){

                case "Opel":
                    opelCounter++;
                    break;

                case "Toyota":
                    toyotaCounter++;
                    break;

                case "KIA":
                    kiaCounter++;
                    break;

                case "Skoda":
                    skodaCounter++;
                    break;

                case "Tesla":
                    teslaCounter++;
                    break;

                case "Chevrolet":
                    chevroletCounter++;
                    break;

                case "Sungri Motor Plant":
                    sungriMotorPlantCounter++;
                    break;

                case "Ferrari":
                    ferrariCounter++;
                    break;

                case "Mazda":
                    mazdaCounter++;
                    break;

                case "Ford":
                    fordCounter++;
                    break;

                case "Mercedes":
                    mercedesCounter++;
                    break;

                case "Lamborghini":
                    lamborghiniCounter++;
                    break;

                default:
                    otherCounter++;
                    break;
            }
        });


        var opelImage = $('<td><img src="images/opel_icon.png" class="manufacturerTableImage" id="opelImage" alt="image"></td>');
        var chevroletImage = $('<td><img src="images/chevrolet_icon.png" class="manufacturerTableImage" id="chevroletImage" alt="image"></td>');
        var ferrariImage = $('<td><img src="images/ferrari_icon.png" class="manufacturerTableImage" id="ferrariImage" alt="image"></td>');
        var fordImage = $('<td><img src="images/ford_icon.png" class="manufacturerTableImage" id="fordImage" alt="image"></td>');
        var kiaImage = $('<td><img src="images/kia_icon.png" class="manufacturerTableImage" id="kiaImage" alt="image"></td>');
        var lamborghiniImage = $('<td><img src="images/lamborghini_icon.png" class="manufacturerTableImage" id="lamborghiniImage" alt="image"></td>');
        var mazdaImage = $('<td><img src="images/mazda_icon.png" class="manufacturerTableImage" id="mazdaImage" alt="image"></td>');
        var mercedesImage = $('<td><img src="images/mercedes_icon.png" class="manufacturerTableImage" id="mercedesImage" alt="image"></td>');
        var skodaImage = $('<td><img src="images/skoda_icon.png" class="manufacturerTableImage" id="skodaImage" alt="image"></td>');
        var sungriMotorPlantImage = $('<td><img src="images/sungri Motor Plant_icon.png" class="manufacturerTableImage" id="sungriMotorPlantImage" alt="image"></td>');
        var teslaImage = $('<td><img src="images/tesla_icon.png" class="manufacturerTableImage" id="teslaImage" alt="image"></td>');
        var toyotaImage = $('<td><img src="images/toyota_icon.png" class="manufacturerTableImage" id="toyotaImage" alt="image"></td>');
        var otherImage = $('<td><img src="images/other_icon.png" class="manufacturerTableImage" id="otherImage" alt="image"></td>');

        var row = $('<tr></tr>');

        row.append(opelImage, chevroletImage, ferrariImage, fordImage, kiaImage, lamborghiniImage, mazdaImage,
            mercedesImage, skodaImage, sungriMotorPlantImage, teslaImage, toyotaImage, otherImage);
        imageTable.append(row);

        contentId.append(imageTable);

        if(ferrariCounter == 0){
            $("#ferrariImage").addClass("opacityClass");
        }
        if(chevroletCounter == 0){
            $("#chevroletImage").addClass("opacityClass");
        }
        if(fordCounter == 0){
            $("#fordImage").addClass("opacityClass");
        }
        if(kiaCounter == 0){
            $("#kiaImage").addClass("opacityClass");
        }
        if(lamborghiniCounter == 0){
            $("#lamborghiniImage").addClass("opacityClass");
        }
        if(mazdaCounter == 0){
            $("#mazdaImage").addClass("opacityClass");
        }
        if(mercedesCounter == 0){
            $("#mercedesImage").addClass("opacityClass");
        }
        if(opelCounter == 0){
            $("#opelImage").addClass("opacityClass");
        }
        if(otherCounter == 0){
            $("#otherImage").addClass("opacityClass");
        }
        if(skodaCounter == 0){
            $("#skodaImage").addClass("opacityClass");
        }
        if(sungriMotorPlantCounter == 0){
            $("#sungriMotorPlantImage").addClass("opacityClass");
        }
        if(teslaCounter == 0){
            $("#teslaImage").addClass("opacityClass");
        }
        if(toyotaCounter == 0){
            $("#toyotaImage").addClass("opacityClass");
        }
    })
}

function listCars(){
    var contentId = $("#content");

    $.getJSON("cars", function(data){
        var table = $('<table id="listTable"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>");

        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var nameCellData = $('<td>' + value.name + '</td>');
            var consumptionCellData = $('<td>' + value.consumption + '</td>');
            var colorCellData = $('<td>' + value.color + '</td>');
            var manufacturerCellData = $('<td>' + value.manufacturer + '</td>');
            var availableCellData = $('<td>' + value.available + '</td>');
            var yearCellData = $('<td>' + value.year + '</td>');
            var horsepowerCellData = $('<td>' + value.horsepower + '</td>');

            row.append(nameCellData, consumptionCellData, colorCellData, manufacturerCellData,
                availableCellData, yearCellData, horsepowerCellData);
            table.append(row);
        });

        contentId.append(table);

    })
}


function addCookie(manufacturer){
    document.cookie="name=" + manufacturer;
    var contentId = $("#content");
    $(contentId).empty();


    var nameStringArray = document.cookie.split("=");
    var nameStringValue = nameStringArray[1];


    var manufacturerCookieImage = $('<td><img src="images/' + nameStringValue + '_icon.png" id="cookieImage" alt="image"' +
        'onerror="this.onerror=null;this.src=\'images/other_icon.png\';"></td>');


    $.getJSON("manufacturer", function(data){
        var table = $('<table id="listTable"></table>');
        table.append("<tr><th>Name</th><th>Consumption</th><th>Color</th><th>Manufacturer</th><th>Available</th><th>Year</th><th>Horsepower</th></tr>");

        $.each(data, function (key, value){
            var row = $('<tr></tr>');
            var nameCellData = $('<td>' + value.name + '</td>');
            var consumptionCellData = $('<td>' + value.consumption + '</td>');
            var colorCellData = $('<td>' + value.color + '</td>');
            var manufacturerCellData = $('<td>' + value.manufacturer + '</td>');
            var availableCellData = $('<td>' + value.available + '</td>');
            var yearCellData = $('<td>' + value.year + '</td>');
            var horsepowerCellData = $('<td>' + value.horsepower + '</td>');

            row.append(nameCellData, consumptionCellData, colorCellData, manufacturerCellData,
                availableCellData, yearCellData, horsepowerCellData);
            table.append(row);
        });

        contentId.append(table);

        var br = $('<br>');
        contentId.append(br);

        var imageTable = $('<table id="manufacturerCookieImageTable"></table>');
        var row = $('<tr></tr>');

        row.append(manufacturerCookieImage);
        imageTable.append(row);

        contentId.append(imageTable);

    })
}