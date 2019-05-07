import {saveAs} from 'file-saver'

function downloadJson(res,filename){
    
    const str = JSON.stringify(res.data,null,2);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });

    saveAs(blob,filename);
}

export default downloadJson;