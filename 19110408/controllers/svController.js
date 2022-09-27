const mygroup = require("../models/svModules")
const arrayGourp = mygroup.mygroup
const loadSv = (req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(arrayGourp))
}
const loadSvId = (req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','application/json')
    const SvId = arrayGourp.find(item=>item.id==req.params.id)
    if(SvId){
        res.end(JSON.stringify(SvId))
    }else{
        res.write('<html><body>Not valid</body></html>');
        res.end()
    }
    console.log(req.method,req.url,req.body)
}
const addSv = (req,res)=>{
    console.log(req.method,req.url,req.body)
    const Sv = new mygroup.contrustor(req.body.id,req.body.name)
    const checkSv = arrayGourp.find(item=>item.id==Sv.id)

    if(Sv.id == 19110408 || Sv.id == 19110376 || Sv.id == 19110464){    
        if(checkSv){
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }else{
            mygroup.mygroup.push(Sv)
            res.redirect('/');
        }       
    }else{
        res.write('<html><body>Not valid</body></html>');
            res.end()
    }
}
const aboutSv = (req,res)=>{
    const id = req.params.id
    console.log(id)
    if(id){
        const getAboutSv = arrayGourp.filter(item=>item.id==id)
        console.log(getAboutSv)
        if(getAboutSv){
            res.render('about', {
                groups: getAboutSv
            })
        }else{
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }
    }else{
        const getAboutSv = arrayGourp
        if(getAboutSv.length!==0){  
            res.render('about', {
                groups: getAboutSv
            })
        }else{
            res.write('<html><body>Not valid</body></html>');
            res.end()
        }
    }
   
   
}

module.exports = {
    addSv,
    loadSv,
    aboutSv,
    loadSvId
}