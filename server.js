const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tai29082002',
    database: 'city',
})

con.connect(function (err) {
    if (err) {
        throw new Error(err)
    }
    else {
        const showList = 'SELECT listcity FROM (id,name,country)'
        con.query(showList,function(err,result){
                if(err) {
                    throw new Error(err.message)
                }
                console.log(result)
        })
        const AddCity = 'INSERT INTO listcity(name,country,area,population,GDP,description) VALUES (TPHCM,VietNam,30000,300000,VietNam)'
        con.query(AddCity,function(err,result){
            if(err) {
                throw new Error(err.message)
            }
            console.log(result)
        })
        const CreateCity = 'UPDATE listcity SET name = Luan Don, country = Mi , area = 1111123, population = 500000000, GDP = 2900000 ,description = Mi WHERE id = 2 '
        con.query(CreateCity,function(err,result){
            if(err) {
                throw new Error(err.message)
            }
            console.log(result)
        })
        const DeleteCity = 'DELETE FROM listcity WHERE id = 4'
        con.query(DeleteCity,function(err,result){
            if(err) {
                throw new Error(err.message)
            }
            console.log(result)
        })
    }
})

