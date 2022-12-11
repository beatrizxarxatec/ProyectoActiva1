use proyecto_final;

-- insert into student (name, first_surname, email_personal, email_activa, phone_number,  description, city, zip_code)
-- values ('pepe', 'lopez', 'pepe@host.com', 'pepe@xarxatec.com','613645976', 'Programmer','Castellon', '12007');

-- insert into student (name, first_surname, email_personal, email_activa, phone_number,  description, city, zip_code)
-- values ('lola', 'lopez', 'lola@host.com', 'lola@xarxatec.com','613637976', 'Programmer','Castellon', '12005');

-- SELECT * FROM student;

-- select r.id_user_rewarded, sum(r.xp_points) as all_xp_points, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id group by r.id_user_rewarded order by all_xp_points DESC limit 5
-- order by date DESC

delete from student where id = 36;
delete from user where id > 0;
delete from reward where id > 0;

-- SELECT * FROM user WHERE email = 'tony@host.com' AND password = 'mypass12'; 

-- UPDATE user SET password="mypass" WHERE id = 1;

select * from user;
select * from student;

ALTER TABLE student MODIFY COLUMN cv longblob;