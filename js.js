function convertToBase64() {
    //Read File
    var selectedFile = document.getElementById("inputFile").files;
    //Check File is not Empty
    if (selectedFile.length > 0) {
        // Select the very first file from list
        var fileToLoad = selectedFile[0];
        // FileReader function for read the file.
        var fileReader = new FileReader();
        var base64;
        // Onload of file read the file content
        fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
            // Print data in console
            console.log(base64);
            localStorage.setItem('PDFbase64',base64)
        };
        // Convert data to base64
        fileReader.readAsDataURL(fileToLoad);
    }
}

window.downloadPDF = function downloadPDF() {
    
        var dlnk = document.getElementById('dwnldLnk');
        dlnk.href = pdf;
    
        dlnk.click();
    
    
        alert('Nice!');
    }
    var B64=localStorage.getItem('PDFbase64');
    var pdf =B64; 
    