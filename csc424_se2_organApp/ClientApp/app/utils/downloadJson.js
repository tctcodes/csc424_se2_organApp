import {saveAs} from 'file-saver'

function downloadJson(data,filename){
    
    const str = JSON.stringify(data,null,2);
    const bytes = new TextEncoder().encode(str);
    const blob = new Blob([bytes], {
        type: "application/json;charset=utf-8"
    });

    saveAs(blob, filename);
}

export default downloadJson;