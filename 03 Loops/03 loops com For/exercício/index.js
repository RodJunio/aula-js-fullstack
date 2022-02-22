let nameNave = prompt(`Qual o nome da nave?`); 

let characteresSub = prompt(`Qual caractere deseja substituir?`); 

let newCharactere = prompt(`Por qual caractere deseja substituir?`);

let newName = "";

for(let i = 0; i < nameNave.length; i++) {
    if (nameNave[i] == characteresSub) { 
        newName += newCharactere
    } else {
        newName += nameNave[i]
    }
}

alert(`O novo nome da nave é ${newName}`);