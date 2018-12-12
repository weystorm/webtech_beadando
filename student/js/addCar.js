$("#addCar").submit(function (event) {
    event.preventDefault();
    $.ajax({
        url: 'addCar',
        type: 'POST',
        data: $("#addCar").serialize(),
        success: function() {
            alert("Success: Car added to the database");
        },
        error: function() {
            alert("Error: Car could not be added to the database");
        }
    })
});


$.get("/manufacturerNames", function (names) {
    names.forEach(function (name) {
        $("#manufacturer").append('<option value="' +  name + '">' + name + '</option>');
    });
});

/*$.getJSON("manufacturers", function(data){
    $.each(data, function (key, value){
        $("#manufacturer").append('<option value="' +  value.name + '">' + value.name + '</option>');
    });
});*/
