document.addEventListener('DOMContentLoaded', function() {

    let records = JSON.parse(localStorage.getItem('prRecords')) || [];

    const tableBody = document.getElementById('prTable').getElementsByTagName('tbody')[0];
    
    records.forEach(record => {
        const newRow = tableBody.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.textContent = record.event;
        cell2.textContent = record.time;
    });
});

function goBack() {
    window.location.href = 'input.html';
}
