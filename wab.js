/**
 * Created by gil on 12/09/15.
 */
window.onload = function () {
    var form = document.forms.formulario;
    form.oninput = function () {
        form.eaMomX.value = form.eaKg.value * form.eaArmX.value
        form.eaMomY.value = form.eaKg.value * form.eaArmY.value
        form.rsMomX.value = form.rsKg.value * form.rsArmX.value
        form.rsMomY.value = form.rsKg.value * form.rsArmY.value
        form.lsMomX.value = form.lsKg.value * form.lsArmX.value
        form.lsMomY.value = form.lsKg.value * form.lsArmY.value
        if (form.ldKg.checked == 1) {
            form.ldMomX.value = 0
            form.ldMomY.value = 0
        }
        form.mlMomX.value = form.mlKg.value * form.mlArmX.value
        form.mlMomY.value = form.mlKg.value * form.mlArmY.value
        form.flMomX.value = form.flKg.value * form.flArmX.value
        form.flMomY.value = form.flKg.value * form.flArmY.value
        form.fuelKg.value = Number(form.fuelQ.value * 0.72).toFixed(2)
        form.fuelMomX.value = (form.fuelKg.value * form.fuelArmX.value).toFixed(2)
        form.fuelMomY.value = (form.fuelKg.value * form.fuelArmY.value).toFixed(2)
        if (form.ldKg.checked & form.rdKg.checked ) {
            form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value)
            } else if (!form.ldKg.checked & form.rdKg.checked || form.ldKg.checked & !form.rdKg.checked  ) {
            form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value)
        } else form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value) +Number(form.rdKg.value)
        form.totalArmX.value = (Number(form.eaArmX.value) + Number(form.rsArmX.value) + Number(form.lsArmX.value) + Number(form.rdArmX.value) + Number(form.ldArmX.value) + Number(form.mlArmX.value) + Number(form.flArmX.value) + Number(form.fuelArmX.value)).toFixed(2)
        form.totalArmY.value = (Number(form.eaArmY.value) + Number(form.rsArmY.value) + Number(form.lsArmY.value) + Number(form.rdArmY.value) + Number(form.ldArmY.value) + Number(form.mlArmY.value) + Number(form.flArmY.value) + Number(form.fuelArmY.value)).toFixed(2)
        form.totalMomX.value = (Number(form.eaMomX.value) + Number(form.rsMomX.value) + Number(form.lsMomX.value) + Number(form.rdMomX.value) + Number(form.ldMomX.value) + Number(form.mlMomX.value) + Number(form.flMomX.value) + Number(form.fuelMomX.value)).toFixed(2)
        form.totalMomY.value = (Number(form.eaMomY.value) + Number(form.rsMomY.value) + Number(form.lsMomY.value) + Number(form.rdMomY.value) + Number(form.ldMomY.value) + Number(form.mlMomY.value) + Number(form.flMomY.value) + Number(form.fuelMomY.value)).toFixed(2)
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
        form.ldMomX.value = 0
        form.ldMomY.value = 0
    }
    if (form.ldKg.checked & form.rdKg.checked ) {
        form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value)
    } else if (!form.ldKg.checked & form.rdKg.checked || form.ldKg.checked & !form.rdKg.checked  ) {
        form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value)
    } else form.totalKg.value = Number(form.eaKg.value) + Number(form.rsKg.value) + Number(form.lsKg.value) + Number(form.mlKg.value) + Number(form.flKg.value) + Number(form.fuelKg.value) + Number(form.ldKg.value) +Number(form.rdKg.value)
}
