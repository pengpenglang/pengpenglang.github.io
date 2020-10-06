#include<bits/stdc++.h>
#include "mouse.h"
using namespace std;

int Mouse::mouseNum=0;

Mouse::Mouse(string newName):name(newName){
    cout<<name<<" is born!\n";
    mouseNum++;
}

Mouse::~Mouse(){
    cout<<name<<" is gone...\n";
    mouseNum--;
}

string Mouse::getName(){
    return name;
}
