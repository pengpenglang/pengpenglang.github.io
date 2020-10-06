#include<iostream>
#include "dog.h"
using namespace std;

int Dog::number=0;

Dog::Dog(){
    number++;
    cout<<"New Dog"<<endl;
}

Dog::~Dog(){
    number--;
    cout<<"A Dog Die"<<endl;
}
