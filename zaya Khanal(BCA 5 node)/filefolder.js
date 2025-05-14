import { promises as fs } from 'fs';

const makeDirectory = async () => {
    try {
        await fs.mkdir("bca_5th");
        console.log("Directory created");
    } catch (error) {
        console.log(`Error creating directory ${error}`);
    }
};

// makeDirectory();

const readFilesInDirectory = async () => {
    try {
        const files = await fs.readdir("bca_5th");
        console.log(files);
    } catch (error) {
        console.log(`Error reading directory ${error}`);
    }
};

// readFilesInDirectory();

const createFiles = async () => {
    try {
        await fs.writeFile("newfile.txt", "This is an example of new file");
        console.log("New file created");

        await fs.writeFile("bca_5th/hello.txt", "Hello BCA 5th sem students");
        console.log("Here is a new file inside bca 5th sem");

        // Append data to above file
        await fs.appendFile("newfile.txt", " and it describes about file handling");

        // Delete a file
        await fs.unlink("newfile.txt");
        console.log("File deleted");

    } catch (error) {
        console.log(`Error creating files ${error}`);
    }
};

// createFiles();

const moveFiles = async () => {
    try {
        await fs.writeFile("fileOne.txt", "This is file one here");
        console.log("File one created");

        const sourcefile = "fileOne.txt";
        const destinationfile = "bca_5th/FileOne.txt"; 

        await fs.rename(sourcefile, destinationfile);
        console.log("File moved");

    } catch (error) {
        console.log(`Error moving file ${error}`);
    }
};


//  moveFiles();
 const getFilesStats= async()=>{
    try{
   const stats=await fs.stat("bca_5th/fileOne.txt");
   console.log(stats);
    }catch(error){
        console.log(`Error creating files ${error}`);
    }
 }
//  getFilesStats();
const removeDirectory= async()=>{
    try{
        await fs.rmdir("bca_5th");
        console.log("removed directory");
   console.log(stats);
    }catch(error){
        console.log(`Error creating files ${error}`);
    }
}
// removeDirectory();


