BEGIN;

INSERT INTO "tag" ("label") VALUES
('Romans'),
('Science-Fiction & Fantasy'),
('Polar & Thriller'),
('BD & Manga'),
('Littérature classique'),
('Enfants & Jeunesse'),
('Savoir'),
('Loisirs'),
('Autre')
;

INSERT INTO "user" ("username", "password", "email") VALUES
('Totodu75', '$2b$10$sdm9dxE/dDAV..RtpsMTnOX5fSuINvHeXfgG4LGXt/1ZJc.oNfj02', 'toto@gmail.com')
;

COMMIT;