let billTip = document.querySelector("#tips");
billTip.addEventListener("input", totalValue);
function totalValue() {
    let billAmount = parseInt(document.querySelector("#amount").value);
    let billTips = parseInt(document.querySelector("#tips").value);
    let tipsAvg = (billTips * billAmount / 100);
    document.querySelector('#rupees').value = tipsAvg;
    let totalBill = billAmount + tipsAvg;
    document.querySelector("#total").value = `${totalBill}`;
    document.querySelector(".text-value").innerText = `${totalBill}`;
    // spanEle=`${totalBill}`;
}