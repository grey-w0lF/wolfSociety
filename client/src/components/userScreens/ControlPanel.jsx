import React, { useState } from "react";
import "./userScreens.css";
import { Grid, Popover, Button } from "@mui/material";
import {
  PersonAdd,
  PersonRemove,
  ManageAccounts,
  AccountBox,
} from "@mui/icons-material";

const ControlPanel = () => {
  const [addModal, setAddModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalHeader, setModalHeader] = useState("");
  const handleClose = () => {
    setAddModal(false);
    setDeleteModal(false);
  };

  return (
    <div style={{ minHeight: "85vh" }}>
      <div className="panel">
        <Grid container justifyContent="space-between">
          <Grid item md={3} xs={12} className="one">
            <ul className="Menu">
              <li
                className="item"
                onClick={() => {
                  setModalHeader("Add User");
                  setAddModal(true);
                }}
              >
                <PersonAdd className="icon" /> Add User
              </li>
              <li
                className="item"
                onClick={() => {
                  setModalHeader("Delete User");
                  setDeleteModal(true);
                }}
              >
                <PersonRemove className="icon" /> Delete User
              </li>
              <li
                className="item"
                onClick={() => {
                  setModalHeader("Update User");
                  setAddModal(true);
                }}
              >
                <ManageAccounts className="icon" /> Update User
              </li>
              <li
                className="item"
                onClick={() => {
                  setModalHeader("User Details");
                  setDeleteModal(true);
                }}
              >
                <AccountBox className="icon" /> User Details
              </li>
            </ul>
          </Grid>
          <Grid item md={9} xs={12} className="two">
            <h1>Admin Panel</h1>

            <Grid container justifyContent="center" alignItems="center"></Grid>
            <Grid item>
              <Popover
                open={addModal}
                onClose={handleClose}
                anchorOrigin={{
                  horizontal: "center",
                }}
              >
                <div className="modal">
                  <h1>{modalHeader}</h1>
                  <Grid container direction="column" justifyContent="center">
                    <Grid item>
                      <p>Name</p>
                      <input type="text" />
                    </Grid>
                    <Grid item>
                      <p>Email</p>
                      <input type="email" />
                    </Grid>
                    <Grid item>
                      <p>Phone No</p>
                      <input type="text" />
                    </Grid>
                    <Grid item>
                      <p>Card id</p>
                      <input type="text" />
                    </Grid>
                    <Grid item>
                      <p>Password</p>
                      <input type="password" />
                    </Grid>
                    <Grid item>
                      <p>Confirm</p>
                      <input type="password" />
                    </Grid>
                    <Grid item>
                      <p>D.O.B</p>
                      <input type="date" />
                    </Grid>
                    <Grid item>
                      <p>Admin</p>
                      <input type="radio" className="radioBtn" />
                    </Grid>
                    <Grid item>
                      <Grid container justifyContent="space-evenly">
                        <Grid item>
                          <button>Submit</button>
                        </Grid>
                        <Grid item>
                          <button
                            style={{ backgroundColor: "#eb0042" }}
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Popover>
              <Popover
                open={deleteModal}
                onClose={handleClose}
                anchorOrigin={{
                  horizontal: "center",
                }}
              >
                <div className="modal">
                  <h1>{modalHeader}</h1>
                  <Grid container direction="column" justifyContent="center">
                    <Grid item>
                      <p>Email</p>
                      <input type="email" />
                    </Grid>

                    <Grid item>
                      <p>Card id</p>
                      <input type="text" />
                    </Grid>

                    <Grid item>
                      <Grid container justifyContent="space-evenly">
                        <Grid item>
                          <button>Submit</button>
                        </Grid>
                        <Grid item>
                          <button
                            style={{ backgroundColor: "#eb0042" }}
                            onClick={handleClose}
                          >
                            Cancel
                          </button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </div>
              </Popover>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ControlPanel;
