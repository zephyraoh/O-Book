-- Revert o-book:library_details_view from pg

BEGIN;

DROP VIEW "personnal_library_details";
DROP VIEW "user_library_details";
DROP VIEW "book_in_library";
DROP VIEW "profile_informations";
DROP VIEW "contact_informations";

COMMIT;
