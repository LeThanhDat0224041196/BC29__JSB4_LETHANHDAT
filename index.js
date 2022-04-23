/**
 * Sơ đồ ba khối bài 1:
 *      - Giả sử:
 *          + cho ba số nguyên a=4, b=3, c=2
 *          + Nếu a > b và b > c thì a > c 
 *          + Xuất ra màn hình theo thứ tự tăng dần
 *  *      - Đầu vào:
 *      - Xử lý:
 *      - Đầu ra: 
 */

document.getElementById("sapXep").onclick = function(){
        var a = document.getElementById("soThu1").value *1;
        var b = document.getElementById("soThu2").value *1;
        var c = document.getElementById("soThu3").value *1;
        var thongBao = "";
        var thongBao1 = "";
        var thongBao2 = "";
        var thongBao3 = "";

        if(a<b && a<c){
            thongBao1 =a;
        }else if(b>a && b<c){
            thongBao2 =b;
        }else if(c>a && c>b){
            thongBao3 =c;
        }else{
            thongBao="Không sắp xếp"
        }

        var xuatKetQua = thongBao1 + thongBao2 +thongBao3;
        document.getElementById("thongBao").innerHTML = xuatKetQua;
}