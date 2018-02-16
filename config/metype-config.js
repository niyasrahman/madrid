const MetypeConfig = (publisherName = 'demo') => {
  const _MetypeConfig =  {
    'demo' : {
      accountId : 2,
      host: 'http://localhost:5000',
      primaryColor:'#2f81e4',
      bgColor:'#fff',
      className:'',
      fontColor: '#000',
      windowWidth: 700,
      windowHeight: 700
    }
  };

  return _MetypeConfig[publisherName] ? _MetypeConfig[publisherName] : _MetypeConfig['demo'];
};

module.exports = MetypeConfig;