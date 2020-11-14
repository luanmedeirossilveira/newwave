import * as firebaseAdmin from 'firebase-admin';

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from './secret.json'; 

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvgyiv96Rb6SBh\nqA67GliAlYpFzXSUNTq7nEqwCAaLNRw835aP87lKuUXzAzE9YEIJpRPdIMVde2mh\neOS12tI7Zt4vbYL3l8RZ+Ip9d27Fi9TT2pq/N0HTl6uwDnOHLSlYAUpveDSY3j9q\nOTAFHmTj/k9YcdY3TLdtdKCfaxL3HlfD30Q+b4kwrlNtwUsH5wpZXBRTbtYUh+Bv\nAArThYq4UsCdz+Pgz2JQR15c9zinWrAsKWa83IfLCwWzRDwMEsoZlaGzHWRmqwPv\nAnIA7WwBVemMnNrMsztwq0XJ4+F1++WXSJOfh0rSSnlUdYkFrBu9qzEMlH4J2rkl\nerLwsnR9AgMBAAECggEAETCYo9FuntTgp8fot3EPYXqj+g2zIQ/sknLuirqif3Bi\ndWDVs4Aksfme7PvvTupWVXD+Vs5OnkcH07mONvR5WjmLQdxpMxxBbiluUPcJWZ5G\nKEC1HszH7PQiK+JidMca0USBGJVOm3lK/zmeJyYwrfbaqRgvKafhID6Hu81mJF9C\nBdicMtk8xEEi4N5MTlMrPImDkUHq2tBfJ1dVsI48RHDNFjCDoaQuM6tKbjaYzaWO\nSjBsttni4qCGi1lBk6UdvSWModqn0xsk5IYqQ0LCrHA+IgmEAuIrxcu/zUJONX3z\nh+9gtKLxOFMoLWsTxrnI/ulBZYmuZCkBd9Ja+QuyqQKBgQDlLuRQT7HAFkDCxFAP\ntl+46KDcy+1nefLfhVKiV6xZbgZzgkiHJyf+R5qmxxh32tJT9gJVkDjBQJPLNqHF\nTUDm1+sxfMdmiBx+H4i79BJYUPDyrCWArC9kMA1OxuTVt8cR5BFjHFp7sgI5Exy+\nn3LUENgLm9LHf2zrALUinIP75QKBgQDEDJMYaEmuXKXa2CiMNOIt8jO1sFi3gtAI\nLErs6QL3nLa/jXiNgY5FR64tyfnz6NNNnU/SUUdEYbVt69OsM+Yu0xkiA+RltvQ5\njBISwvYZsYjOdso1Fu0BqNSzXA0Td+0EM9enXRc31CPlvMj21kXk6BdS/smXwdxT\niiv2Riz8uQKBgQCh6xVHYGa2zYIHmObvkuviGgi8th8OgmwDW5BcPhD4RfGs3hkb\n06A/2Jr8xaEV3LXIuABCL1jJwDQq2HhGiyQVc+so1X2ThQqMWP8ju3bSiq0Q5mrA\nk+YPpJtiUscN739ntnhKS5fp2IQVitk+HCzmgtgAq6Cpbe+nwKI4x9e/uQKBgBA4\nMhs81Yu1YotegsxGu8etWBXaBxz3l5p1f6VmCbbOolfqrmSWqVyV95UWNrW1N3Ye\nY7I0wz6nDsmPTy3aBVsuX8/unoDDyCTSr9QZiR7LD1R1g3ks8mLGwwIrxXEs5NEK\nMPdJvlgCFw40tjOlupablQJqzebeRQosTkLLv4ERAoGAJyUXTbX06gr49dwU+lJd\nnpV4pew+nHeWGo9FVjXLdEAcTfQMFz+USTF0hlKTLj6E/YUIRDHuLgWCz4M6G1jm\ni2oGFTp0Na6GT4oDVyOmVFZWjkqcmv8vUzSjEjuafsKPb2cULxaafdBFLEJxnH5K\n79q1hbcEUz+5voeQFEv9vNs=\n-----END PRIVATE KEY-----\n",
      clientEmail: "firebase-adminsdk-ccz6x@newwavestudy-137d3.iam.gserviceaccount.com",
      projectId: "newwavestudy-137d3",
    }),
    databaseURL: 'https://newwavestudy-137d3.firebaseio.com',
  });
}

export { firebaseAdmin };