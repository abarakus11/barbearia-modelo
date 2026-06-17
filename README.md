# Barbearia Studio

Sistema web em PHP para gestão de barbearia/salão: site institucional, agendamentos online e painel administrativo.

## Requisitos

- PHP 7.4+ (recomendado 8.x)
- MySQL / MariaDB
- Apache (XAMPP, Laragon ou similar)

## Instalação

1. Coloque a pasta do projeto em `htdocs` (ex.: `C:\xampp\htdocs\barbearia`).
2. Crie o banco de dados `barbearia` no MySQL.
3. Importe o arquivo `barbearia.sql`.
4. Ajuste as credenciais em `sistema/conexao.php` se necessário.
5. Acesse o site em `http://localhost/barbearia/`.

## Painel administrativo

- URL: `http://localhost/barbearia/sistema/`
- E-mail ou CPF: `admin@admin` ou `000.000.000-00`
- Senha padrão: `123`

## Estrutura

- `/` — site público (serviços, produtos, agendamentos)
- `/sistema` — painel administrativo
- `/ajax` — endpoints de agendamento e cadastro
- `barbearia.sql` — estrutura e dados iniciais do banco
