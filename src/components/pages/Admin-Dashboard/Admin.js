import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Admin = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    job_id: "",
    title: "",
    description: "",
  });
  const [IsLoading, setIsLoading] = useState(false);
  const [IsValidUser, setIsValidUser] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [IsValidUser, setIsValidUser] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  async function fetchApi() {
    const email = localStorage.getItem("email");
    const _id = localStorage.getItem("_id");

    setIsLoading(true);

    await axios
      .post("http://localhost:5000/verify", { email, _id, currRole: "admin" })
      .then((res) => {
        if (res && res.data.validUser) {
          setIsValidUser(true);
        } else {
          return navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setIsValidUser(false);
        setIsLoading(false);
        navigate("/");
      });
  }

  useEffect(() => {
    fetchApi();
  });

  useEffect(() => {
    let isMounted = true;

    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/fetch-job");

        if (isMounted) {
          setJobs(response.data);
        }
      } catch (err) {
        console.error("Error in fetching jobs ", err);
      }
    };
    fetchJobs();

    return () => {
      isMounted = false;
    };
  }, []);

  let isMounted = true;

  const addJob = async () => {
    try {
      if (isMounted) {
        await axios.post("http://localhost:5000/api/add-job", newJob);
        fetchJobs();
        setNewJob({ job_id: "", title: "", description: "" });
      }
    } catch (err) {
      console.error("Error adding job ", err);
    }
  };

  const deleteJob = async (id) => {
    try {
      if (isMounted) {
        await axios.delete(`http://localhost:5000/api/delete-job/${id}`);
        fetchJobs();
      }
    } catch (err) {
      console.error("Error deleting job ", err);
    }
  };

  const editJob = async () => {
    try {
      if (isMounted) {
        await axios.put(
          `http://localhost:5000/api/edit-job/${editingJob._id}`,
          editingJob
        );
        fetchJobs();
        setEditingJob(null);
      }
    } catch (err) {
      console.error("Error editing job ", err);
    }
  };

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/fetch-job");

      if (isMounted) {
        setJobs(response.data);
      }
    } catch (err) {
      console.error("Error in fetching jobs ", err);
    }
  };

  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("_id");
    navigate("/");
  };

  return (
    <div className="admin-container">
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
      {IsValidUser && (
        <>
          <h1>Job Management System</h1>
          <div className="form-container">
            <h2>Integrate Latest Position</h2>
            <form
              className="admin-form"
              onSubmit={(e) => {
                e.preventDefault();
                if (editingJob) {
                  editJob();
                } else {
                  addJob();
                }
              }}
            >
              <label>
                Job ID
                <input
                  type="text"
                  value={editingJob ? editingJob.job_id : newJob.job_id}
                  onChange={(e) => {
                    if (editingJob) {
                      setEditingJob({ ...editingJob, job_id: e.target.value });
                    } else {
                      setNewJob({ ...newJob, job_id: e.target.value });
                    }
                  }}
                />
              </label>
              <label>
                Title
                <input
                  type="text"
                  value={editingJob ? editingJob.title : newJob.title}
                  onChange={(e) => {
                    if (editingJob) {
                      setEditingJob({ ...editingJob, title: e.target.value });
                    } else {
                      setNewJob({ ...newJob, title: e.target.value });
                    }
                  }}
                />
              </label>
              <label>
                Description
                <textarea
                  type="text"
                  style={{ height: 150 }}
                  value={
                    editingJob ? editingJob.description : newJob.description
                  }
                  onChange={(e) => {
                    if (editingJob) {
                      setEditingJob({
                        ...editingJob,
                        description: e.target.value,
                      });
                    } else {
                      setNewJob({ ...newJob, description: e.target.value });
                    }
                  }}
                />
              </label>
              <button type="submit">
                {editingJob ? "Edit Job" : "Add Job"}
              </button>
            </form>
          </div>
          <div className="job-list-container">
            <h2>Current Jobs</h2>

            {jobs.length === 0 ? (
              <p style={{ textAlign: "center", fontSize: 20, color: "red" }}>
                No jobs currently available!
              </p>
            ) : (
              <table className="job-list">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job._id}>
                      <td>{job.job_id}</td>
                      <td>{job.title}</td>
                      <td style={{ textAlign: "justify" }}>
                        {job.description}
                      </td>
                      <td className="btn-edit-delete">
                        <button onClick={() => deleteJob(job._id)}>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                        <button onClick={() => setEditingJob(job)}>
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
