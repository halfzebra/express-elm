module Name exposing (..)

import Html exposing (text)
import Json.Decode exposing (string)


decoder =
  string


view model =
  text model
