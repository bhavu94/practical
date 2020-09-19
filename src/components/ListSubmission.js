import React, { useEffect, useState, useContext } from "react";
import { FireBaseContext } from "./context";
import Table from "./Table";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

function DataContainer() {
  const [exportData, setExport] = useState(null);
  const [submissions, setFoundSubmission] = useState([]);
  const [loading, setLoading] = useState(true);
  const { firestore } = useContext(FireBaseContext);

  useEffect(() => {
    const getSubmissions = async () => {
      try {
        setLoading(true);
        const { docs } = await firestore.collection("users").get();
        const data = docs.map((doc) => doc.data());

        if (data.length > 0) {
          setLoading(false);
          setFoundSubmission(data);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    getSubmissions();
  }, []);

  const exportFile = () => {
    exportData.save();
  };

  return (
    <Container
      maxWidth="lg"
      style={{ backgroundColor: "white", marginBottom: " 50px" }}
    >
      <div className="row">
        <div className="col-md-9">
          <header className="d-flex justify-content-between mb-2 dashboard-header">
            <h2>
              <i className="fa fa-cube"></i> Submissions
            </h2>
            <div>
              <Button onClick={exportFile}>
                <i className="fa fa-sign-out fa-fw mr-1" aria-hidden="true"></i>
                Export File
              </Button>
            </div>
          </header>

          <Table setExport={setExport} isLoading={loading} data={submissions} />
        </div>
      </div>
    </Container>
  );
}

export default DataContainer;
