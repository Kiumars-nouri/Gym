export const dailycalorieOptions ={
    method: 'GET',
    params: {
      age: '25',
      gender: 'male',
      height: '180',
      weight: '70',
      activitylevel: 'level_1'
    },
    headers: {
      'X-RapidAPI-Key': '7fa58b9e92msh29ca7796cfe5872p100743jsnb28b630d59fc',
      'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
    }
};

export const bmiOptions ={
  method: 'GET',
  url: 'https://fitness-calculator.p.rapidapi.com/bmi',
  params: {
    age: '25',
    weight: '65',
    height: '180'
  },
  headers: {
    'X-RapidAPI-Key': '7fa58b9e92msh29ca7796cfe5872p100743jsnb28b630d59fc',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }
};

export const burnedOptions ={
  method: 'GET',
    headers: { 'X-Api-Key': 'rh9TGgprMRSjRRkbNvDZCA==asnHxAKbQ9qzoqcf'},
}




export const intakeOptions ={
  method: 'GET',
    headers: { 'X-Api-Key': 'rh9TGgprMRSjRRkbNvDZCA==icCvkAdIfz1ikfOO'},
}

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}


