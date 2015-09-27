/**
 * Created by gil on 12/09/15.
 */
window.onload = function () {
    var form = document.forms.formulario;
    form.oninput = function () {
        form.eaMomX.value = form.eaKg.value * form.eaArmX.value;
        form.eaMomY.value = form.eaKg.value * form.eaArmY.value;
        form.rsMomX.value = form.rsKg.value * form.rsArmX.value;
        form.rsMomY.value = form.rsKg.value * form.rsArmY.value;
        form.lsMomX.value = form.lsKg.value * form.lsArmX.value;
        form.lsMomY.value = form.lsKg.value * form.lsArmY.value;
        if (form.ldKg.checked == 1) {
            form.ldMomX.value = 0;
            form.ldMomY.value = 0
        } else {form.ldMomX.value = -5250;
                form.ldMomY.value = 2520
        }
        if (form.rdKg.checked == 1) {
            form.rdMomX.value = 0;
            form.rdMomY.value = 0
        } else {form.rdMomX.value = -5250;
            form.rdMomY.value = -2520
        }
        form.mlMomX.value = form.mlKg.value * form.mlArmX.value;
        form.mlMomY.value = form.mlKg.value * form.mlArmY.value;
        form.flMomX.value = form.flKg.value * form.flArmX.value;
        form.flMomY.value = form.flKg.value * form.flArmY.value;
        form.fuelKg.value = Number(form.fuelQ.value * 0.72).toFixed(2);
        form.fuelMomX.value = (form.fuelKg.value * form.fuelArmX.value).toFixed(2);
        form.fuelMomY.value = (form.fuelKg.value * form.fuelArmY.value).toFixed(2);
        if (form.ldKg.checked & form.rdKg.checked ) {
            form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value)
            } else if (!form.ldKg.checked & form.rdKg.checked || form.ldKg.checked & !form.rdKg.checked  ) {
            form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value)
        } else form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value) +Number(form.rdKg.value)
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
        form.totalArmX.value = (Number(form.totalMomX.value) / Number(form.totalKg.value)).toFixed(1)
        form.totalArmY.value = (Number(form.totalMomY.value) / Number(form.totalKg.value)).toFixed(1)
//////////////////FUELS
        var infuelX = [[ Number(form.totalArmX.value) ,Number(form.totalKg.value)]];
        var infuelY = [[ Number(form.totalArmX.value) ,Number(form.totalArmY.value)]];
        //out fuel
        var totalKgOF = form.totalKg.value - form.fuelKg.value;
        var totalMomXOF = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value)).toFixed(2);
        var totalMomYOF = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value)).toFixed(2);
        var totalArmXOF = (Number(totalMomXOF / totalKgOF)).toFixed(1);
        var totalArmYOF = (Number(totalMomYOF / totalKgOF)).toFixed(1);
        var outfuelX = [[ Number(totalArmXOF) ,Number(totalKgOF)]];
        var outfuelY = [[ Number(totalArmXOF) ,Number(totalArmYOF)]];
//////////////// LONGITUDINAL
        $('#graficaLong').highcharts({
            title: {
                text: 'Cabri G2 Weight and Balance'
            },
            subtitle: {
                text: 'Longitudinal Balance diagram'
            },
            xAxis: {
                gridLineWidth: 1,
                title: {
                    enabled: true,
                    text: 'Distance from datum in cm'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                },
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: [{
                name: 'In-range W&B',
                type: 'polygon',
                data: [
                    [2120, 470],
                    [2120, 500],
                    [2025, 700],
                    [1915, 700],
                    [1915, 550],
                ],
                color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
                enableMouseTracking: false

            }, {
                name: 'With fuel',
                type: 'scatter',
                color: Highcharts.getOptions().colors[1],
                //data: JSON.parse("[" + infuel + "]"),
                //data: [[2000, 600],]  //infuel,
                data: infuelX
            }, {
                name: 'With-out fuel',
                type: 'scatter',
                color: Highcharts.getOptions().colors[5],
                data: outfuelX

            }


            ],
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        });
//////////////// Lateral
        $('#graficaLat').highcharts({
            title: {
                text: 'Cabri G2 Weight and Balance'
            },
            subtitle: {
                text: 'Lateral Balance diagram'
            },
            xAxis: {
                gridLineWidth: 1,
                title: {
                    enabled: true,
                    text: 'Distance from datum in cm'
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Weight (kg)'
                },
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },
            series: [{
                name: 'In-range W&B',
                type: 'polygon',
                data: [
                    [2120, 80],
                    [2120, -80],
                    [1915, -80],
                    [1915, 80],

                ],
                color: Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0.5).get(),
                enableMouseTracking: false

            }, {
                name: 'With fuel',
                type: 'scatter',
                color: Highcharts.getOptions().colors[1],
                //data: JSON.parse("[" + infuel + "]"),
                //data: [[2000, 600],]  //infuel,
                data: infuelY
            }, {
                name: 'With-out fuel',
                type: 'scatter',
                color: Highcharts.getOptions().colors[5],
                data: outfuelY

            }


            ],
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            }
        });
    }
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;
    document.getElementById("theDate").value = today;


}



function checkboxs() {
    var form = document.forms.formulario;
    if (form.ldKg.checked == 1) {
        form.ldMomX.value = 0;
        form.ldMomY.value = 0
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
        form.totalArmX.value = (Number(form.totalMomX.value) / Number(form.totalKg.value)).toFixed(1)
        form.totalArmY.value = (Number(form.totalMomY.value) / Number(form.totalKg.value)).toFixed(1)
    } else {form.ldMomX.value = -5250;
        form.ldMomY.value = 2520
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
        form.totalArmX.value = (Number(form.totalMomX.value) / Number(form.totalKg.value)).toFixed(1)
        form.totalArmY.value = (Number(form.totalMomY.value) / Number(form.totalKg.value)).toFixed(1)
    }
    if (form.rdKg.checked == 1) {
        form.rdMomX.value = 0;
        form.rdMomY.value = 0
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
        form.totalArmX.value = (Number(form.totalMomX.value) / Number(form.totalKg.value)).toFixed(1)
        form.totalArmY.value = (Number(form.totalMomY.value) / Number(form.totalKg.value)).toFixed(1)
    } else {form.rdMomX.value = -5250;
        form.rdMomY.value = -2520
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
        form.totalArmX.value = (Number(form.totalMomX.value) / Number(form.totalKg.value)).toFixed(1)
        form.totalArmY.value = (Number(form.totalMomY.value) / Number(form.totalKg.value)).toFixed(1)
    }

    if (form.ldKg.checked & form.rdKg.checked ) {
        form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value);
        form.ldMomX.value = 0;
        form.ldMomY.value = 0;
        form.rdMomX.value = 0;
        form.rdMomY.value = 0;
    } else if (!form.ldKg.checked & form.rdKg.checked || form.ldKg.checked & !form.rdKg.checked  ) {
        form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value)
    } else form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value) +Number(form.rdKg.value)
}
