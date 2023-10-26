export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2761161772msh85f380e9ea03fb7p19c876jsn55740d0d6a42',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const fetchData = async(url, options) => {
   try{ const response = await fetch(url, options);
    const data = await response.json();

    return data;}

    catch(error){
      console.log(error)
    }
  }


