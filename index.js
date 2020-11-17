
function showTable () {
    let table = document.getElementById('tabel')
    let tbody = table.getElementsByTagName("tbody")[0]
    
    let tr = ""
    
    for (let i = 0; i < Baris.length; i++) {
        tr +=`<tr>
                <td>${Baris[i].baris1}</td>
                <td>${Baris[i].baris2}</td>
                <td>${Baris[i].baris3}</td>
                <td><button onclick="Sort(${i})">SORT</button></td>
            </tr>
            `
    }
    tbody.innerHTML = tr + `<tr>
            <td><button id="klik4" onclick="Sort4()">SORT</button></td>
            <td><button id="klik5" onclick="Sort5()">SORT</button></td>
            <td><button id="klik6" onclick="Sort6()">SORT</button></td>
            <td ></td>
            </tr>`
}
showTable()

function Sort(index) {
    Baris[index].sort((a, b) => a - b);
    showTable()
}