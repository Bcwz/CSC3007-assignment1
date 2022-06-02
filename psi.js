
URL = 'https://api.data.gov.sg/v1/environment/psi'

const getPsiValue = async () => {
    const response = await fetch(URL, {
      method: 'POST',
      body: myBody, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const psiJson = await response.json(); //extract JSON from the http response
    return psiJson
  }