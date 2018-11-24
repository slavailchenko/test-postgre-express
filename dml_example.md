1. Get all clients

SELECT clients.*, rateclients.status, registrationclients.status
FROM clients, rateclients, registrationclients
WHERE clients.id_rate = rateclients.id AND clients.id_registration = registrationclients.id
ORDER BY clients.date_regastration

2. Get client by id

SELECT clients.*, rateclients.status, registrationclients.status
FROM clients, rateclients, registrationclients
WHERE clients.id_rate = rateclients.id AND clients.id_registration = registrationclients.id
AND clients.id = 1
ORDER BY clients.date_regastration

3. Create client 

INSERT INTO clients (first_name, last_name, email, phone, adress, id_rate, id_registration, date_regastration)
    VALUES ('Slava', 'Ilchenko', 'slavailchenko35@gmail.com', '0677068573', 'Alekseevka', 2, 1, '2016-11-13');

4. Update client

UPDATE clients SET first_name = 'Vyacheslav'
     WHERE clients.first_name = 'Slava'

5. Delete client

DELETE FROM clients USING rateclients
  WHERE id_rate = rateclients.id AND adress = 'Alekseevka'

