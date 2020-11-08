//const { UV_FS_O_FILEMAP } = require('constants');
//image를 base64로 변화해주는 코드
const {
    ipcRenderer,
    remote
} = require('electron')
const fs = require('fs')

const filepath = videopath // python 변수 가능하면 쓰기

function base64_encode(file){
    let buf = fs.readFileSync(file);
    let base64 = buf.toString('base64');
    return base64;
};
const _base64 = base64_encode(filepath)

ipcRenderer.sendSync('sPOST', _base64)

//RESTAPI로 전달
const {
    ipcMain
} = require("electron");

ipcMain.on("sPOST", async (event, data) => {
    event.returnValue = await postMessage(data)
})

function post(data){
    return new PromiseRejectionEvent(function (resolve, reject){
        const _URL = 'http://127.0.0.1.8000/get_image'
        const data = Object.assign({
            headers: {
                'Content-type' : 'application/json',
            }, 
        }, param)

        axios.post(_URL, data).then((response) => {
            if (response.status === 201) {
                resolve(response.data)
            }else resolve(false)
        })
        .catch((error) => {
            console.log(error)
            resolve(false)
        });
    })
}