import React, { useState } from "react";
import "./MarkerPopup.css";

import { Popup } from "react-leaflet";
import { Place } from "../../model/place";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ImageIcon from "@material-ui/icons/Image";
import { PlaceApi } from "../../api/api";
import MarkerDilog from "../MarkerDilog/MarkerDilog";

interface Props {
  place: Place;
  refreshPlaces: () => void;
}

function MarkerPopup(props: Props): React.ReactNode | any {
  let { refreshPlaces, place } = props;
  const [showDilog, setShowDilog] = useState<boolean>(false);
  const placeApi = new PlaceApi();

  function showImgURL() {
    try {
      new URL(place.image ? place.image : "");
    } catch (_) {
      return false;
    }
    return true;
  }

  return place ? (
    <Popup>
      <div className="popup-name">&nbsp;{place.name}</div>
      <IconButton
        aria-label="image"
        href={place.image ? place.image : ""}
        disabled={!showImgURL()}>
        <ImageIcon />
      </IconButton>
      <IconButton aria-label="edit" onClick={() => setShowDilog(true)}>
        <EditIcon />
      </IconButton>
      <IconButton
        aria-label="delete"
        onClick={() =>
          placeApi.deletePlace(place.UUID).then(() => refreshPlaces())
        }>
        <DeleteIcon />
      </IconButton>
      {showDilog ? (
        <MarkerDilog
          place={place}
          refreshPlaces={refreshPlaces}
          setShowDilog={setShowDilog}
        />
      ) : (
        ""
      )}
    </Popup>
  ) : (
    ""
  );
}

export default MarkerPopup;
