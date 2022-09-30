import NavbarComponent from '../components/Navbar';
import ContentWrapper from '../components/ContentWrapper';
import { ContentContext } from '../context'; 
import { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState({
    loading: true,
    data: [],
    error: false,
  });

  const [search, setSearch] = useState('')

  const [page, setPage] = useState(1);
  const reqData = (searchKey = '', pageNumber = 1) => {
    axios({
      method: "post",
      url: `https://be-aia.herokuapp.com/api/v1/getFlickr?page=${pageNumber}`,
      data: {
        search: searchKey,
      }
    })
      .then((response) => {
        setData({
          loading: false,
          error: false,
          ...response.data
        });
      })
      .catch((error) => {
        setData((prev) => {
          return {
            ...prev,
            loading: false,
            data: false,
            error: error.message,
          }
        });
      });
  };
  useEffect(() => {
    reqData(search, page);
    // eslint-disable-next-line
  }, [page]);
  const contextValue = {
    data,
    reqData,
    pagination: [page, setPage],
    keyword: [search, setSearch]
  }
    return (
      <>
        <ContentContext.Provider value={contextValue}>
          <NavbarComponent />
          <ContentWrapper />
        </ContentContext.Provider>
      </>
    );
  };
  
  export default HomePage;
  