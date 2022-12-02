use proyecto_final;

insert into student (name, first_surname, email_personal, email_activa, phone_number,  description, city, zip_code)
values ('pepe1', 'lope1z', 'pepe1@host.com', 'pepe@xarxatec.com','613645976', 'Programmer','Castellon', '12007');

SELECT * FROM student;

delete from student where id = 10