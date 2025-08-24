---
title: Authorisatie
date: 2022-04-02
---

# {{ course_title }}

## {{ title }}


Tijdens het ontwikkelen van een database wil je als developer graag toegang hebben tot alle mogelijkheden, functionaliteiten en data van je database-server. Je gebruikt hiervoor een account dat alle rechten heeft om aanpassingen te doen aan de database server.

#### Configureer een super-user
In MariaDB gaat dat als volgt:
* Open PHPMyAdmin en log in met een bestaande gebruiker die de rechten heeft om gebruikers te beheren (bijvoorbeeld de rootgebruiker). 
* Ga naar [PHPMyAdmin documentatie -> User management](https://docs.phpmyadmin.net/nl/latest/privileges.html)

In Postgres gaat dat zo:
* Open Adminer en log in als superuser
* Voeg een sql-commando in:

```sql
CREATE ROLE student WITH LOGIN PASSWORD 'student' SUPERUSER;
```

Je hebt nu een superuser aangemaakt waarmee je alle rechten hebt om databases aan te maken en te bewerken.

#### Configureer een gebruiker die alleen gegevens kan weergeven
In MariaDB:
* Dat kan via het user-panel in PHPMyAdmin of via sql-commando's
* `CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'password'`
* `GRANT SELECT ON '*.my_database' TO 'my_user@localhost'`

In Postgres:
* Via sql venster in Adminer
* `CREATE USER my_user WITH PASSWORD 'secret';`
* `GRANT CONNECT ON DATABASE school TO my_user;`
* `GRANT USAGE ON SCHEMA public TO my_user;`
* `GRANT SELECT ON ALL TABLES IN SCHEMA public TO my_user;`


## Cheatsheet Postgresql


<table style="border-collapse:collapse; border:1px black solid;">
<thead>
<tr>
<th>Option</th>
<th>Example</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid black; padding:4px">[-d] <database></td>
<td style="border: 1px solid black; padding:4px">psql -d mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting to database</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-U</td>
<td style="border: 1px solid black; padding:4px">psql -U john mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting as a specific user</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-h -p</td>
<td style="border: 1px solid black; padding:4px">psql -h localhost -p 5432 mydb</td>
<td style="border: 1px solid black; padding:4px">Connecting to a host/port</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-U -h -p -d</td>
<td style="border: 1px solid black; padding:4px">psql -U admin -h 192.168.1.5 -p 2506 -d mydb</td>
<td style="border: 1px solid black; padding:4px">Connect remote PostgreSQL</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-W</td>
<td style="border: 1px solid black; padding:4px">psql -W mydb</td>
<td style="border: 1px solid black; padding:4px">Force password</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-c</td>
<td style="border: 1px solid black; padding:4px">psql -c '\c postgres' -c '\dt'</td>
<td style="border: 1px solid black; padding:4px">Execute a SQL query or command</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-H</td>
<td style="border: 1px solid black; padding:4px">psql -c &quot;\l+&quot; -H postgres &gt; database.html</td>
<td style="border: 1px solid black; padding:4px">Generate HTML report</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-l</td>
<td style="border: 1px solid black; padding:4px">psql -l</td>
<td style="border: 1px solid black; padding:4px">List all databases</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-f</td>
<td style="border: 1px solid black; padding:4px">psql mydb -f file.sql</td>
<td style="border: 1px solid black; padding:4px">Execute commands from a file</td>
</tr>
<tr>
<td style="border: 1px solid black; padding:4px">-V</td>
<td style="border: 1px solid black; padding:4px">psql -V</td>
<td style="border: 1px solid black; padding:4px">Print the psql version</td>
</tr>
</tbody>
</table>

## Vragen en opdrachten

**Basisvragen**  
* Wat is het verschil tussen een gebruiker en een rol? 
* Welke SQL-opdracht gebruik je om een nieuwe gebruiker aan te maken in MariaDB? 
* Welke SQL-opdracht gebruik je om een gebruiker een wachtwoord te geven in PostgreSQL? 

**Praktische vragen**  
* Creëer een gebruiker genaamd `webshop_admin` die alleen vanaf de lokale machine (localhost) verbinding mag maken, met een wachtwoord naar keuze.
* Stel je voor dat de gebruiker `webshop_admin` ook een database mag aanmaken. Welke `GRANT`-opdracht moet je daarvoor gebruiken? 
* Wat is het verschil tussen `GRANT ALL PRIVILEGES` en het geven van specifieke privileges, zoals `CREATE` of `SELECT`? 

**Diepere kennis**   
* Welk risico loop je als je een gebruiker aanmaakt zonder `WITH GRANT OPTION`? 
* Stel, je hebt een gebruiker gemaakt met de naam `api_gebruiker` en je wilt dat deze gebruiker alleen `SELECT`-rechten heeft op de tabel `producten` in de database `webshop`. Welke SQL-opdracht(en) gebruik je hiervoor in PostgreSQL? 
* Een gebruiker klaagt dat hij geen verbinding kan maken. Je weet zeker dat het wachtwoord klopt. Welke twee meest voorkomende oorzaken kunnen dit probleem veroorzaken? Dit is een troubleshooting-vraag die laat zien of ze ook aan 

