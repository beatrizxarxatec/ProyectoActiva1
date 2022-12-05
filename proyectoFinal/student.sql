use proyectoFinal;

-- insert into student (name,first_surname, email_personal, email_activa, phone_number, description, city, zip_code)
-- values('Juan', 'Martinez', 'juan@host.com','juan@xarxatecactiva.com', '683468731', 'user', 'castellon', '12002');

-- insert into student (name, first_surname, email_personal, email_activa, phone_number, description, city, zip_code)
-- values('Toni', 'De Vega', 'toni@host.com', 'toni@xarxatecactiva.com','666555444', 'user', 'castellon', '12003');

-- insert into student (name, first_surname, email_personal, email_activa, phone_number, description, city, zip_code)
-- values('Lydia', 'De Vega', 'lydia@host.com','lydia@xarxatecactiva.com' '666555443', 'user', 'castellon', '12003');

-- insert into student (name, first_surname, email_personal, email_activa, phone_number, description, city, zip_code)
-- values('Carla', 'Diaz', 'carla@host.com', 'carla@xarxatecactiva.com' '666333222', 'user', 'castellon', '12001');

select * from student;



-- ---------------------------------------


use proyectoFinal;

-- insert into student (name, first_surname, email_personal, email_activa, phone_number,  description, city, zip_code)
-- values ('pepe', 'lopez', 'pepe@host.com', 'pepe@xarxatec.com','613645976', 'Programmer','Castellon', '12007');

-- insert into student (name, first_surname, email_personal, email_activa, phone_number,  description, city, zip_code)
-- values ('lola', 'lopez', 'lola@host.com', 'lola@xarxatec.com','613637976', 'Programmer','Castellon', '12005');

select * FROM student;

select r.id_user_rewarded, sum(r.xp_points) as all_xp_points, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id group by r.id_user_rewarded order by all_xp_points DESC limit 5
-- order by date DESC