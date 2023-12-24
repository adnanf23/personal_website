// Fungsi untuk menginisialisasi Google Sheets API
function initClient() {
  gapi.client.init({
     apiKey: 'AIzaSyAFyowvVPfn5LLPudPQY06MfsLE7NNCHfM', // Ganti dengan kunci API Anda
     clientId: '1086909686798-3dgmdmeh2np9b90cf3biog61chuosh96.apps.googleusercontent.com', // Ganti dengan ID Klien OAuth Anda
     discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
     scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
     // Setelah berhasil menginisialisasi, panggil fungsi untuk menambahkan data ke spreadsheet
     addToSheet();
  });
}

// Fungsi untuk menambahkan data ke spreadsheet
function addToSheet() {
  var spreadsheetId = '1VhCoU84ioVwHbSYuRsEJOs90qyAgYnz0FLiM39z-MgQ'; // Ganti dengan ID spreadsheet Anda
  var range = 'Sheet1'; // Ganti dengan nama sheet Anda
  var values = [
     [document.getElementById('email').value, document.getElementById('message').value]
     // Tambahkan nilai dari formulir Anda sesuai dengan kebutuhan
  ];

  gapi.client.sheets.spreadsheets.values.append({
     spreadsheetId: spreadsheetId,
     range: range,
     valueInputOption: 'RAW',
     resource: { values: values }
  }).then(function(response) {
     console.log(response);
  });
}