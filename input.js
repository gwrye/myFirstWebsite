document.getElementById('prForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const eventInput = document.getElementById('event').value;
    const timeInput = document.getElementById('time').value;

    let records = JSON.parse(localStorage.getItem('prRecords')) || [];

    records.push({ event: eventInput, time: timeInput });

    localStorage.setItem('prRecords', JSON.stringify(records));

    document.getElementById('event').value = '';
    document.getElementById('time').value = '';
});

function viewTable() {
    window.location.href = 'table.html';
}
