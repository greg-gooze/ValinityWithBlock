var axios = require('axios');
const jwtKey = process.env.PINATA_JWT;

async function main() {
  var data = JSON.stringify({
    'name' : 'NFTname2',
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
    name: 'testing2',
    keyvalues: {
      customKey: 'customValue',
      customKey2: 'customValue2'
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

// const axios = require('axios');
// const fs = require('fs');
// const dotenv = require('dotenv');
// dotenv.config();
// const pinataApiKey = process.env.PINATA_API_KEY;
// const pinataSecretApiKey = process.env.PINATA_API_SECRET;
// const jwtKey = process.env.PINATA_JWT;

// const pinJSONToIPFS = async (JSONBody) => {
//     const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
//     const headers = {
//       pinata_api_key: pinataApiKey,
//       pinata_secret_api_key: pinataSecretApiKey,
//     };
  
//     try {
//       const response = await axios.post(url, JSONBody, {
  
  
  
//   headers });
//   return response.data.IpfsHash;
//   } catch (error) {
//   console.error('Error while pinning JSON to IPFS:', error);
//   return null;
//   }
//   };
  
//   const uploadNFTs = async (nftList) => {
//   for (let i = 0; i < nftList.length; i++) {
//   const nftData = nftList[i];
//   console.log("Uploading NFT #${i + 1}: ${nftData.name}");
//   const ipfsHash = await pinJSONToIPFS(nftData);
//   if (ipfsHash) {
//   console.log("Successfully uploaded NFT #${i + 1}: ${nftData.name} with IPFS hash: ${ipfsHash}");
//   } else {
//   console.log("Failed to upload NFT #${i + 1}: ${nftData.name}");
//   }
//   }
//   };
  
//   const nftList = [
//   // Your list of NFTs in JSON format goes here, e.g.,
//   {
//   name: 'NFTname#1',
//   description: 'Valinity est une société qui stocke des diplômes on chain.',
//   image: 'ipfs://QmYE4kxbhzPzegxCDXApv2F37RdLyKG5Mg8wmCLvtPLP84/1.png',
//   dna: '10a1c15bc2a2e6e6ef26ba97194cd8a630cb136b20',
//   edition: 1,
//   date: 1649945613024,
//   attributes: [
//   {
//   trait_type: 'Hash',
//   value: 'hashvalue',
//   },
//   {
//   trait_type: 'Ecole',
//   value: 'ECE PARIS',
//   },
//   {
//   trait_type: 'Promo',
//   value: '2024',
//   },
//   {
//   trait_type: 'Majeur',
//   value: 'SI',
//   },
//   ],
//   compiler: 'Valinity',
//   },
//   // Add more NFTs to the list as needed
//   ];
  
//   // Call the uploadNFTs function with the list of NFTs
//   uploadNFTs(nftList).then(() => {
//   console.log('Uploading process finished.');
//   });

// const nft = {
//   "name": "NFTname",
//   "description": "Valinity est une société qui stocke des diplômes on chain.",
//   "image": "ipfs://QmYE4kxbhzPzegxCDXApv2F37RdLyKG5Mg8wmCLvtPLP84/1.png",
//   "dna": "10a1c15bc2a2e6ef26ba97194cd8a630cb136b20",
//   "edition": 1,
//   "date": 1649945613024,
//   "attributes": [
//     {
//       "trait_type": "Hash",
//       "value": "hashvalue"
//     },
//     {
//       "trait_type": "Ecole",
//       "value": "ECE PARIS"
//     },
//     {
//       "trait_type": "Promo",
//       "value": "2024"
//     },
//     {
//       "trait_type": "Majeur",
//       "value": "SI"
//     }
//   ],
//   "compiler": "Valinity"
// };

// async function pinJsonToIpfs(json) {
//   const pinataOptions = {
//     cidVersion: 1
//   };
//   const pinataMetadata = {
//     name: 'Valinity NFT',
//     keyvalues: {
//         "pinata_path": "/nft_data_valinity" //chemin d'accès du dossier sur Pinata
//       }
//   };
//   const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
//   const config = {
//     method: 'post',
//     url: url,
//     headers: {
//       pinata_api_key: pinataApiKey,
//       pinata_secret_api_key: pinataSecretApiKey,
//       Authorization: jwtKey,
//       'Content-Type': 'application/json',
//     },
//     data: {
//       pinataOptions: pinataOptions,
//       pinataContent: json,
//       pinataMetadata: pinataMetadata
//     },
//   };
//   const response = await axios(config);
//   console.log(response.data);
//   return response.data.IpfsHash;
// }

// pinJsonToIpfs(nft)
//   .then((ipfsHash) => console.log(`NFT JSON has been pinned to IPFS with hash ${ipfsHash}`))
//   .catch((error) => console.error(`Error pinning NFT JSON to IPFS: ${error.message}`));