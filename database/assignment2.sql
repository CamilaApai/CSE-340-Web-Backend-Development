-- Insert a Tony Stark record to the account table.
INSERT INTO account (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony','Stark','tony@starkent.com','Iam1ronM@n');

-- Modify the Tony Stark record to change the account_type to "Admin".
UPDATE account
SET account_type = 'Admin'
WHERE account_id = 1;

-- Delete the Tony Stark record from the database.
DELETE FROM account 
WHERE account_firstname = 'Tony'
AND account_id = 1;

-- Modify the "GM Hummer" record to read "a huge interior" rather than "small interiors" using a single query.
UPDATE inventory
SET inv_description = replace(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- Use an inner join to select the invModel field from the inventory table and the classificationName field from the carclassification table for inventory items that belong to the "SUV" category.
SELECT inventory.inv_model, inventory.inv_make, classification.classification_name
FROM inventory
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE classification.classification_name = 'Sport';

-- Update all records in the Inventory table to add "/vehicles" to the middle of the file path in the inv_image and inv_thumbnail columns using a single query.
UPDATE inventory
SET inv_image = REPLACE(inv_image, '/images/', 'images/vehicles/' ), 
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', 'images/vehicles/');

