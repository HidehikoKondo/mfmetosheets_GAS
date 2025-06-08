//シートを開いたとき、データが記入されているセルの次の行に移動
function onOpen() {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var lastRow = sheet.getLastRow();
    var nextRow = lastRow + 1;
    sheet.setActiveRange(sheet.getRange(nextRow, 1));
}


function doPost(e) {
    try {
        Logger.log("success dopost");
        Logger.log(e);
    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({ error, e })).setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    Logger.log("success doget");
    Logger.log(e);

}
