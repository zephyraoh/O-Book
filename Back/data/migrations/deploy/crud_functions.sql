-- Deploy o-book:crud_functions to pg

BEGIN;

CREATE FUNCTION insert_user(user_data json) RETURNS "user" AS $$
    INSERT INTO "user"
    ("firstname", "lastname", "username", "password", "email", "zipcode", "localisation", "biography", "profile_picture")
    VALUES (
        user_data->>'firstname',
        user_data->>'lastname',
        user_data->>'username',
        user_data->>'password',
        user_data->>'email',
        user_data->>'zipcode',
        user_data->>'localisation',
        user_data->>'tel',
        user_data->>'biography',
        user_data->>'profile_picture'
    )
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_user(user_data json) RETURNS "user" AS $$
    UPDATE "user" SET
        "firstname" = COALESCE(user_data->>'firstname', firstname),
        "lastname" = COALESCE(user_data->>'lastname', lastname),
        "username" = COALESCE(user_data->>'username', username),
        "password" = COALESCE(user_data->>'password', password),
        "email" = COALESCE(user_data->>'email', email),
        "zipcode" = COALESCE(user_data->>'zipcode', zipcode),
        "localisation" = COALESCE(user_data->>'localisation', localisation),
        "tel" = COALESCE((user_data->>'tel')::int, tel),
        "biography" = COALESCE(user_data->>'biography', biography),
        "profile_picture" = COALESCE(user_data->>'profile_picture', profile_picture),
        "updated_at"=now()
    WHERE "id" = (user_data->>'id')::int
    RETURNING 
        "firstname",
        "lastname",
        "username",
        "email",
        "zipcode",
        "localisation",
        "tel",
        "biography",
        "profile_picture"
$$ LANGUAGE sql STRICT;

CREATE FUNCTION add_tag_to_user(tagId int, userId int) RETURNS "user_has_tag" AS
$$
    INSERT INTO "user_has_tag" ("tag_id", "user_id") VALUES
    (tagId::int, userId::int)
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION insert_book(googleApiId text) RETURNS "book" AS
$$
    INSERT INTO "book" ("google_api_id") VALUES
    (googleApiId)
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION add_book_to_library(userId int, bookId int) RETURNS "library" AS
$$ 
    INSERT INTO "library" ("user_id", "book_id") VALUES
    (userId::int, bookId::int)
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_library(isAvailable boolean, libraryId int) RETURNS "library" AS
$$ 
    UPDATE "library" SET
    "is_available"=isAvailable::boolean,
    "updated_at"=now()
    WHERE "id"=libraryId::int
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION create_loan(userId int, libraryId int) RETURNS "loan" AS
$$
    INSERT INTO "loan" ("user_id", "library_id") VALUES
    (userId::int, libraryId::int)
    RETURNING *
$$ LANGUAGE sql STRICT;

CREATE FUNCTION update_loan(loan_data json) RETURNS "loan" AS
$$ 
    UPDATE "loan" SET
        "status"=COALESCE(loan_data->>status, null),
        "date"=COALESCE((loan_data->>date)::timestamptz, null),
        "updated_at"=now()
    RETURNING *
$$ LANGUAGE sql STRICT;


COMMIT;
