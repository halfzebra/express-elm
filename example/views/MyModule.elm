module MyModule exposing (..)

import Json.Decode
import Html exposing (Html)


--type alias Model =
--    { age : Int
--    , name : String
--    }

--
--decoder : Json.Decode.Decoder Model
--decoder =
--    Json.Decode.map2 Model
--        (Json.Decode.field "age" Json.Decode.int)
--        (Json.Decode.field "name" Json.Decode.string)


--view : Model -> Html msg
--view model =
--    Html.div
--        []
--        [ Html.text <| "I am " ++ model.name
--        , Html.text <| "And I am " ++ toString model.age ++ " years old."
--        ]

-- view : Html msg
view =
    Html.div
        []
        [ Html.text "123"
        , Html.text " years old."
        ]