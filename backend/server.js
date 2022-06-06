const express = require("express");
const { resetWatchers } = require("nodemon/lib/monitor/watch");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
 const chatRoutes = require("./routes/chatRoutes");
// const messageRoutes = require("./routes/messageRoutes");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
    res.send("Api is Running successfully");
});

app.use(express.json());

 app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes); 
//app.use(notFound);
//app.use(errorHandler);
// app.use("/api/message", messageRoutes);

/* checking the end points in the testing mode */
// app.get("/api/chat", (req, res) => {
//     res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//     //console.log(req.params.id);
//     const sigleChat = chats.find((c) => c._id === req.params.id);
//     res.send(sigleChat);
// });

const PORT = process.env.PORT || 5000;
app.listen(5000,console.log(`server is started on port ${PORT}`));