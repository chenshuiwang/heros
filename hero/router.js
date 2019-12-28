const express = require('express')
const ctrl = require('./controller')
//创建路由器
let router = express.Router()
router.get('/',(req,res)=>{
    ctrl.showIndex(req,res)
})
router.get('/add',(req,res)=>{
    ctrl.showAdd(req,res)
})
router.get('/edit',(req,res)=>{
    ctrl.showEdit(req,res)
})
router.get('/info',(req,res)=>{
    ctrl.showInfo(req,res)
})
router.get('/getHeroData',(req,res)=>{
    ctrl.getHeroData(req,res)
})
router.get('/deleteHero',(req,res)=>{
    ctrl.deleteHero(req,res)
})
router.post('/addHeroInfo',(req,res)=>{
    ctrl.addHeroInfo(req,res)
})
router.get('/getOneHeroInfo',(req,res)=>{
    ctrl.getOneHeroInfo(req,res)
})
router.post('/updateHero',(req,res)=>{
    ctrl.updateHero(req,res)
})
module.exports = router