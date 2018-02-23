var thermostat = new Thermostat();

$(document).ready(function () {

    var currentTemperature = $('#current-temperature');
    currentTemperature.text(thermostat.currentTemperature);

$('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    currentTemperature.text(thermostat.currentTemperature);
});

$('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    currentTemperature.text(thermostat.currentTemperature);
});

$('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    currentTemperature.text(thermostat.currentTemperature);
});

});