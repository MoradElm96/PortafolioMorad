function descargarPDF() {
    // Obtener el nombre del archivo PDF que se va a descargar
    var fileName = "CvMorad.pdf";
    
    // Crear una URL que apunta al script PHP que descarga el archivo
    var url = "php/cv.php?file=" + fileName;
    
    // Redirigir a la URL creada para descargar el archivo
    window.location.href = url;}