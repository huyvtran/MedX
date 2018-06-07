pragma solidity ^0.4.23;

import "./Keystore.sol";

contract KeystoreFactory {

    mapping(address=>Keystore) owners;

    event Created(address createdBy);

    function create() public returns (Keystore ks){
        require(owners[msg.sender] == address(0x0));
        ks = new Keystore();
        ks.transferOwnership(msg.sender);
        owners[msg.sender] = ks;
        emit Created(msg.sender);
    }

}
