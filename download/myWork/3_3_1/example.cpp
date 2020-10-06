#include "example.h"
#include<iostream>
using namespace std;

Example::Example(int n){
    i=n;
    cout<<"Constructing."<<endl;
}

Example::~Example(){
    cout<<"Destructing."<<endl;
}

int Example::get_i(){
    return i;
}


int sqrt_it(Example o){
    return o.get_i()*o.get_i();
}
