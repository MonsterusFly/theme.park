
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>  
 __  __  ___  _   _ ____ _____ _____ ____  _   _ ____    _____ _  __   __
|  \/  |/ _ \| \ | / ___|_   _| ____|  _ \| | | / ___|  |  ___| | \ \ / /
| |\/| | | | |  \| \___ \ | | |  _| | |_) | | | \___ \  | |_  | |  \ V / 
| |  | | |_| | |\  |___) || | | |___|  _ <| |_| |___) | |  _| | |___| |  
|_|  |_|\___/|_| \_|____/ |_| |_____|_| \_\\___/|____/  |_|   |_____|_|    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
