-- Revert o-book:insert-user-function from pg

BEGIN;

DROP FUNCTION "insert_user";

COMMIT;
