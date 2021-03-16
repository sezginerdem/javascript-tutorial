
document.getElementById("btn_1").addEventListener("click", sumNumbers)

function sumNumbers() {
    const num_1 = document.getElementById("inp_1").value;
    const num_2 = document.getElementById("inp_2").value;
    const result = parseInt(num_1) + parseInt(num_2);
    document.getElementById("res").innerHTML = result
}