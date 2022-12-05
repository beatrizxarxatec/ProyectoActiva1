use proyectoFinal;

select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname 
from reward as r inner join student as s on r.id_user_rewarded = s.id 
where r.id_user_rewarded = 2;

select * from reward;