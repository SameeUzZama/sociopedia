import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCardGroup,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getToursByUser } from "../redux/features/tourSlice";

const Dashboard = () => {
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));

  const userId = user?.result?._id;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      dispatch(getToursByUser(userId));
    }
  }, [userId]);

  return (
    <div
      style={{
        margin: "auto",
        padding: "120px",
        maxWidth: "900px",
        alignContent: "center",
      }}
    >
      <h4 className="text-center">Dashboard :{user?.result?.name}</h4>
      <hr style={{ maxWidth: "570px" }} />
      {userTours.map((item) => {
        <MDBCardGroup>
          <MDBCard
            style={{ maxWidth: "600px" }}
            key={item._id}
            className="mt-2"
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  className="rounded"
                  src={item.imageFile}
                  alt={item.title}
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                  
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCardGroup>;
      })}
    </div>
  );
};

export default Dashboard;
