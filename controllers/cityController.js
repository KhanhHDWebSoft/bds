const { city: cityModel } = require('../models');

const data = [
    {"id":"1","_name":"Hồ Chí Minh","_code":"SG"},
    {"id":"2","_name":"Hà Nội","_code":"HN"},
    {"id":"3","_name":"Đà Nẵng","_code":"DDN"},
    {"id":"4","_name":"Bình Dương","_code":"BD"},
    {"id":"5","_name":"Đồng Nai","_code":"DNA"},
    {"id":"6","_name":"Khánh Hòa","_code":"KH"},
    {"id":"7","_name":"Hải Phòng","_code":"HP"},
    {"id":"8","_name":"Long An","_code":"LA"},
    {"id":"9","_name":"Quảng Nam","_code":"QNA"},
    {"id":"10","_name":"Bà Rịa Vũng Tàu","_code":"VT"},
    {"id":"11","_name":"Đắk Lắk","_code":"DDL"},
    {"id":"12","_name":"Cần Thơ","_code":"CT"},
    {"id":"13","_name":"Bình Thuận  ","_code":"BTH"},
    {"id":"14","_name":"Lâm Đồng","_code":"LDD"},
    {"id":"15","_name":"Thừa Thiên Huế","_code":"TTH"},
    {"id":"16","_name":"Kiên Giang","_code":"KG"},
    {"id":"17","_name":"Bắc Ninh","_code":"BN"},
    {"id":"18","_name":"Quảng Ninh","_code":"QNI"},
    {"id":"19","_name":"Thanh Hóa","_code":"TH"},
    {"id":"20","_name":"Nghệ An","_code":"NA"},
    {"id":"21","_name":"Hải Dương","_code":"HD"},
    {"id":"22","_name":"Gia Lai","_code":"GL"},
    {"id":"23","_name":"Bình Phước","_code":"BP"},
    {"id":"24","_name":"Hưng Yên","_code":"HY"},
    {"id":"25","_name":"Bình Định","_code":"BDD"},
    {"id":"26","_name":"Tiền Giang","_code":"TG"},
    {"id":"27","_name":"Thái Bình","_code":"TB"},
    {"id":"28","_name":"Bắc Giang","_code":"BG"},
    {"id":"29","_name":"Hòa Bình","_code":"HB"},
    {"id":"30","_name":"An Giang","_code":"AG"},
    {"id":"31","_name":"Vĩnh Phúc","_code":"VP"},
    {"id":"32","_name":"Tây Ninh","_code":"TNI"},
    {"id":"33","_name":"Thái Nguyên","_code":"TN"},
    {"id":"34","_name":"Lào Cai","_code":"LCA"},
    {"id":"35","_name":"Nam Định","_code":"NDD"},
    {"id":"36","_name":"Quảng Ngãi","_code":"QNG"},
    {"id":"37","_name":"Bến Tre","_code":"BTR"},
    {"id":"38","_name":"Đắk Nông","_code":"DNO"},
    {"id":"39","_name":"Cà Mau","_code":"CM"},
    {"id":"40","_name":"Vĩnh Long","_code":"VL"},
    {"id":"41","_name":"Ninh Bình","_code":"NB"},
    {"id":"42","_name":"Phú Thọ","_code":"PT"},
    {"id":"43","_name":"Ninh Thuận","_code":"NT"},
    {"id":"44","_name":"Phú Yên","_code":"PY"},
    {"id":"45","_name":"Hà Nam","_code":"HNA"},
    {"id":"46","_name":"Hà Tĩnh","_code":"HT"},
    {"id":"47","_name":"Đồng Tháp","_code":"DDT"},
    {"id":"48","_name":"Sóc Trăng","_code":"ST"},
    {"id":"49","_name":"Kon Tum","_code":"KT"},
    {"id":"50","_name":"Quảng Bình","_code":"QB"},
    {"id":"51","_name":"Quảng Trị","_code":"QT"},
    {"id":"52","_name":"Trà Vinh","_code":"TV"},
    {"id":"53","_name":"Hậu Giang","_code":"HGI"},
    {"id":"54","_name":"Sơn La","_code":"SL"},
    {"id":"55","_name":"Bạc Liêu","_code":"BL"},
    {"id":"56","_name":"Yên Bái","_code":"YB"},
    {"id":"57","_name":"Tuyên Quang","_code":"TQ"},
    {"id":"58","_name":"Điện Biên","_code":"DDB"},
    {"id":"59","_name":"Lai Châu","_code":"LCH"},
    {"id":"60","_name":"Lạng Sơn","_code":"LS"},
    {"id":"61","_name":"Hà Giang","_code":"HG"},
    {"id":"62","_name":"Bắc Kạn","_code":"BK"},
    {"id":"63","_name":"Cao Bằng","_code":"CB"}
]

exports.migrateData = async (req, res) => {
    for (let i = 0; i < data.length; i++) {
        await cityModel.create({
            id: data[i].id,
            _name: data[i]._name,
            _code: data[i]._code,
        })
    }
    return res.end();
}

exports.getAllCity = async (req, res) => {
    try {
        const cityData = await cityModel.find();
        res.status(200).json({
            status: 'success',
            data: cityData
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
            data: e
        })
    }
}
