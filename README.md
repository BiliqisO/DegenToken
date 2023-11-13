# Project Title

DegenToken is an ERC-20 token contract. It extends the OpenZeppelin ERC20 implementation and includes functionality for minting, creating items, redeeming tokens, and burning tokens.

## Description

It has the following features
Minting: Only the contract owner can mint new tokens using the mint function, specifying the recipient address and the amount of tokens.
Item Creation: The owner can create items with a unique ID, name, and owner using the createItems function.
Redeeming: Token holders can redeem tokens by transferring them to the owner in exchange for ownership of a specified item.
Burning: Token holders can burn their own tokens using the burn function.

## Getting Started

### Installing

To use this contract, you need to import the ERC20.sol and Ownable.sol files from the OpenZeppelin Contracts library.

### Executing program

Deploy the contract on the Avalanche (Fuji) blockchain.
The deployer becomes the owner of the contract.
The owner can mint new tokens, create items, and manage the token supply.
Token holders can redeem tokens and burn their own tokens as needed.
License

```

## Help

Any advise for common problems or issues.
```

command to run if program contains helper info

```

## Authors

Contributors names and contact info

ex. Dominique Pizzie
ex. [@DomPizzie](https://twitter.com/dompizzie)


## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details
```
