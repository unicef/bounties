require("dotenv").config({ path: "../.env" });
const BountiesAdmin = require('../index');
const config = require('../config');
const Bounties = new BountiesAdmin();
const earnersData = [
  {
    "address": "0xedea4377f0ad4e4a85b6297a6a3ce954e56c4e5c",
    "name": "Whiteblock Bounty",
    "email": "neal@whiteblock.io",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 11955.733218,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x458c5c6e8fd90d0432bb4ed370a18a1a07f875bb",
    "name": "Sam Steele",
    "email": "ssteele017@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 2461.9,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0xbbaac64b4e4499aa40db238faa8ac00bac50811b",
    "name": "Edson Ayllon",
    "email": "eayllon1@gmail.com",
    "githubusername": "edsonayllon",
    "profile_image": "",
    "total": "520035000000000000000",
    "total_usd": 2381.70512,
    "bounties_fulfilled": 5,
    "fulfillments_accepted": 5
  },
  {
    "address": "0xb5159904a38d7d2ce38662854418ec3a1f4edda2",
    "name": "Mulenga Bowa",
    "email": "mulengabowa53@gmail.com",
    "githubusername": "mul53",
    "profile_image": "",
    "total": "5000000000000000000",
    "total_usd": 1330.65,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x565b93a15d38acd79c120b15432d21e21ed274d6",
    "name": "Brian Flynn",
    "email": "bflynn.me@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "1250000000000000000000",
    "total_usd": 1253.5,
    "bounties_fulfilled": 2,
    "fulfillments_accepted": 2
  },
  {
    "address": "0x71765388bdde1079ec83f0448242469d69ae93f2",
    "name": "Seth Goldfarb",
    "email": "goldfarbas@gmail.com",
    "githubusername": "goldfarbas",
    "profile_image": "https://assets.bounties.network/production/userimages/0x71765388bdde1079ec83f0448242469d69ae93f2-sm-07d5.png",
    "total": "1000060000000000000000",
    "total_usd": 1152.2882,
    "bounties_fulfilled": 3,
    "fulfillments_accepted": 3
  },
  {
    "address": "0x0e97143e4a06530e42c21aed824f1ea2e2710ffe",
    "name": "Virutal",
    "email": "ajoydesign3@gmail.com",
    "githubusername": "Virtual-Face",
    "profile_image": "https://assets.bounties.network/production/userimages/0x0e97143e4a06530e42c21aed824f1ea2e2710ffe-sm-3853.png",
    "total": "400219000000000000000",
    "total_usd": 1121.88056,
    "bounties_fulfilled": 17,
    "fulfillments_accepted": 17
  },
  {
    "address": "0xb73230709cabf48455b63bc7721695fb4f704028",
    "name": "Michael",
    "email": "mmisiewicz@gmail.com",
    "githubusername": "mmisiewicz",
    "profile_image": "https://assets.bounties.network/production/userimages/0xb73230709cabf48455b63bc7721695fb4f704028-4.jpg",
    "total": "0",
    "total_usd": 1021.9104,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x34a971ca2fd6da2ce2969d716df922f17aaa1db0",
    "name": "Andrew Stanger",
    "email": "andrew@stanger.co.uk",
    "githubusername": "",
    "profile_image": "",
    "total": "900000000000000000000",
    "total_usd": 903.6,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x1093ecb193fb2f28a06fd7ec0ee04b67e52cff45",
    "name": "atm0sphere",
    "email": "tradeninja7@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 839.5348,
    "bounties_fulfilled": 13,
    "fulfillments_accepted": 13
  },
  {
    "address": "0x6c18aab858f119cfc4965f0d83aeb7756fdaed65",
    "name": "Martin",
    "email": "martin.radosevic000@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 812.79975,
    "bounties_fulfilled": 5,
    "fulfillments_accepted": 5
  },
  {
    "address": "0x224aba5d489675a7bd3ce07786fada466b46fa0f",
    "name": "Santiago Gonzalez Toral",
    "email": "hernangt12re3@gmail.com",
    "githubusername": "santteegt",
    "profile_image": "https://assets.bounties.network/production/userimages/0x224aba5d489675a7bd3ce07786fada466b46fa0f-311.jpg",
    "total": "4000000000000000000",
    "total_usd": 782.72264,
    "bounties_fulfilled": 3,
    "fulfillments_accepted": 3
  },
  {
    "address": "0xc01dd229c5ce4f82d5f692acdba8b8a77050541d",
    "name": "manolingam",
    "email": "manolingam1996@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "750000000000000000000",
    "total_usd": 762,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x85a363699c6864248a6ffca66e4a1a5ccf9f5567",
    "name": "Mars Robertson ⚡️⚡️⚡️",
    "email": "marsxrobertson@gmail.com",
    "githubusername": "marsrobertson",
    "profile_image": "https://assets.bounties.network/production/userimages/0x85a363699c6864248a6ffca66e4a1a5ccf9f5567-sm-d973.png",
    "total": "750000000000000000000",
    "total_usd": 753.75,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x61ffe691821291d02e9ba5d33098adcee71a3a17",
    "name": "Cesar",
    "email": "cesar@dorg.tech",
    "githubusername": "cbrzn",
    "profile_image": "https://assets.bounties.network/production/userimages/0x61ffe691821291d02e9ba5d33098adcee71a3a17-sm-f74b.png",
    "total": "750000000000000000000",
    "total_usd": 753.75,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0xabccb8f0a3c206bb0468c52ccc20f3b81077417b",
    "name": "Kendrick Tan",
    "email": "kendricktan0814@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "750000000000000000000",
    "total_usd": 753.75,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x6801c926733eed08210738986a8c56414125b1ae",
    "name": "Vlad Silviu Farcas",
    "email": "vladsilviufarcas@gmail.com",
    "githubusername": "uivlis",
    "profile_image": "https://assets.bounties.network/production/userimages/0x6801c926733eed08210738986a8c56414125b1ae-220.jpg",
    "total": "0",
    "total_usd": 739.189979,
    "bounties_fulfilled": 10,
    "fulfillments_accepted": 10
  },
  {
    "address": "0x9a874ea5e87c32ba077b8bf3a31e3229fcb5d2f5",
    "name": "Abhijith Ms",
    "email": "msabhijith1@gmail.com",
    "githubusername": "z737",
    "profile_image": "",
    "total": "60000000000000000",
    "total_usd": 721.88364,
    "bounties_fulfilled": 5,
    "fulfillments_accepted": 5
  },
  {
    "address": "0x2eca4067cca276dfa83a0486eba4ab11e8afce11",
    "name": "Hazim",
    "email": "hazim.khaled@msa.edu.eg",
    "githubusername": "",
    "profile_image": "",
    "total": "511019000000000000000",
    "total_usd": 700.24559,
    "bounties_fulfilled": 19,
    "fulfillments_accepted": 19
  },
  {
    "address": "0x77e3630dec288c9a477bc430c44d8507068a63d1",
    "name": "Marin Petrunić",
    "email": "marin@nodefactory.io",
    "githubusername": "mpetrunic",
    "profile_image": "https://assets.bounties.network/production/userimages/0x77e3630dec288c9a477bc430c44d8507068a63d1-sm-c33b.png",
    "total": "2000000000000000000",
    "total_usd": 639.2,
    "bounties_fulfilled": 2,
    "fulfillments_accepted": 2
  },
  {
    "address": "0x18b53dae52e625aced3a08ee621439c4e7148dd3",
    "name": "",
    "email": "abdulkaderuniv@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 609.375,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0xea681a134f107a14ab59b79cd8535ad4b7737e61",
    "name": "Nathan",
    "email": "nathanielchen8@gmail.com",
    "githubusername": "",
    "profile_image": "",
    "total": "0",
    "total_usd": 575,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x4a8b2aa05aa9697258383779206a77a942c6e6cc",
    "name": "Jez",
    "email": "jezsmith1991@gmail.com",
    "githubusername": "jezsmith720",
    "profile_image": "",
    "total": "100465700000020000000000",
    "total_usd": 532.0475,
    "bounties_fulfilled": 12,
    "fulfillments_accepted": 12
  },
  {
    "address": "0xa7b5b93bf8b322023bda57e2c86b57f4ddb4f4a1",
    "name": "Mitrasish Mukherjee",
    "email": "mmitrasish97@gmail.com",
    "githubusername": "mmitrasish",
    "profile_image": "",
    "total": "500000000000000000000",
    "total_usd": 503,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  },
  {
    "address": "0x394495a3800d1504b5686d398836baefebd0c5b7",
    "name": "Emiliano Bonassi",
    "email": "emiliano@hal.xyz",
    "githubusername": "",
    "profile_image": "",
    "total": "500000000000000000000",
    "total_usd": 503,
    "bounties_fulfilled": 1,
    "fulfillments_accepted": 1
  }
];

