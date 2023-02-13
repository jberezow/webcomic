import * as fs from "fs";

interface ComicFromJson {
	title: string;
	date: string;
	json_path: string;
	comic_path: string;
}

const folderPath = "./assets/comics/metadata";
const files = fs.readdirSync(folderPath);

const jsonFiles = files.filter((file) => file.endsWith(".json"));

const comicList: ComicFromJson[] = [];

jsonFiles.forEach((file) => {
	const fileData = fs.readFileSync(`${folderPath}/${file}`);
	comicList.push(JSON.parse(fileData.toString()));
});

export default comicList;
