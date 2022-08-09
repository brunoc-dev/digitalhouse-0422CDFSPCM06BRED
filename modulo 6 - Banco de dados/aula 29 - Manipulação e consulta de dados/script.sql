CREATE DATABASE escola;

USE escola;

CREATE TABLE areas_estudos (
	id_area INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(65) NOT NULL
);

CREATE TABLE professores (
	id_professor INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    sobrenome VARCHAR(60) NOT NULL
);

CREATE TABLE alunos (
	id_aluno INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(65) NOT NULL,
    matricula VARCHAR(10) NOT NULL
);

CREATE TABLE cursos (
	id_curso INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(65) NOT NULL,
    id_area INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_area) REFERENCES areas_estudos(id_area)
);

CREATE TABLE turmas (
	id_turma INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    semestre INT(2) UNSIGNED NOT NULL,
    ano_inicio INT(4) UNSIGNED NOT NULL,
    id_curso INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_curso) REFERENCES cursos(id_curso),
    id_professor INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_professor) REFERENCES professores(id_professor)
);

CREATE TABLE alunos_turmas (
	id_alunos_turmas INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno),
    id_turma INT UNSIGNED NOT NULL,
    FOREIGN KEY (id_turma) REFERENCES turmas(id_turma)
);

-- Criando uma nova coluna:
ALTER TABLE alunos_turmas ADD COLUMN faltas INT UNSIGNED NOT NULL;
-- Alterando a coluna criada acima:
ALTER TABLE alunos_turmas MODIFY COLUMN faltas INT UNSIGNED DEFAULT 0;
-- Criando uma segunda coluna:
ALTER TABLE alunos_turmas ADD COLUMN faltas_2 INT UNSIGNED DEFAULT 0;
-- Removendo uma coluna:
ALTER TABLE alunos_turmas DROP COLUMN faltas_2;

-- Inserindo dados em tabelas:
INSERT INTO areas_estudos (nome) VALUES ('Programação');
INSERT INTO areas_estudos (nome) VALUES ('Marketing');
INSERT INTO areas_estudos (nome) VALUES ('Administração');
INSERT INTO areas_estudos (nome) VALUES ('Vendas');

INSERT INTO professores (nome, sobrenome) VALUES ('Carlos', 'Ruiz');
INSERT INTO professores (nome, sobrenome) VALUES ('Lucas', 'Alves');
INSERT INTO professores (nome, sobrenome) VALUES ('Ligia', 'Pretel');
INSERT INTO professores (nome, sobrenome) VALUES ('Bruno', 'Razera');

INSERT INTO alunos (nome, matricula) VALUES ('Beatriz Campesi', '2022060001');
INSERT INTO alunos (nome, matricula) VALUES ('Rodrigo Mendes', '2022060002');
INSERT INTO alunos (nome, matricula) VALUES ('Thiago Bohonos', '2022060003');
INSERT INTO alunos (nome, matricula) VALUES ('Gabriel Rodrigues', '2022060004');
INSERT INTO alunos (nome, matricula) VALUES ('Rafael Vieira', '2022060005');

INSERT INTO cursos (nome, id_area) VALUES ('Full Stack Nodejs', 1);
INSERT INTO cursos (nome, id_area) VALUES ('Midias Sociais', 2);
INSERT INTO cursos (nome, id_area) VALUES ('Gestão de pessoas', 3);

-- Inserindo várias linhas na mesma query:
INSERT INTO turmas (nome, semestre, id_curso, ano_inicio, id_professor)
VALUES
	('1º sem. A', 1, 1, 2022, 6),
    ('1º sem. B', 1, 2, 2022, 5),
    ('2º sem. C', 2, 3, 2021, 4);

INSERT INTO alunos_turmas (id_aluno, id_turma, faltas)
VALUES
	(1, 1, NULL),
    (2, 1, 2),
    (3, 1, 7),
    (4, 2, 0),
    (5, 2, 2),
    (5, 1, NULL),
    (2, 3, 1);
    
UPDATE alunos_turmas SET faltas = 0 WHERE id_alunos_turmas IN (8, 9);
DELETE FROM alunos_turmas WHERE id_alunos_turmas = 8;

SELECT * FROM turmas;
SELECT * FROM turmas WHERE semestre = 1;