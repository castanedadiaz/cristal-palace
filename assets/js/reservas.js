$(document).ready(function() {
    // Datepicker for check-in and check-out dates
    $("#checkIn").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0, // Set minimum date to today
        onSelect: function(selectedDate) {
            // Set minimum date for check-out as check-in date + 1 day
            $("#checkOut").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#checkOut").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: '+1d', // Set minimum date to tomorrow
    });

    // Form submission
    // $("#reservationForm").submit(function(event) {
    //     event.preventDefault(); // Prevent form submission

    //     // Get form data
    //     var formData = $(this).serialize();

    //     // Send form data via AJAX
    //     $.ajax({
    //         type: "POST",
    //         url: "send_email.php", // Path to your PHP script
    //         data: formData,
    //         success: function(response) {
    //             // Show popup message
    //             $("#popup").show();
    //         },
    //         error: function(xhr, status, error) {
    //             console.error(xhr.responseText);
    //         }
    //     });
    // });
});

$(document).ready(function() {
    // Form submission
    $("#reservationForm").submit(function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form data
        var formData = $(this).serialize();

        // Send form data via AJAX
        $.ajax({
            type: "POST",
            url: "send_email.php", // Path to your PHP script
            data: formData,
            success: function(response) {
                // Show popup message
                alert("Gracias, nos comunicaremos a la brevedad para confirmar su reserva.");
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
});