var array = [];
document.querySelector("#array").innerHTML = array;

function themSoVaoMang() {
    var soN = +document.querySelector("#soN").value;
    array.push(soN);
    console.log(array);
    document.querySelector("#array").innerHTML = array;
}

function tinhTongSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            tongSoDuong += array[i];
        }
    }
    document.querySelector("#tongSoDuong").innerHTML = `Tổng các số dương trong mảng là: ${tongSoDuong}`;
}

function demSoDuong() {
    var soDuong = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            soDuong++;
        }
    }
    document.querySelector("#soDuong").innerHTML = `Số lượng số dương trong mảng là: ${soDuong}`;
}

function timSoNhoNhat() {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
   
    document.querySelector("#soNhoNhat").innerHTML = `Số nhỏ nhất trong mảng là: ${min}`;
}

function timSoDuongNhoNhat() {
    var soDuongNhoNhat = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < soDuongNhoNhat && array[i] > 0) {
            soDuongNhoNhat = array[i];
        }
    }
    document.querySelector("#soDuongNhoNhat").innerHTML = `Số dương nhỏ nhất trong mảng là: ${soDuongNhoNhat}`;
}

function timSoChanCuoiCung() {
    var soChan = array.filter(function (n) {
        return n % 2 == 0;
    });

    document.querySelector("#soChanCuoiCung").innerHTML = `Số chẵn cuối cùng trong mảng là: ${soChan[soChan.length - 1]}`;
}


function doiCho() {
    var viTri1 = +document.querySelector("#viTri1").value;
    var viTri2 = +document.querySelector("#viTri2").value;
    var temp;
    temp = array[viTri1];
    array[viTri1] = array[viTri2];
    array[viTri2] = temp;

    document.querySelector("#doiCho").innerHTML = `Mảng sau khi đổi là: ${array}`;
}

function sapXep() {
    array.sort(function(a, b){return a - b});
    document.querySelector("#sapXep").innerHTML = `Mảng sau khi sắp xếp là: ${array}`;
}

function kiemTraSNT(n){
    var flag = true;
 
    if (n < 2){
        flag = false;
    }
    else if (n == 2){
        flag = true;
    }
    else if (n % 2 == 0){
      flag = false;
    }
    else{
        for (var i = 3; i < n-1; i+=2)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    return flag;
}

function timSoNguyenTo() {
    for (var i = 0; i < array.length; i++) {
        if (kiemTraSNT(array[i]) == true){
            document.getElementById('soNguyenTo').innerHTML = `
            <div>
            <p>Số nguyên tố đầu tiên là ${array[i]}</p>
            </div>
            `;
            break;
        }
        else{
            document.getElementById('soNguyenTo').innerHTML = `
            <div>
            <p>Mảng không chứa số nguyên tố nào</p>
            </div>
            `;
        }
    }
}

var array2 = [];
document.querySelector("#array2").innerHTML = array2;

function themSo() {
    var soNguyen = +document.querySelector("#soNguyen").value;
    array2.push(soNguyen);
    console.log(array2);
    document.querySelector("#array2").innerHTML = array2;
}

function demSoNguyen() {
    var count = 0;
    for (var i = 0; i < array2.length; i++){
        if (Number.isInteger(array2[i]) == true){
            count++;
        }
    }
    document.querySelector("#demSoNguyen").innerHTML = `
    <div>
    <p>Số nguyên: ${count}</p>
    </div>
    `;
}

function soSanh() {
    var soDuong = 0;
    var soAm = 0;
     for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            soDuong++;
        }
        else if (array[i] < 0) {
            soAm++;
        }
     }

     if (soDuong > soAm) {
        document.querySelector("#soSanh").innerHTML = `
        <div>
        <p>Số dương > Số âm</p>
        </div>
        `;
     }
     else if (soAm > soDuong) {
        document.querySelector("#soSanh").innerHTML = `
        <div>
        <p>Số dương < Số âm</p>
        </div>
        `;
     }
     else {
        document.querySelector("#soSanh").innerHTML = `
        <div>
        <p>Số dương = Số âm</p>
        </div>
        `;
     }
}
