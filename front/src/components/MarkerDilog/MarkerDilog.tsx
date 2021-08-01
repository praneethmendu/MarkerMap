import React from "react";
import "./MarkerDilog.css";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Place } from "../../model/place";
import { useFormik } from "formik";
import { PlaceApi } from "../../api/api";

interface Props {
  place: Place;
  setShowDilog: React.Dispatch<React.SetStateAction<boolean>>;
  refreshPlaces: () => void;
}

const MarkerDilog: React.FC<Props> = (props) => {
  let placeApi = new PlaceApi();
  let { place, setShowDilog, refreshPlaces } = props;

  const formik = useFormik({
    initialValues: place,
    onSubmit: (values) => {
      placeApi.updatePlace(values).then(() => {
        refreshPlaces();
        setShowDilog(false);
      });
    },
  });

  const buttonDisabled = () =>
    (place.name === formik.values.name &&
      place.image === formik.values.image) ||
    !formik.values.name;

  return place ? (
    <Dialog
      aria-labelledby="simple-dialog-title"
      open={true}
      onClose={() => setShowDilog(false)}>
      <div className="dialog-container">
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <TextField
            id="image"
            name="image"
            label="image URL"
            value={formik.values.image}
            onChange={formik.handleChange}
          />
          <Button
            color="primary"
            variant="contained"
            className="padded-button"
            type="submit"
            disabled={buttonDisabled()}>
            Submit
          </Button>
        </form>
      </div>
    </Dialog>
  ) : (
    <></>
  );
};

export default MarkerDilog;
