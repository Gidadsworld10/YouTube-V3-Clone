import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feed, SearchFeed, VideoDetails, ChannelDetails } from "./components";
import EmptyFeed from "./components/EmptyFeed";

const App = () => (
<BrowserRouter>
<Box sx={{backgroundColor: "#000"}}>
<Navbar />
<Routes>
  <Route path="/" exact element={<Feed />} />
  <Route path="/video/:id"  element={<VideoDetails />} />
  <Route path="/channel/:id"  element={<ChannelDetails />} />
  <Route path="/search/:searchTerm"  element={<SearchFeed />} />
  {/* <Route path="/*" exact element={<EmptyFeed />} /> */}
</Routes>
</Box>
</BrowserRouter>

)

export default App;
