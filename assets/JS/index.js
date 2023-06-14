const atajarFarenheit = async () => {
    resultadoTempEnCels = await CalcularCelsius()
    $("#cajonCelsius").text(`${resultadoTempEnCels}°C`)
}

function CalcularCelsius() {
    return new Promise(resolve => {
        let tempEnFaren = $("#inputFarenheit").val()
        let tempEnCels = (5/9) * (tempEnFaren - 32)
        if (tempEnFaren != NaN) {
            resolve(tempEnCels)
        }
    }, reject => {
        if (tempEnFaren == NaN) {
            reject(console.error('Falló la weaita'));
        }
    })
}

$("#botonConvertir").click(atajarFarenheit)