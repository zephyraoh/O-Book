-- Deploy o-book:insert-user-function to pg

BEGIN;

CREATE FUNCTION insert_user(user_data json) RETURNS "user" AS $$
    INSERT INTO "user"
    ("firstname", "lastname", "username", "password", "email", "zipcode", "localisation", "biographie", "profile_picture")
    VALUES (
        user_data->>'firstname',
        user_data->>'lastname',
        user_data->>'username',
        user_data->>'password',
        user_data->>'email',
        user_data->>'zipcode',
        user_data->>'localisation',
        user_data->>'biographie',
        COALESCE(user_data->>'profile_picture', null)
    )
    RETURNING *
$$ LANGUAGE sql STRICT;

COMMIT;
