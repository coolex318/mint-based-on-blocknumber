/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BlockalizerGeneration,
  BlockalizerGenerationInterface,
} from "../../../../contracts/previous/BlockalizerV2.sol/BlockalizerGeneration";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiryTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "expiryTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTokenCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementTokenCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isGoldenNumber",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161046f38038061046f83398101604081905261002f916100c0565b61003833610070565b6004849055600583905560068290556003819055826100586001436100f6565b61006391904061011d565b6002555061013f92505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080600080608085870312156100d657600080fd5b505082516020840151604085015160609095015191969095509092509050565b8181038181111561011757634e487b7160e01b600052601160045260246000fd5b92915050565b60008261013a57634e487b7160e01b600052601260045260246000fd5b500690565b6103218061014e6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638da5cb5b116100665780638da5cb5b146100e257806399bc0aea146100fd578063bb79ab9814610106578063d5abeb011461011e578063f2fde38b1461012757600080fd5b8063262ec85d146100a35780636817c76c146100ad578063715018a6146100c957806378a89567146100d157806378e97925146100d9575b600080fd5b6100ab61013a565b005b6100b660045481565b6040519081526020015b60405180910390f35b6100ab610152565b6100b6610164565b6100b660035481565b6000546040516001600160a01b0390911681526020016100c0565b6100b660065481565b61010e610174565b60405190151581526020016100c0565b6100b660055481565b6100ab6101353660046102bb565b610193565b610142610211565b610150600180546001019055565b565b61015a610211565b610150600061026b565b600061016f60015490565b905090565b600061017e610211565b600061018960015490565b6002541491505090565b61019b610211565b6001600160a01b0381166102055760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61020e8161026b565b50565b6000546001600160a01b031633146101505760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101fc565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156102cd57600080fd5b81356001600160a01b03811681146102e457600080fd5b939250505056fea26469706673582212205df9ca94ad433dec1ce013a18685b47bc061bb754af919c5996a8f134d75066064736f6c63430008110033";

type BlockalizerGenerationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BlockalizerGenerationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BlockalizerGeneration__factory extends ContractFactory {
  constructor(...args: BlockalizerGenerationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _mintPrice: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _expiryTime: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BlockalizerGeneration> {
    return super.deploy(
      _mintPrice,
      _maxSupply,
      _expiryTime,
      _startTime,
      overrides || {}
    ) as Promise<BlockalizerGeneration>;
  }
  override getDeployTransaction(
    _mintPrice: PromiseOrValue<BigNumberish>,
    _maxSupply: PromiseOrValue<BigNumberish>,
    _expiryTime: PromiseOrValue<BigNumberish>,
    _startTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _mintPrice,
      _maxSupply,
      _expiryTime,
      _startTime,
      overrides || {}
    );
  }
  override attach(address: string): BlockalizerGeneration {
    return super.attach(address) as BlockalizerGeneration;
  }
  override connect(signer: Signer): BlockalizerGeneration__factory {
    return super.connect(signer) as BlockalizerGeneration__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BlockalizerGenerationInterface {
    return new utils.Interface(_abi) as BlockalizerGenerationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BlockalizerGeneration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BlockalizerGeneration;
  }
}
