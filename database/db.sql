

create DATABASE crudnodejsmysql;
use crudnodejsmysql;


CREATE TABLE usuario(
    id INT(5) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre varchar (50) NOT NULL,
    edad INT(2) NOT NULL, 
    cargo varchar (50) NOT NULL,
    peso INT(3) NOT NULL, 
    altura INT(3) NOT NULL
);


SHOW TABLES;

describe usuario;

