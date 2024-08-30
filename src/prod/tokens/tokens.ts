import { TokenSymbol } from "../symbols/tokenSymbol";
import { ChainId } from "../chainId";

export interface TokenInfo {
    chains: number[];
    name: string;
    symbol: TokenSymbol,
    icon: string;
    contracts: Partial<Record<ChainId, { address: string; decimal: number }>>;
}

const baseURL = 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/'

export const tokens: TokenInfo[] = [
    {
        name: 'USD Coin',
        symbol: TokenSymbol.USDC,
        icon: baseURL + 'usdc.png',
        chains: [
            ChainId.BSC,
        ],
        contracts: {
            [ChainId.BSC]: {
                address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
                decimal: 18,
            },
        },
    },
    {
        name: "Tether USD",
        symbol: TokenSymbol.USDT,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/usdt.png',
        chains: [
            ChainId.BSC, 
        ],
        contracts: {
            [ChainId.BSC]: {
                address: '0x55d398326f99059fF775485246999027B3197955',
                decimal: 18,
            },
        },
    },
    {
        name: "Binance-Peg BUSD Token",
        symbol: TokenSymbol.BUSD,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/busd.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
                decimal: 18,
            },
        },
    },
    {
        name: "BNB",
        symbol: TokenSymbol.BNB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bnb.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', //Wrapped BNB
                decimal: 18,
            },
        },
    },
    {
        name: "Wrapped BNB",
        symbol: TokenSymbol.WBNB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/bnb.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
                decimal: 18,
            },
        },
    },
    {
        name: "Binance-Peg Bitcoin BEP2",
        symbol: TokenSymbol.BTCB,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/btc.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c',
                decimal: 18,
            },
        },
    },
    {
        name: "Dogecoin Token",
        symbol: TokenSymbol.DOGE,
        icon: 'https://izumi-finance.oss-ap-southeast-1.aliyuncs.com/tokens/doge.png',
        chains: [ChainId.BSC],
        contracts: {
            [ChainId.BSC]: {
                address: '0xbA2aE424d960c26247Dd6c32edC70B295c744C43',
                decimal: 8,
            },
        },
    },
]
