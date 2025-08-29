// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip
import fs from "fs/promises";
import path from "path";

async function createFolders(dirpath) {
    let folders=[];
    try {
        await fs.access(dirpath) // if path does not exists this will throw error 
        let files = await fs.readdir(dirpath);
        let foldernames = getExtensions(files);
            for (const folder of foldernames) {
                let folderpath = path.join(dirpath, folder);
                console.log(folderpath);
                    if(!await exists(folderpath)){
                        fs.mkdir(folderpath);
                    }
                }
    } catch (err) {
        console.log(err.stack);
    }
}

async function exists(path) {
  try {
    await fs.stat(path); // will throw if path does not exist
    return true;         // exists
  } catch {
    return false;        // does not exist
  }
}
async function isFile(path) {
  try {
    const stat=await fs.stat(path); // will throw if path does not exist
    return stat.isFile();         // exists
  } catch {
    return false;        // does not exist
  }
}
async function isDir(path) {
  try {
    const stat=await fs.stat(path); // will throw if path does not exist
    return stat.isDirectory();         // exists
  } catch {
    return false;        // does not exist
  }
}



async function getFilesNames(dirpath){
    if(await exists(dirpath)){
        const filesnames=[];
        const files = await fs.readdir(dirpath);
        for(const file of files){
            const filepath = path.join(dirpath,file);
            if(await isFile(filepath)){
                filesnames.push(filepath);
            }
        }
        return filesnames;
    }else{
        throw new Error(`${dirpath} is invalid `);
    }
}
async function getDirNames(dirpath){
    if(await exists(dirpath)){
        const dirnames=[];
        const allfiles = await fs.readdir(dirpath);
        for(const dir of allfiles){
            const filepath = path.join(dirpath,dir);
            if(await isDir(filepath)){
                dirnames.push(filepath);
            }
        }
        return dirnames;
    }else{
        throw new Error(`${dirpath} is invalid `);
    }
}

function getExtensions(filesname) {
    const extensions = filesname.map((file) => {
        return getExtension(file);
    })
    return new Set(extensions);
}

function getExtension(filename){
    const path= filename.split(".");
    return path[path.length-1];
}
function getDirname(filename){
    const path= filename.split("/");
    return path[path.length-1];
}






async function copy(source,destination) {
    try{
        await fs.copyFile(source,destination);
        await fs.unlink(source);
    }catch(err){
        console.log(err.stack);
        console.log(err.code);
        
    }

}


async function mapFileWithDir(filesname,dirnames){
    
    const map = {}
    for(let dir of dirnames){
        let key = path.basename(dir);
        map[key]=[]
    }
    for(let file of filesname){
        let basename = path.basename(file);
        let key = getExtension(basename);
        map[key].push(basename);
    }
    // console.log(map);    
    return map;
}


async function applyCopy(filemap,dirpath){
    for(const key in filemap){
        for ( const file of filemap[key]){
            const source = path.join(dirpath,file);
            const destination = path.join(dirpath,key,file);
           await copy(source,destination);
        }
    }
}


async function cleanUpClutter(dirpath) {    
    await createFolders(dirpath);// create folders
    const filenames= await getFilesNames(dirpath);// getting filesnames
    const dirnames=await getDirNames(dirpath);// getting dirnames
    const filemap =await mapFileWithDir(filenames,dirnames);// map file with folders
    console.log(filemap);
    await applyCopy(filemap,dirpath);// just copy the mapping folder to corresponding destinations
}

const dirpath = "E:/CodeWithHarry/WebDevelopment/SigmaWeb/code/backend/excersise1/test";

await cleanUpClutter(dirpath)


