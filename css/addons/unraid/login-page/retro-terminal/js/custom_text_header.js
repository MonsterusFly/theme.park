
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>
╔═══════════════════════════════════════════════════════════════╗
║___  ___                _                       ______ _       ║
║|  \/  |               | |                      |  ___| |      ║
║| .  . | ___  _ __  ___| |_ ___ _ __ _   _ ___  | |_  | |_   _ ║
║| |\/| |/ _ \| '_ \/ __| __/ _ \ '__| | | / __| |  _| | | | | |║
║| |  | | (_) | | | \__ \ ||  __/ |  | |_| \__ \ | |   | | |_| |║
║\_|  |_/\___/|_| |_|___/\__\___|_|   \__,_|___/ \_|   |_|\__, |║
║                                                          __/ |║
║                                                         |___/ ║
╚═══════════════════════════════════════════════════════════════╝ 
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
