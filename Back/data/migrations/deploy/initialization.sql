-- Deploy o-book:initialization to pg

BEGIN;

CREATE DOMAIN mail AS TEXT
    CHECK(
        VALUE ~ '[a-zA-Z0-9-_]{1,}@[a-zA-Z0-9-_]{1,}.[a-zA-Z]{1,}'
    )
;

CREATE DOMAIN french_zipcode AS TEXT
    CHECK(
        VALUE ~ '^0[1-9]\d{3}$' -- code postaux metropole de 01 a 09
        OR VALUE ~ '^20[1-2]\d{2}$|^20300$' -- code postaux de la Corse
        OR VALUE ~ '^[13-8]\d{4}$' -- code postaux les plus génériques
        OR VALUE ~ '^9[0-6]\d{3}$' -- code postaux metropole commencant par 9
        OR VALUE ~ '^97[1-6]\d{2}$' -- code postaux DOM
        OR VALUE ~ '^98[4678]\d{2}$' -- code postaux TOM
        OR VALUE ~ '^9{5}$' -- code postal de la poste'
    )
;

CREATE TABLE "tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "username" TEXT NOT NULL UNIQUE,
    "email" mail NOT NULL,
    "zipcode" french_zipcode NOT NULL,
    "localisation" TEXT NOT NULL,
    "biographie" TEXT NOT NULL,
    "profile_picture" TEXT DEFAULT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "book" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "google_api_id" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "library" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "library_has_book" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "library_id" INT NOT NULL REFERENCES "library"("id"),
    "book_id" INT NOT NULL REFERENCES "book"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "loan" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "status" TEXT NOT NULL,
    "loan_date" TIMESTAMPTZ DEFAULT NULL, 
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "library_has_book_id" INT NOT NULL REFERENCES "library_has_book"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

CREATE TABLE "user_has_tag" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "user_id" INT NOT NULL REFERENCES "user"("id"),
    "tag_id" INT NOT NULL REFERENCES "tag"("id"),
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ DEFAULT NULL
);

ALTER TABLE "user" 
    ADD COLUMN "library_id" INT NOT NULL REFERENCES "library"("id");

COMMIT;