const issuersData = [
  {
      "address": "0x7d935b410f202e46eb3df2b51c388c8ca08c3912",
      "name": "Brent Xu",
      "email": "brent.xu@consensys.net",
      "githubusername": "",
      "profile_image": "",
      "total": "0",
      "total_usd": 11955.733218,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x54becc7560a7be76d72ed76a1f5fee6c5a2a7ab6",
      "name": "Simona",
      "email": "simona.pop@consensys.net",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0x54becc7560a7be76d72ed76a1f5fee6c5a2a7ab6-160.jpg",
      "total": "3202799500000000000000",
      "total_usd": 7273.07632500001,
      "bounties_issued": 55,
      "fulfillments_paid": 798
  },
  {
      "address": "0xbfdb50dc66c8df9fd9688d8fe5a0c34126427645",
      "name": "Mark Beylin",
      "email": "mark.beylin@consensys.net",
      "githubusername": "mbeylin",
      "profile_image": "https://assets.bounties.network/production/userimages/0xbfdb50dc66c8df9fd9688d8fe5a0c34126427645-sm-e29f.png",
      "total": "111275000000000000000",
      "total_usd": 5255.33768999999,
      "bounties_issued": 30,
      "fulfillments_paid": 316
  },
  {
      "address": "0x24f088365997a9790616a0855a0466926d5d9d4e",
      "name": "Christina",
      "email": "clomazzo@unicef.org",
      "githubusername": "",
      "profile_image": "",
      "total": "0",
      "total_usd": 2461.9,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0xa5dcec366b04a127d0f4efee183346f25434d648",
      "name": "Adam B.",
      "email": "adam@compound.finance",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0xa5dcec366b04a127d0f4efee183346f25434d648-sm-b427.png",
      "total": "2250000000000000000000",
      "total_usd": 2269.5,
      "bounties_issued": 2,
      "fulfillments_paid": 3
  },
  {
      "address": "0x40630b4fd61523450b3dbc4d9fd672aae0a9c31c",
      "name": "",
      "email": "gabe.tumlos@consensys.net",
      "githubusername": "",
      "profile_image": "",
      "total": "0",
      "total_usd": 2040.57,
      "bounties_issued": 1,
      "fulfillments_paid": 12
  },
  {
      "address": "0x6d1a4be65723355a9f5b12c446780a5000849461",
      "name": "Alex Zak",
      "email": "alex@daostack.io",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0x6d1a4be65723355a9f5b12c446780a5000849461-sm-a872.png",
      "total": "10000000000000000000",
      "total_usd": 1861.7,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x6fc46b64e3de0a4962d15a75129f39a9068c6f10",
      "name": "burrrata",
      "email": "burrrata@aragon.org",
      "githubusername": "",
      "profile_image": "",
      "total": "1650000000000000000000",
      "total_usd": 1657.55,
      "bounties_issued": 3,
      "fulfillments_paid": 3
  },
  {
      "address": "0xe66f8c6ab127ecdfd5cbf031f74a584ad2fc494b",
      "name": "Will Villanueva",
      "email": "will.villanueva@consensys.net",
      "githubusername": "villanuevawill",
      "profile_image": "https://assets.bounties.network/production/userimages/0xe66f8c6ab127ecdfd5cbf031f74a584ad2fc494b-274.jpg",
      "total": "0",
      "total_usd": 1477.8754,
      "bounties_issued": 4,
      "fulfillments_paid": 6
  },
  {
      "address": "0x418cf9e24c8e74e0155c9c7f6da8a10b0ca799cd",
      "name": "Tal Beja",
      "email": "tal@fuse.io",
      "githubusername": "bejavu",
      "profile_image": "https://assets.bounties.network/production/userimages/0x418cf9e24c8e74e0155c9c7f6da8a10b0ca799cd-sm-360f.png",
      "total": "19305000000000000000000",
      "total_usd": 1330.65,
      "bounties_issued": 6,
      "fulfillments_paid": 50
  },
  {
      "address": "0xdf713b9165648d716b45ff6ae03ae279161c17c5",
      "name": "Sheridan Johns",
      "email": "sheridan@oceanprotocol.com",
      "githubusername": "oceanprotocol",
      "profile_image": "https://assets.bounties.network/production/userimages/0xdf713b9165648d716b45ff6ae03ae279161c17c5-994.jpg",
      "total": "0",
      "total_usd": 1322.5,
      "bounties_issued": 2,
      "fulfillments_paid": 3
  },
  {
      "address": "0xf563f100df419ccde59bfbe0692fc4c5bfe01706",
      "name": "Rich Brown",
      "email": "rich@makerdao.com",
      "githubusername": "ghettodev",
      "profile_image": "https://assets.bounties.network/production/userimages/0xf563f100df419ccde59bfbe0692fc4c5bfe01706-475.jpg",
      "total": "0",
      "total_usd": 1069.3414,
      "bounties_issued": 7,
      "fulfillments_paid": 40
  },
  {
      "address": "0xf956f4d787f8ca0f363468859e54ead5ca1e5184",
      "name": "DECENT OPEN BOUNTY Team",
      "email": "support@decent.ch",
      "githubusername": "DECENTfoundation",
      "profile_image": "https://assets.bounties.network/production/userimages/0xf956f4d787f8ca0f363468859e54ead5ca1e5184-sm-85f3.png",
      "total": "2460000000000000000",
      "total_usd": 1043.8013,
      "bounties_issued": 8,
      "fulfillments_paid": 8
  },
  {
      "address": "0x7d96b5c4279e20bab1ca0043a65f2bb156b0c6eb",
      "name": "",
      "email": "",
      "githubusername": "",
      "profile_image": "",
      "total": "1000000000000000000000",
      "total_usd": 1006,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x2f4ce4f714c68a3fc871d1f543ffc24b9b3c2386",
      "name": "Rachel Black",
      "email": "rachel@3box.io",
      "githubusername": "",
      "profile_image": "",
      "total": "1000000000000000000000",
      "total_usd": 1002,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x5e93b5e3b314ba5c4dc4e8455e2fa363e2a35c60",
      "name": "Statusphere",
      "email": "jonathan@status.im",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0x5e93b5e3b314ba5c4dc4e8455e2fa363e2a35c60-sm-c75c.png",
      "total": "42927000000000000000000",
      "total_usd": 984.7365,
      "bounties_issued": 8,
      "fulfillments_paid": 157
  },
  {
      "address": "0xdf60dcbb3bfcf9b4cd6e12359b27b6740013bbb5",
      "name": "Marc Zeller",
      "email": "marc@aave.com",
      "githubusername": "Aave",
      "profile_image": "https://assets.bounties.network/production/userimages/0xdf60dcbb3bfcf9b4cd6e12359b27b6740013bbb5-sm-2771.png",
      "total": "900000000000000000000",
      "total_usd": 903.6,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x18495d4a42d07fdbb965732e26c33b61999f5f6c",
      "name": "Simona Pop",
      "email": "Simona.pop@consensys.net",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0x18495d4a42d07fdbb965732e26c33b61999f5f6c-691.jpg",
      "total": "0",
      "total_usd": 846.6857,
      "bounties_issued": 4,
      "fulfillments_paid": 58
  },
  {
      "address": "0x6bb0c2f7fe801148519f3267b826db42f7c423b3",
      "name": "The Pepo App",
      "email": "f@ost.com",
      "githubusername": "",
      "profile_image": "https://assets.bounties.network/production/userimages/0x6bb0c2f7fe801148519f3267b826db42f7c423b3-sm-8bf3.png",
      "total": "57500000000000000000000",
      "total_usd": 797.525,
      "bounties_issued": 5,
      "fulfillments_paid": 64
  },
  {
      "address": "0xa8ee0babe72cd9a80ae45dd74cd3eae7a82fd5d1",
      "name": "Michael",
      "email": "michaelrsena@gmail.com",
      "githubusername": "michsaelsena",
      "profile_image": "https://assets.bounties.network/production/userimages/0xa8ee0babe72cd9a80ae45dd74cd3eae7a82fd5d1-sm-2a0c.png",
      "total": "0",
      "total_usd": 777.6214,
      "bounties_issued": 6,
      "fulfillments_paid": 33
  },
  {
      "address": "0xb9b8ef61b7851276b0239757a039d54a23804cbb",
      "name": "Bruno",
      "email": "contact@bitfalls.com",
      "githubusername": "swader",
      "profile_image": "https://assets.bounties.network/production/userimages/0xb9b8ef61b7851276b0239757a039d54a23804cbb-sm-073e.png",
      "total": "690000000000000000000",
      "total_usd": 694.44,
      "bounties_issued": 1,
      "fulfillments_paid": 23
  },
  {
      "address": "0x865c2f85c9fea1c6ac7f53de07554d68cb92ed88",
      "name": "pet3rpan",
      "email": "peterdennispan@gmail.com",
      "githubusername": "pet3r-pan",
      "profile_image": "https://assets.bounties.network/production/userimages/0x865c2f85c9fea1c6ac7f53de07554d68cb92ed88-553.jpg",
      "total": "0",
      "total_usd": 644.0703,
      "bounties_issued": 4,
      "fulfillments_paid": 4
  },
  {
      "address": "0xb038105f748b1033c6a8d01fefe0c15cdfdb70fb",
      "name": "chris hutchinson",
      "email": "hutchie25@gmail.com",
      "githubusername": "",
      "profile_image": "",
      "total": "0",
      "total_usd": 626.10304,
      "bounties_issued": 1,
      "fulfillments_paid": 1
  },
  {
      "address": "0x12678499602abf5b694065d29dce0d8962ed263d",
      "name": "Yalor",
      "email": "yalortackson@gmail.com",
      "githubusername": "Yalormewn",
      "profile_image": "https://assets.bounties.network/production/userimages/0x12678499602abf5b694065d29dce0d8962ed263d-sm-1585.png",
      "total": "0",
      "total_usd": 623.60626,
      "bounties_issued": 7,
      "fulfillments_paid": 33
  },
  {
      "address": "0xb08ab415866b6aa9168d38766d32504fd3b90560",
      "name": "Russell Verbeeten",
      "email": "russell.verbeeten@consensys.net",
      "githubusername": "rverbee",
      "profile_image": "https://assets.bounties.network/production/userimages/0xb08ab415866b6aa9168d38766d32504fd3b90560-709.jpg",
      "total": "1500000000000000000",
      "total_usd": 605.3363,
      "bounties_issued": 4,
      "fulfillments_paid": 4
  }
]


const makeLeaderboardData = async () => {
  for( let i = 0; i<issuersData.length; i++ ) {
    const issuerData = { ...issuersData[i], leaderboardType: "issuer" };
    await Bounties.saveLeaderboard(issuerData);
  }
  for( let j = 0; j < earnersData.length; j++ ) {
    const earnerData = { ...earnersData[j], leaderboardType: "earner" };
    await Bounties.saveLeaderboard(earnerData);
  }
  Bounties.exit();
}

makeLeaderboardData();




