const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuario) => {
            if(err){
                next(err);
            }
            
            console.log(usuario)
            res.render('Rindex', {
                data: usuario
            });
            
            });
        
        });
};


controller.index = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuario) => {
            if(err){
                next(err);
            }
            
            console.log(usuario)
            res.render('Rindex', {
                data: usuario
            });
            
            });
        
        });
};

controller.regis = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuario', (err, usuario) => {
            if(err){
                next(err);
            }
            
            console.log(usuario)
            res.render('index', {
                data: usuario
            });
            
            });
        
        });
};

controller.save = (req, res) =>{
req.getConnection((err,conn)=> {
    const data = req.body;
    conn.query('INSERT INTO usuario set ?', [data], (err,usuario) => {
        
        res.redirect('Registro');

    });
});
};

controller.edit = (req, res) =>{
    const { id } = req.params;
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario WHERE id= ?', [id], (err, usuario) =>{
            res.render('usuarioedit', {
                data: usuario[0]
            });

        });
    });
};
            
controller.update = (req, res) =>{
    const {id} = req.params;
    const newUser = req.body;
    console.log(newUser);
    req.getConnection((err,conn)=>{
        conn.query('UPDATE usuario set ?  WHERE id= ?', [newUser,id], (err, usuario) =>{
            res.redirect('/');
            
    });
    });
};


controller.delete = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM usuario WHERE id=?', [id], (err, row) =>{
            res.redirect('/');
        })
    })
};

module.exports = controller;
