const fs = require('fs')
const data = require('./getdata')
const express = require('express')
const moment = require('moment')
module.exports = {
    showIndex(req,res){
        data.getHeroData((err,data)=>{
            if(err) return res.json({
                code:201,
                msg:'获取失败'
            })
            //console.log(data)
            res.render('index',{data:data})
        })
    },
    showAdd(req,res){
        res.render('add',{})
    },
    showEdit(req,res){
        res.render('edit',{})
    },
    showInfo(req,res){
        res.render('info',{})
    },
    getHeroData(req,res){
        // fs.readFile('__')
        data.getHeroData((err,data)=>{
            if(err) return res.json({
                code:201,
                msg:'获取失败'
            })
            res.json({
                code:200,
                msg:'获取成功',
                data:data
            })
        })
    },
    deleteHero(req,res){
        let {id} = req.query;
        console.log(req.query)
        data.getOneHero(id,(err,result)=>{
            if(err) return res.json({
                code:201,
                msg:'删除失败'
            })
            res.json({
                code:200,
                msg:'删除成功',
                data:result
            })
        })
    },
    addHeroInfo(req,res){
        let date = req.body;
        date.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
        data.addHeroInfo(date,result=>{
            if(result) return res.json({
                code:200,
                msg:'新增成功'
            })
            return res.json({
                code:201,
                msg:'添加失败'
            })
        })
    },
    getOneHeroInfo(req,res){
        let id = req.query.id;
        //console.log(id)
        data.getOneHeroInfo(id,(err,result)=>{
            if(err) return res.json({
                code:201,
                msg:'获取失败'
            })
            return res.json({
                code:200,
                msg:'获取成功',
                data:result
            })
        })
    },
    updateHero(req,res){
        let hero = req.body;
        //console.log(hero)
        hero.ctime = moment().format('YYYY-MM-DD HH:mm:ss');
        data.updateHero(hero,result=>{
            if(result) return res.json({
                code:200,
                msg:'修改成功'
            })
            res.json({
                code:201,
                msg:'修改失败'
            })
        })
    }
}