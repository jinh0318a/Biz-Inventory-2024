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


create view view_inventory
as
(
select s_name, g_name, g_price ,i_count 
from tbl_store as s join tbl_inventory as i on s.s_code = i.i_storecode 
join tbl_goods as g on g_code = i.i_goodscode
);

select * from view_inventory;