#include"randomnum.h"
#include<bits/stdc++.h>
using namespace std;

RandomNum::RandomNum(){
    srand(time(NULL));
}

RandomNum::RandomNum(unsigned int seed){
    srand(seed);
}

void RandomNum::setSeed(unsigned int seed){
    srand(seed);
}

int RandomNum::random(){
    return rand();
}

int RandomNum::random(int max){
    return rand()%max;
}

double RandomNum::frandom(){
    return 1.0*rand()/RAND_MAX;
}
