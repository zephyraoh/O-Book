-- Revert o-book:initialization from pg

BEGIN;

DROP TABLE "tag", "user", "book", "library", "library_has_book", "loan", "user_has_tag";

DROP DOMAIN "mail", "french_zipcode";

COMMIT;
