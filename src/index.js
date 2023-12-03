// Desafio Classificador de nível de Herói

let nomeDoHeroi = "traker" 
let xp = 5000

const mensagem = " Esta no nivel de "

if (xp < 1000){
    nivel = "ferro"
} else if ( xp > 1.001 && xp < 2000){
     nivel = "bronze"
} else if ( xp > 2.001 && xp < 5000){
    nivel = "prata"
} else if (xp > 6.001 && xp < 7000){
    nivel = "ouro"
} else if ( xp > 7.001 && xp < 8000){
    nivel = "platina"
} else if ( xp > 8.001 && xp < 9.000){
    nivel = "Ascendente"
} else if (xp > 9.001 && xp < 10.000){
    nivel = "Imortal"
} else if (xp >= 10.001){
    nivel = "radiante"
}

console.log ("O Héroi de nomne " + nomeDoHeroi + " está no nivél de " + nivel)
  
    
    

    
