const getImagePathByFileName = (exhibitionData, fileName) => `./assets/exhibitions/${exhibitionData.meta.imageFolderName}/${fileName}`;

export default getImagePathByFileName;
