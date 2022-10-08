import { Routes, Route } from "react-router-dom";
import Messages from "./Screens/Messages";
import Footer from "./Components/Footer/index";
import Navbar from "./Components/Navbar/index";
import MainScreen from "./Screens/MainScreen";
import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "./Utils/index";

function App() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [messages, setMessages] = useState([]);
  const [searchVal, setSearchVal] = useState();
  const [loading, setLoading] = useState(false);

  const getBlogs = () => {
    setLoading(true);
    axios
      .get(`${BASE_URL}/getBlog?page=${page}&size=${page * 10}`)
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    getBlogs();
  }, [page]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/getMessages`)
      .then((response) => {
        setMessages(response.data.messages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} />
      <div style={{ marginTop: "4.25rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={
            <MainScreen
              posts={posts}
              page={page}
              setPage={setPage}
              getBlogs={getBlogs}
              searchVal={searchVal}
              loading={loading}
            />
          }
        />
        <Route path="/messages" element={<Messages messages={messages} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
