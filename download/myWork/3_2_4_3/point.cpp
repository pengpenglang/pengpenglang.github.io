#include "point.h"
#include<cmath>

Point::Point(double newX, double newY):
    x(newX),y(newY){}

Point::Point(const Point &p):
    x(p.getX()),y(p.getY()){}

Point::~Point(){}

void Point::setValue(double newX, double newY){
    x=newX,y=newY;
}

double Point::getX() const{
    return x;
}

double Point::getY() const{
    return y;
}

double getDistance(const Point &p1, const Point &p2){
    double disx=p1.getX()-p2.getX(),disy=p1.getY()-p2.getY();
    return sqrt(disx*disx+disy*disy);
}
