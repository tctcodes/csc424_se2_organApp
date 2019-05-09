import {saveAs} from 'file-saver';


function toCSV(data){
    var csv = Object.keys(data[Object.keys(data)[0]]).join(","); // Header columns.
    csv += "\n";
    for (var item in data) {
        csv += Object.values(data[item]).join(",");
        csv += "\n";
    }
    
    const bytes = new TextEncoder().encode(csv);
    const blob = new Blob([bytes], {
        type: "text/csv;charset=utf-8"
    });
    
    saveAs(blob,"patient_csv")
}

export default toCSV;