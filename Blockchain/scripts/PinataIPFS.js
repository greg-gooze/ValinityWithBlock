var axios = require('axios');

async function main() {
  var data = JSON.stringify({
    'name' : 'NFTname5',
    'description' : 'Valinity est une société qui stocke des diplômes on chain.',
    'image' : 'ipfs://QmYE4kxbhzPzegxCDXApv2F37RdLyKG5Mg8wmCLvtPLP84/1.png',
    'dna' : '10a1c15bc2a2e6ef26ba97194cd8a630cb136b20',
    'edition' : 1,
    'date' : 1649945613024,
    'attributes': [
      {
        'trait_type': 'Hash',
        'value': 'hashvalue'
      },
      {
        'trait_type': 'Ecole',
        'value': 'ECE PARIS'
      },
      {
        'trait_type': 'Promo',
        'value': '2024'
      },
      {
        'trait_type': 'Majeur',
        'value': 'SI'
      }
    ],
    'compiler': 'Valinity'
  },
  {
    'name' : 'NFTname4',
    'description' : 'Valinity est une société qui stocke des diplômes on chain.',
    'image' : 'ipfs://QmYE4kxbhzPzegxCDXApv2F37RdLyKG5Mg8wmCLvtPLP84/1.png',
    'dna' : '10a1c15bc2a2e6ef26ba97194cd8a630cb136b20',
    'edition' : 1,
    'date' : 1649945613024,
    'attributes': [
      {
        'trait_type': 'Hash',
        'value': 'hashvalue'
      },
      {
        'trait_type': 'Ecole',
        'value': 'ECE PARIS'
      },
      {
        'trait_type': 'Promo',
        'value': '2024'
      },
      {
        'trait_type': 'Majeur',
        'value': 'SI'
      }
    ],
    'compiler': 'Valinity'
  });
  data = JSON.parse(data);
  
  var options = {
    cidVersion: 1
  };
  
  var metadata = {
    name: 'testing3',
    keyvalues: {
      customKey: 'customValue',
      customKey2: 'customValue2',
      pinata_path: "/nft_data_Valinity"
    }
  };
  var config = {
    method: 'post',
    url: 'https://api.pinata.cloud/pinning/pinJSONToIPFS',
    headers: {
      'Content-Type': 'application/json',
      'pinata_api_key': '7c198c3ea7918fafdccf',
      'pinata_secret_api_key': '026c743a7aed08afb11f319e4b1aa839ec7e9a7908966fe5fd2f0e8a6011dc28',
      //'Authorization': jwtKey
    },
    data: {
      pinataContent: data,
      pinataOptions: options,
      pinataMetadata: metadata
    }
  };
  
  const res = await axios(config);
  
  console.log(res.data);
}

main();