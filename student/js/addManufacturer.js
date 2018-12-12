$("#addManufacturer").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'addManufacturers',
        type: 'POST',
        data: $("#addManufacturer").serialize(),
        success: function() {
            alert("Success: Manufacturer added to the database");
        },
        error: function() {
            alert("Error: Manufacturer could not be added to the database");
        }
    })
});