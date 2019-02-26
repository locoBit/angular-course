app.factory('MarvelService', function($q, $http) {
  const api_url = 'http://gateway.marvel.com/v1/public';
  const ts = '1';
  const api_key = '3d0b891e21d328c90f75686a7f243dad';
  const hash = '4a52bb7628873223c2612e04f350236e';
  const image_size = 'portrait_xlarge';

  return {
    getCharacters: getCharacters,
    getCharacter: getCharacter
  };

  function getCharacters() {
    const defered = $q.defer();
    const promise = defered.promise;

    $http.get(`${api_url}/characters?ts=${ts}&apikey=${api_key}&hash=${hash}`)
      .success(res => {
        defered.resolve(res);
      })
      .error(err => {
        defered.reject(err);
      });

    return promise;
  }

  function getCharacter(id) {
    const defered = $q.defer();
    const promise = defered.promise;

    $http.get(`${api_url}/characters/${id}?ts=${ts}&apikey=${api_key}&hash=${hash}`)
      .success(res => {
        defered.resolve(res);
      })
      .error(err => defered.reject(err));

    return promise;
  }
});
