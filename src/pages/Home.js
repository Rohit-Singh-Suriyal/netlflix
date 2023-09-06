import Main from "../components/Main";
import Row from "../components/Row";
import Request from "../Request";
import { Auth } from "../firebase";

function Home() {
  return (
    <>
    
      <Main />
      <Row row="1" title="Upcoming" fetchurl={Request.request_upcoming}/>
      <Row  row="2" title="Popular"  fetchurl={Request.request_poular}/>
      <Row   row="3" title="Trending" fetchurl={Request.requesttrending}/>
      <Row row="4" title="Top Rated" fetchurl={Request.request_toprated}/>
      <Row  row ="5" title="Horror"  fetchurl={Request.request_horror}/>
    </>
  );
}
export default Home;
