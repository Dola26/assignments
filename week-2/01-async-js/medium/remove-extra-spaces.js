const fs = require('fs');

let path = 'a.txt';

// Read file asynchronously
fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }

    // Replace spaces in the content
    const modifiedContent = data.replace(/\s+/g, ' ');

    // Write the modified content back to the file
    fs.writeFile(path, modifiedContent, 'utf-8', (writeErr) => {
        if (writeErr) {
            console.error("Error writing File:", writeErr);
            return;
        }

        console.log("Spaces removed successfully!");
    });
});
