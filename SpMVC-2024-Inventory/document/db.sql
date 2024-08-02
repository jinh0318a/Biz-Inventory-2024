use inventorydb;

create table tbl_user(
u_id	varchar(20)		PRIMARY KEY,
u_password	varchar(20)	NOT NULL	,
u_email	varchar(20)	NOT NULL	,
u_nick	varchar(20)	NOT NULL	
);

create table tbl_goods(
g_code	varchar(6)		PRIMARY KEY,
g_name	varchar(20)	NOT NULL	,
g_price	int	NOT NULL	
);

create table tbl_store(
s_code	varchar(6)		PRIMARY KEY,
s_name	varchar(40)	NOT NULL	,
s_addr	varchar(100)	NOT NULL	

);

create table tbl_manager(
m_id	varchar(20)		PRIMARY KEY		,	
m_password	varchar(20)	NOT NULL	,			
m_storecode	varchar(6)	NOT NULL,
m_email varchar(20) NOT NULL,
foreign key (m_storecode) references tbl_store(s_code)

);


create table tbl_inventory(
i_goodscode	varchar(6)	,		
i_storecode	varchar(6)		,	
i_count	int	NOT NULL		,		

foreign key (i_goodscode) references	tbl_goods	(g_code),
foreign key (i_storecode) references	tbl_store	(s_code)
);

drop table tbl_inventory;
drop table tbl_manager;
select * from tbl_goods;

select * from tbl_user;
select * from tbl_manager;
select * from tbl_store;
select * from tbl_goods;
select * from tbl_inventory;

delete from tbl_user where u_id='';


create view view_goods
as
(
select g_code, s_code as g_storecode, g_name, g_price ,i_count as g_count 
from tbl_store as s join tbl_inventory as i on s.s_code = i.i_storecode 
join tbl_goods as g on g_code = i.i_goodscode
);
drop view view_goods;
select * from view_goods where g_code='G01179';

select * from view_goods where g_storecode='S00005';

select * from tbl_inventory where i_storecode='S00005';

insert into tbl_inventory(i_goodscode, i_storecode, i_count) values ('G00001','S00005',2);
