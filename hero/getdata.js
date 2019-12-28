const mysql = require('mysql');
let conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'hero',
    dateStrings:true
})
conn.connect();
module.exports = {
    getHeroData(callback){
        let sql = 'select * from heros';
        conn.query(sql,(err,result)=>{
            if(err) return callback(err);
            callback(null,result)
        })
    },
    getOneHero(id,callback){
        // this.getHeroData((err,data)=>{
        //     if(err) return callback(err);
        //     let heros = JSON.parse(data);
        //     let hero = heros.find((item,index)=>{
        //         return item.id == id;
        //     })
        //     let arr = hero[0];
        //     callback(null,arr)
        // })
        let sql = 'delete from heros where id=?';
        conn.query(sql,[id],(err,result)=>{
            if(err) return callback(err)
            //console.log(id)
            callback(null,result)
        })
    },
    addHeroInfo(data,callback){
        let sql = 'insert into heros set?';
        conn.query(sql,[data],(err,result)=>{
            if(err) return  callback(false);
            callback(true)
        })
    },
    getOneHeroInfo(id,callback){
        let sql = 'select * from heros where id=?'
        conn.query(sql,[id],(err,result)=>{
            if(err) return callback(err);
            callback(null,result)
        })
    },
    updateHero(hero,callback){
        let id = parseInt(hero.id);
        console.log(id)
        let sql = 'update heros set? where id =?'
        conn.query(sql,[hero,id],(err,result)=>{
            if(err) return callback(false);
            return callback(true)
        })
    }
}