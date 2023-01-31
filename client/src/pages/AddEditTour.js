import React, { useState, useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTour } from "../redux/features/tourSlice";

const initialState = {
  title: "",
  description: "",
  tags: [],
};

export const AddEditTour = () => {
  const [tour, setTour] = useState(initialState);
  const { error, loading } = useSelector((state) => ({ ...state.tour }));
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, description, tags } = tour;

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && tags) {
      const updatedTour = { ...tour, name: user?.result?.name };
      dispatch(createTour({ updatedTour, navigate, toast }));
      handleCLear();
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setTour({ ...tour, [name]: value });
  };

  const handleAddTag = (tag) => {
    setTour({ ...tour, tags: [...tour.tags, tag] });
  };

  const handleDeleteTag = (deleteTag) => {
    setTour({ ...tour, tags: tour.tags.filter((tag) => tag !== deleteTag) });
  };

  const handleCLear = () => {
    setTour({ title: "", description: "", tags: [] });
  };

  return (
    <div
      style={{
        // margin: "auto",
        pading: "15px",
        maxWidth: "450px",
        alignContent: "center",
        marginTop: "120px",
      }}
      className="container"
    >
      <MDBCard alignment="center">
        <h5 style={{ marginTop: "20px" }}>Add Tour</h5>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
            <div className="col-md-12">
              <input
                placeholder="Title"
                type="text"
                value={title}
                name="title"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide Title"
              />
            </div>
            <div className="col-md-12">
              <textarea
                style={{ height: "100px " }}
                placeholder="Description"
                type="text"
                value={description}
                name="description"
                onChange={onInputChange}
                className="form-control"
                required
                invalid
                validation="Please Provide Description"
              />
            </div>
            <div className="col-md-12">
              <ChipInput
                name="tags"
                variant="outlined"
                placeholder="Enter Tag"
                fullWidth
                value={tags}
                onAdd={(tag) => handleAddTag(tag)}
                onDelete={(tag) => handleDeleteTag(tag)}
              />
            </div>
            <div className="d-flex justify-content-start">
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setTour({ ...tour, imageFile: base64 })}
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{ width: "100%" }}>Submit</MDBBtn>
              <MDBBtn
                style={{ width: "100%" }}
                className="mt-2"
                color="danger"
                onClick={handleCLear}
              >
                Clear
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddEditTour;
