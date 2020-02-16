pragma solidity ^0.5.12;

contract CoFiles {
    
  struct FileStruct{
      string ipfsHash;
      string swarmHash;
      string title;
      string email;
      address owner;
      uint256 indexFile;
  }

  FileStruct[] public files;
  mapping (string => uint256) private ipfsToFile;   //index in struct of each file
  mapping (string => uint256) private swarmToFile;   //index in struct of each file
  mapping(address => uint256[]) indexFiles; //files in struct from each address


	constructor() public {
    addFile("", "", "", "");  //Nothing at position zero
	}

  //Submit Registry
	function addFile(string memory  _ipfsHash, string memory  _swarmHash, string memory  _title, string memory  _email) public returns (uint256) {
		require (_ipfsExists(_ipfsHash) == 0, "files exists");

    uint256 indexStruct = files.push(FileStruct( {
        ipfsHash: _ipfsHash,
        swarmHash: _swarmHash,
        title: _title,
        email: _email,
        owner: msg.sender,
        indexFile: 0
    })) -1;

    ipfsToFile[_ipfsHash] = indexStruct;
    swarmToFile[_swarmHash] = indexStruct;
    uint256 indexFile = indexFiles[msg.sender].push(indexStruct) - 1;
    files[indexStruct].indexFile = indexFile;

    emit AddFile(msg.sender, _ipfsHash, _swarmHash);

		return indexStruct;
	}

  //Confirm Hash
	function getOwnerFile(string memory _hashFile) public view returns (address owner, string memory email) {
		if (ipfsToFile[_hashFile] > 0) {
      owner = files[ipfsToFile[_hashFile]].owner;
      email = files[ipfsToFile[_hashFile]].email;
      return (owner, email);
    }
    else if (swarmToFile[_hashFile] > 0) {
      owner = files[swarmToFile[_hashFile]].owner;
      email = files[swarmToFile[_hashFile]].email;
      return (owner, email);
    }
	}


	function _ipfsExists(string memory _fileHash) private view returns (uint256) {
		return ipfsToFile[_fileHash];
	}

	function _swarmExists(string memory _fileHash) private view returns (uint256) {
		return swarmToFile[_fileHash];
	}

  event AddFile(address _owner, string _ipfsHash, string _swarmHash);

}
