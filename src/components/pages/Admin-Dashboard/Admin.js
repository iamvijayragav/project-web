import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Admin = ({ onLogout }) => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [newJob, setNewJob] = useState({
    job_id: "",
    title: "",
    description: "",
  });
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/fetch-job");
      setJobs(response.data);
    } catch (err) {
      console.error("Error in fetching jobs ", err);
    }
  };

  const addJob = async () => {
    try {
      await axios.post("http://localhost:5000/api/add-job", newJob);
      fetchJobs();
      setNewJob({ job_id: "", title: "", description: "" });
    } catch (err) {
      console.error("Error adding job ", err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/delete-job/${id}`);
      fetchJobs();
    } catch (err) {
      console.error("Error deleting job ", err);
    }
  };

  const editJob = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/edit-job/${editingJob._id}`,
        editingJob
      );
      fetchJobs();
      setEditingJob(null);
    } catch (err) {
      console.error("Error editing job ", err);
    }
  };
  const logout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("_id");
    navigate("/");
  };

  return (
    <div>
      <h1>Job Management System</h1>
      <div>
        <h2>Add/Edit Job</h2>
        <form
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
            Job ID:
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
            Title:
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
            Description:
            <input
              type="text"
              value={editingJob ? editingJob.description : newJob.description}
              onChange={(e) => {
                if (editingJob) {
                  setEditingJob({ ...editingJob, description: e.target.value });
                } else {
                  setNewJob({ ...newJob, description: e.target.value });
                }
              }}
            />
          </label>
          <button type="submit">{editingJob ? "Edit Job" : "Add Job"}</button>
        </form>
      </div>
      <div>
        <h2>Current Jobs</h2>
        <table>
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
                <td>{job.description}</td>
                <td>
                  <button onClick={() => deleteJob(job._id)}>Delete</button>
                  <button onClick={() => setEditingJob(job)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Admin;
