#Cria o adatabase do projeto de filmes
create database db_filmes_20261_a;

#Ativa o uso do database de filmes
use db_filmes_20261_a;

#Cria a tabela de filme
create table tbl_filme (
	id int not null primary key auto_increment,
    nome varchar(80) not null,
    data_lancamento date not null,
    duracao time not null,
    sinopse text not null,
    avaliacao decimal(3,2) default null,
    valor decimal(5,2) not null default 0,
    capa varchar(255) 
    
)
;

create table tbl_genero (
	id int not null primary key auto_increment,
    nome varchar(80) not null,
    descricao text default null
    
);
select * from tbl_genero;

create table tbl_classificacao (
	id int not null primary key auto_increment,
	sigla varchar(4) not null,
	nome varchar(40) not null,
	descricao text default null
);
select * from tbl_classificacao;

#Inserir dados
insert into tbl_filme (
						nome, 
						data_lancamento, 
						duracao, 
						sinopse, 
						avaliacao, 
						valor, 
						capa)
					values (
							'Super Mario Galaxy: O Filme',
							'2026-04-02',
							'01:39:00',
							'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão.
							Em Super Mario Galaxy: O Filme, o bigodudo encanador italiano e seus aliados
							embarcam numa aventura galáctica repleta de ação e momentos emocionantes
							depois de salvar o Reino dos Cogumelos.',
							'3',
							'50.70',
							'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg'
);

select * from tbl_filme;
select * from tbl_filme order by id desc;
delete from tbl_filme where id > 0;

update tbl_filme set
	nome = 'filme 01',
    data_lancamento = '2000-01-01',
    duracao = '02:00',
    sinopse = 'Testando o update no banco de dados',
    avaliacao = '6.7',
    valor = '7.6',
    capa = 'farmar aura'
    where id = 9;

