use proyecto_final;

-- insert into user (email, password, role)
-- values ('juan@host.com', 'mypass', 'user')

-- insert into student (name, first_surname, email_personal, phone_number, description, city, zip_code)
-- values('pepe', 'martinez', 'pepe@host.com', '68346873', 'user', 'castellon', '12001')


-- select * from reward;

-- select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = 1;

-- delete from student where id = 6

-- select *from user;

-- SELECT s.id, s.email_personal FROM user u inner join student s on s.email_personal = u.email where email = ? AND password = ?

-- select * from reward
-- (select *, ROW_NUMBER() OVER (ORDER BY (SELECT 1)) as position from 
-- (select r.id_user_rewarded, sum(r.xp_points) as all_xp_points, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id group by r.id_user_rewarded order by all_xp_points DESC) as SN1) as SN2
-- where SN2.id_user_rewarded = 2

select SN1.xp_points, SN1.description, SN1.date, SN1.rewarded_name, SN1.rewarded_first_surname, S2.first_surname as sender_first_surname, S2.name as sender_name from 
(select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name as rewarded_name, s.first_surname as rewarded_first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id) as SN1 
inner join student S2 on SN1.id_user_sender = S2.id ORDER by SN1.date desc limit 10;



