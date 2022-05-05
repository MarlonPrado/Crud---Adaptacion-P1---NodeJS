const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, rows) => {
            if(err){
                next(err);
            }
            
            console.log(rows)
            res.render('index');
            
            });
        
        });
};

controller.save = (req, res) =>{
console.log(req.body);
res.send('Registro finalizado')
};


module.exports = controller;
