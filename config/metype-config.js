export const MetypeConfig = (publisherName = 'demo') => {
  const _MetypeConfig =  {
    'demo' : {
      accountId : 2,
      host: 'https://www.metype.com',
      primaryColor:'#2f81e4',
      bgColor:'#fff',
      className:'',
      fontColor: '#000',
      windowWidth: 700,
      windowHeight: 700
    },
    'samachara' : {
      accountId : 47,
      host: 'https://www.metype.com',
      primaryColor:'#4d086a',
      bgColor:'#fff',
      className:'',
      fontColor: '#000',
      windowWidth: 700,
      windowHeight: 700
    }
  };

  return _MetypeConfig[publisherName] ? _MetypeConfig[publisherName] : _MetypeConfig['demo'];
};
