
export const getBase64 = (file: File) => {
    return new Promise((resolve, rejext) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        }
        fileReader.onerror = (error) => {
            rejext(error)
        }
    })
}