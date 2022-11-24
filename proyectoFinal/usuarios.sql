use proyectoFinal;

insert into user (email, password, role)
values ('juan@host.com', 'mypass', 'user');

insert into user (email, password, role)
values ('lydia@host.com', 'mypass', 'user');

insert into user (email, password, role)
values ('toni@host.com', 'mypass', 'user');






-- insert into student (name, first_surname, email_personal, phone_number, description, city, zip_code)
-- values('pepe', 'martinez', 'pepe@host.com', '68346873', 'user', 'castellon', '12001');

-- select * from reward;

-- select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = 1;

-- delete from student where id = 6