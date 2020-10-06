#include<iostream>
#include "circle.h"
using namespace std;

Circle::Circle(int cx, int cy, int r):center(cx,cy),radius(r){
    cout<<"Circle radius:"<<radius<<'\n';
}

Circle::~Circle(){
    cout<<"Circle destruction!\n";
}
