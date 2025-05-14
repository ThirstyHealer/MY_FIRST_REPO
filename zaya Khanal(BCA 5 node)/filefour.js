
import { promises as fs } from 'fs';

const makeDirectory = async () => {
    try {
        await fs.mkdir("bca_5th");
        console.log("Directory created");
    } catch (error) {
        console.log(`Error creating directory ${error}`);
    }
};
makeDirectory();

const createFile = async () => {
    try {
        await fs.writeFile("newfile1.txt", "This is an example of new file");
        console.log("New file created");

    } catch (error) {
        console.log(`Error creating files ${error}`);
    }
};
//create files();
//moving files
const movingFile = async () => {
  try {
      await fs.copyFiles("newfile1.txt", "fileone.js");
      // console.log("New file created");

  } catch (error) {
      console.log(`Error creating files ${error}`);
  }
}
