const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.json());
try {
  mongoose
    .connect("mongodb://localhost:27017/TecnicoLogin", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB", err);
    });
} catch (err) {
  console.error("Error connecting to MongoDB", err);
}

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const JobModal = mongoose.model(
  "CurrentJob",
  new mongoose.Schema({
    job_id: String,
    title: String,
    description: String,
  }),
  "CurrentJob"
);

const UserInfo = mongoose.model("User", userSchema, "User");

app.use(cors());
app.use(bodyParser.json());

app.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, password);
  try {
    const user = await UserInfo.findOne({
      username,
      email,
    });
    console.log(user, "user");

    if (user.password === password) {
      res.json({
        success: true,
        message: "Login successful",
      });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.get("/api/fetch-job", async (req, res) => {
  try {
    const jobs = await JobModal.find({});
    console.log(jobs);
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error in Fetching Jobs", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

app.post("/api/add-job", async (req, res) => {
  try {
    const { job_id, title, description } = req.body;
    const newJob = new JobModal({ job_id, title, description });
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    console.error("Error adding job", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.delete("/api/delete-job/:id", async (req, res) => {
  try {
    const deletedJob = await JobModal.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedJob);
  } catch (err) {
    console.error("Error deleting job", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

app.put("/api/edit-job/:id", async (req, res) => {
  try {
    const { job_id, title, description } = req.body;
    const updatedJob = await JobModal.findByIdAndUpdate(
      req.params.id,
      { job_id, title, description },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (err) {
    console.error("Error editing job", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
