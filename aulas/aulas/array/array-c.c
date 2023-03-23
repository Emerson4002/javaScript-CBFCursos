#include <stdio.h>

int main(void) {
  int pesos[10] = { 7, 5, 10, 4, 1, 3, 5, 2, 5, 8 }; 
  int soma = 0;
  int corte = 10;

  for(int i = 0; i < 10; i++){
    if(pesos[i] < corte){
      soma = soma + pesos[i];
      
    }
  }
  
  printf("%d",soma);
  return 0;
}