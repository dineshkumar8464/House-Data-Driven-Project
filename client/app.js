// Function to get selected BHK value
function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for (var i = 0; i < uiBHK.length; i++) {
        if (uiBHK[i].checked) {
            return parseInt(uiBHK[i].value);
        }
    }
    return 1; // Default to 1 if nothing is selected
}

// Function to get selected Bathroom value
function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for (var i = 0; i < uiBathrooms.length; i++) {
        if (uiBathrooms[i].checked) {
            return parseInt(uiBathrooms[i].value);
        }
    }
    return 1; // Default to 1 if nothing is selected
}

// Function to estimate house price
function onClickedEstimatePrice() {
    console.log("Estimate Price button clicked");
    
    var sqft = document.getElementById("uiSqft").value;
    var bhk = getBHKValue();
    var bathroom = getBathValue();
    var location = document.getElementById("uiLocations").value;
    var estPrice = document.getElementById("uiEstimatedPrice");

    if (sqft == "" || sqft <= 0) {
        alert("Please enter a valid square feet value.");
        return;
    }

    var url = "http://127.0.0.1:5000/predict_home_price"; // Ensure your Flask API is running

    $.post(url, {
        total_sqft: parseFloat(sqft),
        bhk: bhk,
        bath: bathroom,
        location: location
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.innerHTML = "<h2> ₹ " + data.estimated_price.toFixed(2) + " Lakh</h2>";
        console.log(status);
    });
}

// Function to load locations dynamically
function onPageLoad() {
    console.log("Page Loaded!");

    var url = "http://127.0.0.1:5000/get_location_names"; // Ensure your Flask API is running

    $.get(url, function(data, status) {
        console.log("Got response for get_location_names request", data);
        
        if (data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");
            $('#uiLocations').empty();
            
            for (var i in locations) {
                var opt = new Option(locations[i]);
                $('#uiLocations').append(opt);
            }
        }
    });
}

// Ensuring page loads correctly
document.addEventListener("DOMContentLoaded", function() {
    onPageLoad();
});

// Restrict bathroom selection based on BHK
$(document).ready(function() {
    $("input[name='uiBHK']").change(function() {
        let bhk = parseInt($("input[name='uiBHK']:checked").val());

        // Define max bathrooms allowed per BHK
        let maxBathrooms = {1: 2, 2: 3, 3: 4, 4: 5};
        let allowedBath = maxBathrooms[bhk] || 5; // Default max is 5 for BHK > 4

        // Disable bathroom options exceeding the allowed limit
        $("input[name='uiBathrooms']").prop("disabled", false);
        $("input[name='uiBathrooms']").each(function() {
            let bathValue = parseInt($(this).val());
            if (bathValue > allowedBath) {
                $(this).prop("disabled", true);
            }
        });

        // If current selection is invalid, auto-select the highest allowed
        let selectedBath = parseInt($("input[name='uiBathrooms']:checked").val());
        if (selectedBath > allowedBath) {
            $("input[name='uiBathrooms'][value='" + allowedBath + "']").prop("checked", true);
        }
    });
});
