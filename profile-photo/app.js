
/* The script is deployed as a web app and renders the form */
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('form.html')
            .setSandboxMode(HtmlService.SandboxMode.NATIVE);
  // This is important as file upload fail in IFRAME Sandbox mode.
}
 
/* This function will process the submitted form */
function uploadFiles(form) {
  
  try {
    
    /* Name of the Drive folder where the files should be saved */
    var dropbox = form.myName + " " + form.myEmail;
    var folder, folders = DriveApp.getFoldersByName(dropbox);
    
    /* Find the folder, create if the folder does not exist */
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(dropbox);
    }
    
    /* Get the file uploaded though the form as a blob */
    var blob = form.myFile;    
    var file = folder.createFile(blob);    
    
    /* Set the file description as the name of the uploader */
    file.setDescription("Uploaded by " + form.myName);
        
    /* Return the download URL of the file once its on Google Drive */
    return "File uploaded successfully " + file.getUrl();
    
  } catch (error) {
    
    /* If there's an error, show the error message */
    return error.toString();
  }
  
}
 