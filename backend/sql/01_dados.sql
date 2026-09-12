-- Adminer 5.4.1 PostgreSQL 17.6 dump

CREATE DATABASE "login-auth-jwt";
\connect "login-auth-jwt";

DROP TABLE IF EXISTS "categorias";
DROP SEQUENCE IF EXISTS categorias_id_seq;
CREATE SEQUENCE categorias_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."categorias" (
    "id" bigint DEFAULT nextval('categorias_id_seq') NOT NULL,
    "nome" character varying(100) NOT NULL,
    "tipo" character varying(100) NOT NULL,
    "ativo" boolean DEFAULT true NOT NULL,
    "criado_em" timestamptz DEFAULT now() NOT NULL,
    "atualizado_em" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);

CREATE UNIQUE INDEX categorias_nome_key ON public.categorias USING btree (nome);

CREATE INDEX idx_categorias_nome_lower ON public.categorias USING btree (lower((nome)::text));

CREATE INDEX idx_categorias_tipo_lower ON public.categorias USING btree (lower((tipo)::text));

INSERT INTO "categorias" ("id", "nome", "tipo", "ativo", "criado_em", "atualizado_em") VALUES
(1,	'ENERGIA',	'DESPESA',	'1',	'2026-09-12 00:48:22.636125+00',	'2026-09-12 00:48:22.636125+00'),
(2,	'INTERNET',	'DESPESA',	'1',	'2026-09-12 00:48:48.693104+00',	'2026-09-12 00:48:48.693104+00'),
(3,	'IPTU',	'DESPESA',	'1',	'2026-09-12 00:48:59.374053+00',	'2026-09-12 00:48:59.374053+00');

DROP TABLE IF EXISTS "usuarios";
DROP SEQUENCE IF EXISTS usuarios_id_seq;
CREATE SEQUENCE usuarios_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1;

CREATE TABLE "public"."usuarios" (
    "id" bigint DEFAULT nextval('usuarios_id_seq') NOT NULL,
    "nome" character varying(150) NOT NULL,
    "login" character varying(80) NOT NULL,
    "email" character varying(180) NOT NULL,
    "senha_hash" character varying(255) NOT NULL,
    "ativo" boolean DEFAULT true NOT NULL,
    "criado_em" timestamptz DEFAULT now() NOT NULL,
    "atualizado_em" timestamptz DEFAULT now() NOT NULL,
    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
)
WITH (oids = false);

CREATE UNIQUE INDEX usuarios_login_key ON public.usuarios USING btree (login);

CREATE UNIQUE INDEX usuarios_email_key ON public.usuarios USING btree (email);

CREATE INDEX idx_usuarios_login_lower ON public.usuarios USING btree (lower((login)::text));

CREATE INDEX idx_usuarios_email_lower ON public.usuarios USING btree (lower((email)::text));

INSERT INTO "usuarios" ("id", "nome", "login", "email", "senha_hash", "ativo", "criado_em", "atualizado_em") VALUES
(1,	'JONAS BAPTISTA FRANCO',	'jonas',	'jonasbfranco@gmail.com',	'$2b$12$02pl6Pp5LPdULy6faAI32OxEkU/9kbK5Cc7Ksuib3Zno9v4m9ZcNm',	'1',	'2026-09-12 00:30:21.180646+00',	'2026-09-12 00:31:01.417018+00');

-- 2026-09-12 02:02:56 UTC