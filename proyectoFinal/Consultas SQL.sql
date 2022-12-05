-- insert into student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code)
-- values ('Juan', 'Galdos', 'Sueco', 'juan@gmail.com', 'juan@xarxatec.com','654566389', '12005')
-- values ('Raul', 'Suarez', 'Torres', 'raul@gmail.com', 'raul@xarxatec.com','624657847', '12003')
-- values ('Maria', 'Rodríguez', 'García', 'maria@gmail.com', 'maria@xarxatec.com','613458976', '12001')
-- values ('Esteban', 'Delgado', 'Santana', 'esteban@gmail.com', 'esteban@xarxatec.com','675849354', '12004')

-- SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code 
-- FROM student as s
-- WHERE s.second_surname is not null and s.email_personal like '%@gmail.com'

use proyectoFinal;

insert into user (email, password, role)
values ('juan@host.com', 'mypass', 'user')

insert into student (name, first_surname, email_personal, phone_number, description, city, zip_code)
values('pepe', 'martinez', 'pepe@host.com', '68346873', 'user', 'castellon', '12001')


select * from reward;

select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = 1;

-- delete from student where id = 6

