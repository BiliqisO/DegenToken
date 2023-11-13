// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DegenToken is ERC20, Ownable {
    struct Item {
        uint ItemId;
        string Name;
        address ItemOwner;
    }
    mapping(uint => Item) public mapItem;
    uint id;

    constructor() ERC20("Degen", "DGN") Ownable() {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function createItems(string memory _name) public onlyOwner {
        id++;
        Item storage item = mapItem[id];
        item.ItemId = id;
        item.Name = _name;
        item.ItemOwner = msg.sender;
    }

    function redeem(uint _id, uint amount) public {
        Item storage item = mapItem[_id];
        transfer(item.ItemOwner, amount);
        item.ItemOwner = msg.sender;
    }

    function burn(uint amount) public {
        _burn(msg.sender, amount);
    }
}
