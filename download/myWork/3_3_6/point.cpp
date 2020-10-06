#include<iostream>
#include "point.h"
using namespace std;

Point::Point(int x1,int y1):x(x1),y(y1){
    cout<<"Point:"<<x<<' '<<y<<'\n';
}

Point::~Point(){
    cout<<"Point destruction!\n";
}
