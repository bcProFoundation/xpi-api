/*
  Mock data for the encryption test library
*/

const mockNoSendTx = {
  txid: 'a3b62cd4f4c56ba52139179db14bffd4ab22a2e077f3c62bd5cf0541bfcaf023',
  hash: 'a3b62cd4f4c56ba52139179db14bffd4ab22a2e077f3c62bd5cf0541bfcaf023',
  version: 2,
  size: 226,
  locktime: 0,
  vin: [
    {
      txid: '681cc1d392975a7e78cbd490b8a940d7eb029c554f2cee332e3a7119d77fb189',
      vout: 1,
      scriptSig: {
        asm:
          '30450221008a7c86ce3a9f5765573440143a00631bb5afa9a58b24674a7fa794bb11ffffc30220397dd4c672c3e0dbe0c4eb6390b5727c5fdc3a42cf3ae275ac13b44d27bb234f[ALL|FORKID] 02bc9fc26ae2bd9a9a14e9baeda4b4fdd95a00bcbf375732c647488b3ce82a2fd7',
        hex:
          '4830450221008a7c86ce3a9f5765573440143a00631bb5afa9a58b24674a7fa794bb11ffffc30220397dd4c672c3e0dbe0c4eb6390b5727c5fdc3a42cf3ae275ac13b44d27bb234f412102bc9fc26ae2bd9a9a14e9baeda4b4fdd95a00bcbf375732c647488b3ce82a2fd7'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 0.000006,
      n: 0,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 3c79ba54317c4be9cbfa5aaf357f74b97f3d9696 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a9143c79ba54317c4be9cbfa5aaf357f74b97f3d969688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qq78nwj5x97yh6wtlfd27dtlwjuh70vkjc59h8tgtg']
      }
    },
    {
      value: 0.00003664,
      n: 1,
      scriptPubKey: {
        asm:
          'OP_DUP OP_HASH160 58502a73888e0a386fc69b44850af4b2a86ac9a6 OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91458502a73888e0a386fc69b44850af4b2a86ac9a688ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['bitcoincash:qpv9q2nn3z8q5wr0c6d5fpg27je2s6kf5cavp4ney0']
      }
    }
  ],
  hex:
    '020000000189b17fd719713a2e33ee2c4f559c02ebd740a9b890d4cb787e5a9792d3c11c68010000006b4830450221008a7c86ce3a9f5765573440143a00631bb5afa9a58b24674a7fa794bb11ffffc30220397dd4c672c3e0dbe0c4eb6390b5727c5fdc3a42cf3ae275ac13b44d27bb234f412102bc9fc26ae2bd9a9a14e9baeda4b4fdd95a00bcbf375732c647488b3ce82a2fd7ffffffff0258020000000000001976a9143c79ba54317c4be9cbfa5aaf357f74b97f3d969688ac500e0000000000001976a91458502a73888e0a386fc69b44850af4b2a86ac9a688ac00000000'
}

const mockFulcrumTxHistory = {
  success: true,
  transactions: [
    {
      transactions: [
        {
          height: 31471,
          tx_hash: '385c866396f066b86d8870177a91b94dcdb46b38a4b460c4c2f936a71a3fece6'
        },
        {
          height: 33596,
          tx_hash: '6e02ecd00ad1601f8a79891c74a4cadad7fc59749a90c79e874d20b645611255'
        },
        {
          height: 33788,
          tx_hash: '55d71dbc4a9161a357b02f35ac60035e2b7ca7982c4d0800341cfa588eba4c95'
        }
      ]
    }
  ]
}

const mockTxDetails2 = {
  txid: '385c866396f066b86d8870177a91b94dcdb46b38a4b460c4c2f936a71a3fece6',
  hash: '3897d694606af69df0b25913025c62c4c81d1a83b7d8ce60068b22123d9bff73',
  version: 1,
  size: 226,
  locktime: 0,
  vin: [
    {
      txid: '340f2f838fe7e3a73a474a94f5f3b68a9f8c886a321dbfced4d3408ee003d03a',
      vout: 0,
      scriptSig: {
        asm:
          '3045022100fcbc08293c917d510f53900d50a6be30533abe6c93a5e457b7df5218ee0a811d02201f38baff6bba4ac5c8f3e7c80dc0367ebb8ebc4269c33a91da9493432bca4261[ALL|FORKID] 035525ab80b404dd2e32df8935a832d1d1b6bd571f1832496c66060979a84a5d8c',
        hex:
          '483045022100fcbc08293c917d510f53900d50a6be30533abe6c93a5e457b7df5218ee0a811d02201f38baff6bba4ac5c8f3e7c80dc0367ebb8ebc4269c33a91da9493432bca42614121035525ab80b404dd2e32df8935a832d1d1b6bd571f1832496c66060979a84a5d8c'
      },
      sequence: 4294967295
    }
  ],
  vout: [
    {
      value: 4.999774,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 91f0132fd841285399dba988108fc00744fcb99c OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a91491f0132fd841285399dba988108fc00744fcb99c88ac',
        reqSigs: 1,
        type: 'scripthash',
        addresses: ['lotus_16PSJMaesCsSgNd1d29QpF3T2Z8Bvkzzz8KRCeQzY']
      }
    },
    {
      value: 5,
      n: 0,
      scriptPubKey: {
        asm: 'OP_DUP OP_HASH160 483c8f01ada83e56fecb909c3cfb51f6711e8eff OP_EQUALVERIFY OP_CHECKSIG',
        hex: '76a914483c8f01ada83e56fecb909c3cfb51f6711e8eff88ac',
        reqSigs: 1,
        type: 'pubkeyhash',
        addresses: ['lotus_16PSJKKkyNhuwZxWRJZK9jxrcAe4abvUM9K1QyWtw']
      }
    }
  ],
  hex:
    '01000000013ad003e08e40d3d4cebf1d326a888c9f8ab6f3f5944a473aa7e3e78f832f0f34000000006b483045022100fcbc08293c917d510f53900d50a6be30533abe6c93a5e457b7df5218ee0a811d02201f38baff6bba4ac5c8f3e7c80dc0367ebb8ebc4269c33a91da9493432bca42614121035525ab80b404dd2e32df8935a832d1d1b6bd571f1832496c66060979a84a5d8cffffffff025e4a4c00000000001976a91491f0132fd841285399dba988108fc00744fcb99c88ac404b4c00000000001976a914483c8f01ada83e56fecb909c3cfb51f6711e8eff88ac00000000',
  blockhash: '00000000003a2d0f86c91602f8459b86d0f1459e840ad312d01bbbd38eb8a31b',
  confirmations: 8503,
  time: 1627007059,
  blocktime: 1627007059
}

const mockFulcrumNoTxHistory = {
  success: true,
  transactions: [
    {
      transactions: [],
      address: 'bitcoincash:qrgqqkky28jdkv3w0ctrah0mz3jcsnsklc34gtukrh'
    }
  ]
}

const mockFulcrumNoSendBalance = {
  success: true,
  transactions: [
    {
      transactions: [
        {
          height: 633578,
          tx_hash:
            'a3b62cd4f4c56ba52139179db14bffd4ab22a2e077f3c62bd5cf0541bfcaf023'
        }
      ]
    }
  ]
}

module.exports = {
  mockNoSendTx,
  mockFulcrumTxHistory,
  mockTxDetails2,
  mockFulcrumNoTxHistory,
  mockFulcrumNoSendBalance
}
